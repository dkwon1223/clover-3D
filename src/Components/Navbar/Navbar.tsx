import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const CloverHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-10 flex items-center bg-[#238801]">
        <p className="text-white text-sm py-4 ps-8">
          <span className="font-semibold">ONLINE ONLY OFFER: </span>
          Get $450 statement credit when you buy Station, Mini or Flex*
        </p>
      </div>

      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="flex mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 w-full justify-between items-center">
            <div className="flex items-center">
              <div className="text-3xl font-bold text--[#238801] tracking-tight">
                <img
                  src={"/images/full-logo.png"}
                  alt="Clover Logo"
                  className="h-6 w-auto"
                />
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-6 ml-10 py-4 rounded-md justify-between w-full text-sm">
              <div className="flex space-x-6">
                <div className="relative group">
                  <button className="text-gray-900 hover:text--[#238801] font-medium flex items-center">
                    Restaurants
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-gray-900 hover:text--[#238801] font-medium flex items-center">
                    Services
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-gray-900 hover:text--[#238801] font-medium flex items-center">
                    Retail
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-gray-900 hover:text--[#238801] font-medium flex items-center">
                    Healthcare
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-gray-900 hover:text--[#238801] font-medium flex items-center">
                    Products
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-gray-900 hover:text--[#238801] font-medium flex items-center">
                    Resources
                  </button>
                </div>
              </div>
              <div className="flex flex-row flex-nowrap items-center space-x-6">
                <a href="#" className="text-gray-900 hover:text--[#238801]">
                  Log In
                </a>
                <a href="#" className="text-gray-900 hover:text--[#238801]">
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text--[#238801] font-medium"
                >
                  Pricing
                </a>
                <a href="#" className="text-gray-900 hover:text--[#238801]">
                  Shop systems
                </a>
                <button className="bg-[#238801] text-white px-6 py-2.5 rounded-md hover:bg-[#225522] transition-colors">
                  Contact Sales
                </button>
                <ShoppingCart size={34} />
              </div>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block font-medium text-gray-900">
                Log In
              </a>
              <a href="#" className="block font-medium text-gray-900">
                Help Center
              </a>
              <a href="#" className="block font-medium text-gray-900">
                Pricing
              </a>
              <a href="#" className="block font-medium text-gray-900">
                Shop systems
              </a>
              <button className="w-full bg-[#238801] text-white px-6 py-3 rounded-md font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default CloverHeader;
