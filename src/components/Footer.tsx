
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block">
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Yudai bietet günstiges, schnelles und modernes Webdesign speziell für kleine Unternehmen, 
              Läden und Selbstständige, damit Sie online sichtbar werden.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-yudai-blue dark:hover:text-blue-400">
                  Start
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-yudai-blue dark:hover:text-blue-400">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-yudai-blue dark:hover:text-blue-400">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-yudai-blue dark:hover:text-blue-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-yudai-blue dark:hover:text-blue-400">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Kontakt
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                Email: <a href="mailto:info@yudai.de" className="hover:text-yudai-blue dark:hover:text-blue-400">
                  info@yudai.de
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Tel: <a href="tel:+49123456789" className="hover:text-yudai-blue dark:hover:text-blue-400">
                  +49 123 456789
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            © {currentYear} Yudai. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
