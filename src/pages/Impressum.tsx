
import React from "react";

export default function Impressum() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Impressum</h1>
      <p className="mb-2 text-gray-600 dark:text-gray-300">
        <strong>Yudai GmbH</strong><br />
        Musterstraße 123<br />
        12345 Musterstadt<br />
        Deutschland
      </p>
      <p className="mb-2 text-gray-600 dark:text-gray-300">
        Telefon: +49 123 456789<br />
        E-Mail: <a href="mailto:info@yudai.de" className="text-yudai-blue dark:text-blue-400 underline">info@yudai.de</a>
      </p>
      <p className="mb-2 text-gray-600 dark:text-gray-300">
        Vertretungsberechtigter Geschäftsführer: Max Mustermann<br />
        Handelsregister: Musterstadt HRB 123456<br />
        USt-ID: DE123456789
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
      <p className="text-gray-600 dark:text-gray-300">Max Mustermann, Anschrift wie oben.</p>
      <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Haftungsausschluss</h2>
      <p className="text-gray-600 dark:text-gray-300">Inhaltlich verantwortlich gemäß §§ 55 RStV: Max Mustermann.<br/> Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.</p>
    </div>
  );
}
