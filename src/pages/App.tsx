import { CloverThrobber } from "../Components/Throbber/CloverThrobber";
import Navbar from "../Components/Navbar/Navbar";
import { DeviceType, featureSelections } from "../global";
import DeviceSwitch from "../Components/DeviceSwitch/DeviceSwitch";
import FeatureSection from "../Components/FeatureSection/FeatureSection";
import Footer from "../Components/Footer/Footer";
import { useContext, useMemo } from "react";
import { DeviceContext } from "../Context/DeviceContext";

const App: React.FC = () => {
  const { selectedDevice, setSelectedDevice } = useContext(DeviceContext);

  const features = useMemo(() => {
    return featureSelections(selectedDevice);
  }, [selectedDevice]);

  const threeDSection = document.getElementById("3d-experience");

  return (
    <div className="h-screen bg-white snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start">
        <Navbar />
        <div className="flex items-center justify-center py-4 bg-gray-100 gap-20 bg-white border-b border-gray-200 pe-20">
          <div
            className={`flex flex-col items-center hover:outline-2 hover:outline-green-600 rounded-md px-4 py-2 ${
              selectedDevice === DeviceType.GO
                ? "outline outline-2 outline-green-600"
                : ""
            }`}
          >
            <button onClick={() => {
              setSelectedDevice(DeviceType.GO);
              threeDSection?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <img
                src={"/images/go-stock5.png"}
                alt="Clover Logo"
                className="h-20 w-24"
              />
              <p>Go</p>
            </button>
          </div>
          <div
            className={`flex flex-col items-center hover:outline-2 hover:outline-green-600 rounded-md px-4 py-2 ${
              selectedDevice === DeviceType.FLEX
                ? "outline outline-2 outline-green-600"
                : ""
            }`}
          >
            <button onClick={() => {
              setSelectedDevice(DeviceType.FLEX);
              threeDSection?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <img
                src={"/images/flex-stock3.png"}
                alt="Clover Logo"
                className="h-20 w-auto"
              />
              <p>Flex</p>
            </button>
          </div>
        </div>
      </div>

      <section id="3d-experience" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden relative snap-start">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-100/50 skew-x-12 translate-x-20 z-0" />
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[80vh]">
            <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {features[0].title.toLowerCase().includes("flex")
                  ? "Clover Flex"
                  : "Clover Go"}
                <div className="inline-block align-middle ml-4">
                  <CloverThrobber duration={1000} />
                </div>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                {features[0].title.toLowerCase().includes("flex")
                  ? "All payments handhelp power"
                  : "Portable Payments, Powered by Your Phone. Accept credit cards anywhere with WiFi or cellular data."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#238801] text-white px-8 py-4 rounded-md text-sm font-semibold hover:bg-[#225522] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Get Clover Flex
                </button>
                <button className="bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-md text-sm font-medium hover:border-gray-900 hover:bg-gray-50 transition-all">
                  Learn more
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2 h-[100dvh] w-full relative flex items-center justify-center">
              <DeviceSwitch />
            </div>
          </div>
        </div>
      </section>

      {features.map((feature) => (
        <FeatureSection
          key={feature.id}
          id={feature.id}
          title={feature.title}
          description={feature.description}
          imagePosition={feature.imagePosition}
          imagePath={feature.imagePath}
          imageAlt={feature.imageAlt}
        />
      ))}

      <section className="bg-gray-900 py-20 snap-start">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Get Clover Flex and start accepting payments anywhere your business
            takes you.
          </p>
          <button className="bg-[#238801] text-white px-10 py-4 rounded-md text-lg font-medium hover:bg-[#225522] transition-colors">
            Get Clover Flex
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
