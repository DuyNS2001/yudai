
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hier würde normalerweise die Logik zum Senden des Formulars stehen
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
    });
    // Formular zurücksetzen
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Kontaktieren Sie </span>
              <span className="block text-yudai-blue dark:text-blue-400">Yudai</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Haben Sie Fragen oder möchten Sie ein Angebot anfordern? Wir freuen uns, von Ihnen zu hören!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Schreiben Sie uns</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Ihr Name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    E-Mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="ihre-email@beispiel.de"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+49 123 456789"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Betreff
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Betreff Ihrer Anfrage"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Ihre Nachricht an uns"
                    className="w-full min-h-[150px]"
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-yudai-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    Nachricht senden
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-10 md:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kontaktinformationen</h2>
              <div className="prose dark:prose-invert">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Adresse</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yudai GmbH<br />
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Kontakt</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <strong>E-Mail:</strong>{' '}
                    <a href="mailto:info@yudai.de" className="text-yudai-blue dark:text-blue-400 hover:underline">
                      info@yudai.de
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Telefon:</strong>{' '}
                    <a href="tel:+49123456789" className="text-yudai-blue dark:text-blue-400 hover:underline">
                      +49 123 456789
                    </a>
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Geschäftszeiten</h3>
                  <table className="w-full text-gray-600 dark:text-gray-300">
                    <tbody>
                      <tr>
                        <td>Montag - Freitag:</td>
                        <td>9:00 - 18:00 Uhr</td>
                      </tr>
                      <tr>
                        <td>Samstag:</td>
                        <td>Nach Vereinbarung</td>
                      </tr>
                      <tr>
                        <td>Sonntag:</td>
                        <td>Geschlossen</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-w-16 aspect-h-8 md:aspect-h-6">
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-400">Hier würde eine Karte angezeigt werden</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
