import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutUs() {
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
              <span className="block">Über </span>
              <span className="block text-yudai-blue dark:text-blue-400">Yudai</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Wir sind Ihr Partner für modernes Webdesign - schnell, günstig und effektiv.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="lg:text-center">
            <h2 className="text-base text-yudai-green font-semibold tracking-wide uppercase">Unsere Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Kleine Unternehmen online erfolgreich machen
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Wir glauben, dass jedes Unternehmen eine professionelle Online-Präsenz verdient - unabhängig von der Größe oder dem Budget.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yudai-blue text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Zielgerichtetes Design</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Unsere Designs sind nicht nur schön, sondern auch zweckorientiert. Sie sollen Besucher in Kunden verwandeln.
                </dd>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yudai-green text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Schnelle Umsetzung</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Wir verstehen, dass Zeit Geld ist. Daher setzen wir Ihre Website in Rekordzeit um.
                </dd>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yudai-blue text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Faire Preise</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Unsere Preisgestaltung ist transparent und erschwinglich, speziell für kleine Unternehmen und Selbstständige.
                </dd>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yudai-green text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Persönlicher Support</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Wir sind immer für Sie da, wenn Sie uns brauchen, und bieten schnellen und freundlichen Support.
                </dd>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-yudai-blue dark:bg-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Bereit, Ihr Projekt zu starten?</span>
            <span className="block text-blue-200">Kontaktieren Sie uns noch heute.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button className="bg-white text-yudai-blue dark:bg-gray-100 hover:bg-gray-50">
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
