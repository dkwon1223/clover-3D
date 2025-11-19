const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">
              Products
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Clover Station
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Clover Mini
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Clover Flex
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Clover Go
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">
              Solutions
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Retail
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Professional Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">
              Resources
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  App Market
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">
              Partners
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Partner Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Resellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Developers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">
              Company
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">
              Support
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-150 ease-in-out"
                >
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-3xl font-bold text-green-600 tracking-tight">
              <img
                src={"/images/full-logo.png"}
                alt="Clover Logo"
                className="h-8 w-auto"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <a
                href="#"
                className="hover:text-green-600 transition duration-150 ease-in-out"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-green-600 transition duration-150 ease-in-out"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-green-600 transition duration-150 ease-in-out"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="hover:text-green-600 transition duration-150 ease-in-out"
              >
                Legal
              </a>
            </div>

            <div className="text-sm text-gray-600">
              © 2025 Clover Network, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
