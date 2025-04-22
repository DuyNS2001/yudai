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
