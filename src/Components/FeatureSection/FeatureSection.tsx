import { FeatureSections } from "../../global";

const FeatureSection: React.FC<FeatureSections> = ({
  title,
  description,
  imagePosition,
  imagePath,
  imageAlt,
}) => {
  const imageFirst = imagePosition === "left";
  const layoutClass = imageFirst ? "lg:flex-row-reverse" : "";

  const textContent = (
    <div className="space-y-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {typeof description === "string" ? (
        <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
      ) : (
        <ul className="list-disc pl-6 space-y-4">
          {description.bullets.map((bullet, index) => (
            <li key={index} className="text-gray-600">
              <strong className="text-gray-900">{bullet.title}</strong>
              <p className="leading-relaxed">{bullet.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageContent = (
    <div
      className={`flex justify-center ${
        imageFirst ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      <div className="w-full max-w-md aspect-square bg-gradient-to-br from-green-100 to-green-50 rounded-3xl flex items-center justify-center shadow-xl">
        <img className="text-9xl" src={imagePath} alt={imageAlt} />
      </div>
    </div>
  );

  return (
    <section className={`min-h-screen flex items-center py-20 snap-start ${imagePosition === "left" ? "bg-white" : "bg-gray-50"}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${layoutClass}`}
        >
          {imageFirst ? (
            <>
              <div className="order-2 lg:order-1">{imageContent}</div>
              <div className="order-1 lg:order-2">{textContent}</div>
            </>
          ) : (
            <>
              <div className="order-1">{textContent}</div>
              <div className="order-2">{imageContent}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
