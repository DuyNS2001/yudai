
import React from "react";

export default function Datenschutz() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Datenschutzerklärung</h1>
      <p className="mb-2 text-gray-600 dark:text-gray-300">
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten im Rahmen der Nutzung unserer Website.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Verantwortliche Stelle</h2>
      <p className="text-gray-600 dark:text-gray-300">Yudai GmbH, Musterstraße 123, 12345 Musterstadt, info@yudai.de</p>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Zugriffsdaten</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Beim Besuch unserer Website werden automatisch Daten wie Ihre IP-Adresse, Zeitpunkt Ihres Besuchs, aufgerufene Seiten etc. gespeichert. Diese Daten dienen ausschließlich zur Gewährleistung eines störungsfreien Betriebs.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Ihre Rechte</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Sie haben jederzeit ein Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten sowie auf Berichtigung, Sperrung oder Löschung dieser Daten.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mt-6">Für nähere Informationen wenden Sie sich bitte an info@yudai.de.</p>
    </div>
  );
}
