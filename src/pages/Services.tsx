import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Services() {
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
              <span className="block">Unsere </span>
              <span className="block text-yudai-blue dark:text-blue-400">Leistungen</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Professionelles Webdesign und Online-Marketing für Ihr Unternehmen
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yudai-green font-semibold tracking-wide uppercase">Was wir bieten</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Maßgeschneiderte Lösungen für Ihren Online-Erfolg
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Vom Webdesign bis zur Suchmaschinenoptimierung - wir haben alles, was Sie für eine erfolgreiche Online-Präsenz benötigen.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Service Cards */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12 bg-white dark:bg-gray-800"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Webdesign Card */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-yudai-blue dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Webdesign</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Individuell gestaltete, moderne Websites, die perfekt auf Ihr Unternehmen zugeschnitten sind und auf allen Geräten optimal aussehen.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 mr-2 text-yudai-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Responsive Design
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 mr-2 text-yudai-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Modernes Layout
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 mr-2 text-yudai-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Benutzerfreundlichkeit
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* SEO Card */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-yudai-green dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Suchmaschinenoptimierung (SEO)</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Verbessern Sie Ihre Sichtbarkeit bei Google und anderen Suchmaschinen, um mehr potenzielle Kunden zu erreichen.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 mr-2 text-yudai-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Keyword-Optimierung
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 mr-2 text-yudai-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Lokales SEO
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 mr-2 text-yudai-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Technische SEO
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Content Card */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Content-Erstellung</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Professionelle Texte und Inhalte, die Ihre Zielgruppe ansprechen und zum Handeln motivieren.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 mr-2 text-yudai-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SEO-optimierte Texte
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 mr-2 text-yudai-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Blog-Artikel
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 mr-2 text-yudai-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Produktbeschreibungen
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-yudai-green font-semibold tracking-wide uppercase">Unser Prozess</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              So arbeiten wir mit Ihnen zusammen
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mb-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-yudai-blue dark:text-blue-400 mb-2">1. Kennenlernen & Planung</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Wir besprechen Ihre Ziele, Wünsche und Anforderungen, um ein maßgeschneidertes Konzept zu erstellen.
                    </p>
                  </div>
                </div>
                <div className="mx-4 md:mx-0 my-2 md:my-0 flex-shrink-0 bg-yudai-blue dark:bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg z-10">
                  <span className="font-bold">1</span>
                </div>
                <div className="flex-1 md:pl-8 hidden md:block"></div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mb-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 hidden md:block"></div>
                <div className="mx-4 md:mx-0 my-2 md:my-0 flex-shrink-0 bg-yudai-blue dark:bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg z-10">
                  <span className="font-bold">2</span>
                </div>
                <div className="flex-1 md:pl-8">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-yudai-blue dark:text-blue-400 mb-2">2. Design & Entwicklung</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Wir gestalten und entwickeln Ihre Website nach den besprochenen Anforderungen und Ihren Vorstellungen.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mb-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-yudai-blue dark:text-blue-400 mb-2">3. Feedback & Anpassungen</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sie geben uns Feedback zum ersten Entwurf, und wir nehmen die gewünschten Anpassungen vor.
                    </p>
                  </div>
                </div>
                <div className="mx-4 md:mx-0 my-2 md:my-0 flex-shrink-0 bg-yudai-blue dark:bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg z-10">
                  <span className="font-bold">3</span>
                </div>
                <div className="flex-1 md:pl-8 hidden md:block"></div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 hidden md:block"></div>
                <div className="mx-4 md:mx-0 my-2 md:my-0 flex-shrink-0 bg-yudai-blue dark:bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg z-10">
                  <span className="font-bold">4</span>
                </div>
                <div className="flex-1 md:pl-8">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-yudai-blue dark:text-blue-400 mb-2">4. Launch & Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Nach der Finalisierung veröffentlichen wir Ihre Website und stehen Ihnen bei Fragen zur Seite.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-yudai-green dark:bg-green-900"
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Bereit, Ihre Online-Präsenz zu verbessern?</span>
            <span className="block text-green-100">Kontaktieren Sie uns für ein unverbindliches Angebot.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button className="bg-white text-yudai-green hover:bg-gray-50 dark:bg-gray-100">
                <a href="/contact">
                  Kostenlose Beratung
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
