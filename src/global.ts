import * as THREE from "three";

export enum DeviceType {
  FLEX,
  GO,
}

export type Point = {
  cameraPosition?: THREE.Vector3;
  position: THREE.Vector3;
  element: string;
  description: string;
};

export type BulletPoint = {
  title: string;
  description: string;
};

export type FeatureDescription = string | { bullets: BulletPoint[] };

export type FeatureSections = {
  id: number;
  title: string;
  description: FeatureDescription;
  imagePosition: "left" | "right";
  imagePath: string;
  imageAlt: string;
};

export const CLOVER_FLEX = {
  title: "Clover Flex",
  features: [
    "Speaker",
    "Credit card reader for swipe & dip",
    "Built-in camera & barcode scanner",
    "Built-in receipt printer",
    "Contactless reader",
  ],
};

export const CLOVER_GO = {
  title: "Clover GO",
  features: [
    "USB-C charger",
    "Credit card reader",
    "Contactless reader",
    "Lanyard slot",
  ],
};

export const moveCamera = (point: Point, camera: THREE.Camera | null) => {
  console.log('HIT')
    if (!camera || !point.cameraPosition) return;

    const duration = 1.5; // seconds
    const start = camera.position.clone();
    const end = point.cameraPosition.clone();
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - startTime) / 1000; // convert ms to seconds
      const progress = Math.min(elapsed / duration, 1); // clamp between 0 and 1

      camera.position.lerpVectors(start, end, progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

export const meshPoints = (deviceType: DeviceType) => {
  if (deviceType === DeviceType.FLEX) {
    const points: Point[] = [
      {
        position: new THREE.Vector3(-0.45, -0.11, -0.57),
        element: "Speaker",
        description:
          "3.5-mm audio jack (with L/R output and mic input), speaker, and microphone",
        cameraPosition: new THREE.Vector3(-2.6, 0.33, -1.45),
      },
      {
        position: new THREE.Vector3(-0.0, -0.09, 0.98),
        element: "Card-reader",
        description: "EMV chip card reader, NFC reader, and MSR reader.",
        cameraPosition: new THREE.Vector3(-0, 1.58, 2.55),
      },
      {
        position: new THREE.Vector3(-0.0, -0.1, -0.97),
        element: "Camera & Scanner",
        description:
          "Built-in 5MP forward-looking camera with a landscape orientation. 1D and 2D trigger-activated barcode scanner with a dedicated external button for barcode.",
        cameraPosition: new THREE.Vector3(-0.81, 0.2, -2.37),
      },
      {
        position: new THREE.Vector3(0.02, -0.4, -0.88),
        element: "Receipt Printer",
        description: "Internal thermal receipt printer.",
        cameraPosition: new THREE.Vector3(-0.67, -0.96, -2.76),
      },
      {
        position: new THREE.Vector3(-0.01, -0.0, -0.64),
        element: "Tap to Pay",
        description: "EMV chip card reader, NFC reader, and MSR reader.",
        cameraPosition: new THREE.Vector3(8.85, 3, 0),
      },
    ];

    return points;
  } else if (deviceType === DeviceType.GO) {
    const points: Point[] = [
      {
        position: new THREE.Vector3(0.0, -0.03, 0.26),
        element: "Charger",
        description: "USB-C charging port",
        cameraPosition: new THREE.Vector3(0, 0.39, 1.7),
      },
      {
        position: new THREE.Vector3(-0.0, -0.03, -0.275),
        element: "Card-reader",
        description: "EMV chip card reader, NFC reader, and MSR reader.",
        cameraPosition: new THREE.Vector3(0.0, 0.45, -1.7),
      },
      {
        position: new THREE.Vector3(-0.0, 0.05, -0.0),
        element: "Tap to Pay",
        description: "EMV chip card reader, NFC reader, and MSR reader.",
        cameraPosition: new THREE.Vector3(0.0, 1.65, -0.6),
      },
      {
        position: new THREE.Vector3(-0.34, 0.011, -0.26),
        element: "Lanyard",
        description: "Lanyard slot",
        cameraPosition: new THREE.Vector3(-1.02, 0.39, -1.02),
      },
    ];

    return points;
  } else {
    return []
  }
};

export const featureSelections = (
  deviceType: DeviceType
): FeatureSections[] => {
  if (deviceType === DeviceType.FLEX) {
    const featureSections: FeatureSections[] = [
      {
        id: 1,
        title: "Clover Flex: the handheld POS system",
        description:
          "The Clover Flex is a powerful handheld POS system that accepts all payment types—swipe, dip, and tap. Accept credit cards, debit cards, Apple Pay, Google Pay, Samsung Pay, and more.",
        imagePosition: "right",
        imagePath: "/images/flex-stock1.png",
        imageAlt: "Payment processing",
      },
      {
        id: 2,
        title: "Run your business wherever you go",
        description: {
          bullets: [
            {
              title: "Get all you need, all from one POS",
              description: "Packing portable power with a ~6\" touchscreen, built-in printer, camera and barcode scanner for payments, tableside ordering and even inventory.",
            },
            {
             title: "Take more payments from more places",
              description: "Swipe, dip, tap, and take contactless payments wherever you do business.",
            },
            {
              title: "Works well with others or alone",
              description: "Run your whole business or pair with other Clover devices to create a complete location solution with this handheld POS",
            },
          ]
        },
        imagePosition: "left",
        imagePath: "/images/flex-stock5.png",
        imageAlt: "Receipt printer",
      },
      {
        id: 3,
        title: "Two devices, two options",
        description:
          "Both the Flex and the Flex Pocket move with you. Both accept contactless payments, fire orders tableside, help line bust, pair with other Clover devices and accessories, and manage day-to-day operations. The difference between the two: Flex Pocket offers digital-only receipts, Flex has a built-in receipt printer.",
        imagePosition: "right",
        imagePath: "/images/flex-stock6.png",
        imageAlt: "Barcode scanner",
      },
      {
        id: 4,
        title: "Speed. Power. Flex-ibility.",
        description:{
          bullets: [
            {
              title: "Ready right out of the box",
              description: "Start running your business right away with this mobile POS system requiring minimal setup and training.",
            },
            {
             title: "Count on the cloud",
              description: "Travel with your business anywhere you go. All your data, all your info, always at your fingertips.",
            },
            {
              title: "Find the right fit for you",
              description: "Customize the Flex as you see fit. Same power and versatility of our larger devices, and can be configured the way you need.",
            },
          ]
        },

        imagePosition: "left",
        imagePath: "/images/flex-stock7.png",
        imageAlt: "Connectivity",
      },
      {
        id: 5,
        title: "More power to you",
        description: {
          bullets: [
            {
              title: "Track your sales from anywhere",
              description: "Access 24/7 from a computer or mobile to track your sales and what’s most important to your business.",
            },
            {
             title: "Stay in the know with inventory",
              description: "Assign categories, labels, modifiers and variants to keep your inventory current and organized.",
            },
            {
              title: "Keep tabs on your team’s performance",
              description: "Run reports to see how your employees are performing, manage schedules and timesheets, and set permission levels to keep track of your team.",
            },
          ]
        },
        imagePosition: "right",
        imagePath: "/images/flex-stock8.png",
        imageAlt: "stuff",
      },
      {
        id: 6,
        title: "Keep customers coming back",
        description: {
          bullets: [
            {
              title: "Customers to loyal fans",
              description: "Create a fun, effective loyalty program in minutes, absolutely free with no strings attached.",
            },
            {
             title: "Rapid Deposit",
              description: "Get your money in minutes when you need it, day and night, weekends and holidays.",
            },
            {
              title: "Clover Capital",
              description: "Turn future credit card sales into working capital for a fast, easy way to access the funds you need.",
            },
          ]
        },
        imagePosition: "left",
        imagePath: "/images/flex-stock2.png",
        imageAlt: "stuff2",
      },
    ];

    return featureSections;
  } else {
    const featureSections: FeatureSections[] = [
      {
        id: 1,
        title: "Clover Go: a mobile POS system",
        description:
          "Pair this portable credit card reader with your phone to take payments wherever you do business. Get the power of a POS anywhere you have a WiFi or cellular internet connection.",
        imagePosition: "right",
        imagePath: "/images/go-stock1.png",
        imageAlt: "Payment processing",
      },
      {
        id: 2,
        title: "Take payments on the go",
        description:
          "Easy for everyone to useThe Clover Go app is easy to download and intuitive to use so you can start processing sales with your mobile device and optional Go card reader right away. Flexible order managementOpen, edit, delete items, or take payments later without having to close out a transaction and start a new one. Offer one-touch tipping and process full or partial refunds, returns, and exchanges quickly. Save on in-person paymentsPair the Clover Go app with the Go reader to accept payments by chip or by tap at lower card-present fees. Take all tender typesAccept all major credit and debit cards, use card chip or mobile wallet contactless payments. Plus, take Tap-to-Pay on iPhone while running the Clover Go App.",
        imagePosition: "left",
        imagePath: "/images/go-stock2.png",
        imageAlt: "Receipt printer",
      },
      {
        id: 3,
        title: "Manage your business anywhere",
        description:
          "Works with iOS and AndroidThe Clover Go app works on all the major operating systems so, no matter what type of mobile device you use, the Clover Go works for you. Plus, it's optimized for Apple iPad screens. Configure to suit your needsSet your business's discount, tip, and tax rates directly through the POS dashboard on your mobile device. Automatically apply service or delivery charges. Sync with your Clover dashboard and devicesStay on top of your business from anywhere, with everything synced to the Clover Dashboard. View all transactions in the Clover Go appSee your entire transaction history - including open, pending, and completed transactions - whether they're created from your Clover Go on mobile devices, Clover Go reader, or another Clover device.",
        imagePosition: "right",
        imagePath: "/images/go-stock5.png",
        imageAlt: "Barcode scanner",
      },
      {
        id: 4,
        title: "Clover Go reader details",
        description:
          "Payments: Accepts chip, dip, and contactless payments including Tap-to-Pay on iPhone, Apple Pay®, Google Pay® and Samsung Pay®. Digital Receipts: Stores digital receipts, sends them via email or text to customer-provided contact information, and tracks the status of outstanding balances. Security and support: Clover Security Plus and all day, every day support to assist you with your needs. Connectivity: Micro USB for charging, Bluetooth® to mobile device for payments. Battery life: Estimated 160 dip, 160 swipe, or 130 contactless transactions per charge. Compatibility: Compatibility: iOS 15 (Bluetooth LE required) and Android 9.0 (and higher).",
        imagePosition: "left",
        imagePath: "/images/go-stock3.png",
        imageAlt: "Connectivity",
      },
      {
        id: 5,
        title: "Countertop convenience",
        description:
          "Mount your Clover Go reader to the Go Dock to accept card payments securely on a countertop. A high-friction rubber foot keeps the Go Dock steady on various countertop surfaces. A double-sided adhesive sheet (included), and holes for screws/bolts (not included) allow for optional secure mounting. Go Dock supports a security lock. A USB charging port enables continuous use of the Clover Go reader without removal from the dock. Dimensions: 88.4 mm / 3.5 in L x 80.4 mm / 3.2 in W x 38.3 mm / 1.5 in H",
        imagePosition: "right",
        imagePath: "/images/go-stock6.png",
        imageAlt: "stuff",
      },
    ];

    return featureSections;
  }
};
