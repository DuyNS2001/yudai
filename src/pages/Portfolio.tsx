import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Tat Chicken",
      category: "Gastronomie",
      description: "Moderne Website für ein koreanisches Restaurant mit schön gestaltende Speisekarte.",
      image: "lovable-uploads/TATSpeisekartecover.png",
      tags: ["Webdesign", "Responsive Design", "SEO"],
      website: "https://tatchicken.de"
    },
    {
      title: "Blumen Hoffmann",
      category: "Einzelhandel",
      description: "Elegante Webpräsenz für einen lokalen Blumenladen mit Produktgalerie und Bestellmöglichkeit.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Webdesign", "E-Commerce", "Lokales SEO"],
      website: "https://blumen-hoffmann.de"
    },
    {
      title: "Rechtsanwalt Schmidt",
      category: "Dienstleistung",
      description: "Professionelle Website für eine Rechtsanwaltskanzlei mit Terminbuchungssystem.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Webdesign", "Terminbuchung", "Corporate Design"],
      website: "https://ra-schmidt.de"
    },
    {
      title: "Fitness Studio Active",
      category: "Gesundheit & Fitness",
      description: "Dynamische Website für ein Fitnessstudio mit Kursplan und Mitgliederbereich.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Webdesign", "Mitgliederverwaltung", "Responsive Design"],
      website: "https://fitnessstudio-active.de"
    },
    {
      title: "Handwerker Müller",
      category: "Handwerk",
      description: "Übersichtliche Website für einen Handwerksbetrieb mit Referenzgalerie und Kontaktformular.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Webdesign", "Referenzgalerie", "Lokales SEO"],
      website: "https://handwerker-mueller.de"
    },
    {
      title: "Praxis Dr. Gesund",
      category: "Gesundheit",
      description: "Vertrauenerweckende Website für eine Arztpraxis mit Informationen zu Behandlungen und Online-Terminvergabe.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Webdesign", "Terminbuchung", "Barrierefreiheit"],
      website: "https://praxis-dr-gesund.de"
    },
  ];

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
              <span className="block">Unser </span>
              <span className="block text-yudai-blue dark:text-blue-400">Portfolio</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Entdecken Sie einige unserer Projekte und sehen Sie, wie wir lokalen Unternehmen zu Online-Erfolg verholfen haben.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-yudai-blue dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      <p className="text-sm text-yudai-blue dark:text-blue-400 mb-2">{item.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-yudai-blue dark:bg-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Sie haben ein Projekt im Sinn?</span>
            <span className="block text-blue-200">Kontaktieren Sie uns für eine individuelle Beratung.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button className="bg-white text-yudai-blue hover:bg-gray-50 dark:bg-gray-100">
                <a href="/contact">
                  Kontakt aufnehmen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
