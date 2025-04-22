import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Kontaktieren Sie </span>
              <span className="block text-yudai-blue dark:text-blue-400">Yudai</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Haben Sie Fragen oder möchten Sie ein Angebot anfordern? Wir freuen uns, von Ihnen zu hören!
            </p>
            <div className="mt-8">
              <a href="mailto:duyyy@icloud.com">
                <Button className="bg-yudai-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3">
                  E-Mail senden
                </Button>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Die E-Mail wird an <strong>duyyy@icloud.com</strong> gesendet.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <div className="mt-10 md:mt-0">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:shadow-lg transition-shadow duration-300"
              >
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
              </motion.div>
            </div>
          </div>

  );
}
