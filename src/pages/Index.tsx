import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                <span className="block">Modernes Webdesign</span>
                <span className="block text-yudai-blue dark:text-blue-400">für Ihren Online-Erfolg</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 max-w-md text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl"
              >
                Yudai bietet günstiges, schnelles und modernes Webdesign speziell für kleine Unternehmen, Läden und Selbstständige.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-5 sm:mt-8 sm:flex"
              >
                <div className="rounded-md shadow">
                  <Button className="w-full flex items-center justify-center px-8 py-3 bg-yudai-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                    <Link to="/contact" className="flex items-center">
                      Jetzt anfragen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3">
                    <Link to="/portfolio">
                      Beispiele ansehen
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                src="/lovable-uploads/87c58dcc-1a08-45e9-a834-befed96b1cec.png" 
                alt="Yudai Logo" 
                className="mx-auto w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="lg:text-center">
            <h2 className="text-base text-yudai-green font-semibold tracking-wide uppercase">Unsere Vorteile</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Warum Yudai die richtige Wahl ist
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Wir verstehen die Bedürfnisse kleiner Unternehmen und bieten maßgeschneiderte Lösungen für Ihren Online-Erfolg.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature Cards with Hover Effects */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yudai-blue text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Modern und attraktiv</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Unsere Websites sind nicht nur funktional, sondern auch ästhetisch ansprechend und modern gestaltet.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yudai-green text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Schnelle Umsetzung</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Keine langen Wartezeiten - wir bringen Ihr Unternehmen schnell ins Internet.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yudai-blue text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Günstige Preise</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Professionelles Webdesign muss nicht teuer sein - wir bieten faire und transparente Preise.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yudai-green text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">SEO-optimiert</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Wir sorgen dafür, dass Ihre Website bei Google & Co. gut gefunden wird.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-yudai-green font-semibold tracking-wide uppercase">Unsere Leistungen</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Was wir für Sie tun können
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="text-yudai-blue dark:text-blue-400 text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Webdesign</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Professionelle, responsive Websites, die auf allen Geräten perfekt aussehen.
                </p>
                <div className="mt-4">
                  <Link to="/services" className="text-yudai-blue dark:text-blue-400 hover:underline flex items-center">
                    Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="text-yudai-green dark:text-green-400 text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">SEO-Optimierung</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Verbessern Sie Ihre Sichtbarkeit bei Google und erreichen Sie mehr potenzielle Kunden.
                </p>
                <div className="mt-4">
                  <Link to="/services" className="text-yudai-green dark:text-green-400 hover:underline flex items-center">
                    Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="text-purple-600 dark:text-purple-400 text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Content-Erstellung</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Professionelle Texte, die Ihre Kunden ansprechen und zum Handeln motivieren.
                </p>
                <div className="mt-4">
                  <Link to="/services" className="text-purple-600 dark:text-purple-400 hover:underline flex items-center">
                    Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-yudai-green font-semibold tracking-wide uppercase">Kundenstimmen</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Was unsere Kunden sagen
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Max Müller</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Café Sonnenschein</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Yudai hat uns eine wunderschöne Website erstellt, die genau unsere Café-Atmosphäre widerspiegelt. Seit dem Launch haben wir deutlich mehr Reservierungen!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Laura Schmidt</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Friseursalon Beauty</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Die neue Website hat meinen Salon komplett transformiert. Das Online-Buchungssystem spart mir und meinen Kunden viel Zeit. Absolut empfehlenswert!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Thomas Weber</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Elektroinstallationen Weber</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Schnell, professionell und zu einem fairen Preis. Yudai hat verstanden, was mein Handwerksbetrieb braucht. Die SEO-Optimierung bringt mir regelmäßig neue Anfragen."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yudai-blue dark:bg-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Bereit, online durchzustarten?</span>
            <span className="block text-blue-200">Kontaktieren Sie uns noch heute.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button className="bg-white text-yudai-blue hover:bg-gray-50 dark:bg-gray-100">
                <Link to="/contact">
                  Kostenlose Beratung
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
