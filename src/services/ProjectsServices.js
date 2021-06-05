import {
  aerospance,
  automobile,
  civil,
  computer,
  electrical,
  electronic,
  information,
  mathamatical,
  mechanical,
  software,
} from "./ImgUrlService";

const ProjectsList = [
  {
    key: "Automobile",
    title: "Automobile",
    url: "",
    src: automobile,
    alt: "Automobile-Engineering",
    list: [
      "Automobile parts Numerical analysis",
      "Two-wheeler Bike Projects ",
      "Automobile Brake Projects",
      "Steering System Projects",
      "Automobile Engine Project",
      "Cutting dynamics of high-speed machining of thin ribbed structures ",
      "Analysis of ball bearing considering the effect of waviness in ball bearing assembly synopsis",
      "Vibration analysis of compressor housing",
      "Optimum design and analysis of composite drive shaft",
    ],
  },
  {
    key: "Mechanical",
    title: "Mechanical",
    url: "",
    src: mechanical,
    alt: "Mechinical-Engineering",
    list: [
      "Development of solar powered air conditioner using flat plate collector",
      "Comparative numerical study of flow characteristics in shell & helical coil heat exchangers with hybrid models",
      "Numerical Investigation of Thermal Behaviour and Fluid Flow Characteristics in Geothermal Energy Piles",
      "Aerodynamics effect of the hot wire coil on the SELIG S1223 Air foil ",
      "Computational Fluid dynamics study of wind turbine blade at low Reynolds number for various angle of attack",
      "Effect of powder metallurgy on high entropy alloy materials: A review",
      "Fatigue failure analysis of a Ø14 B500C steel rebar: Metallurgical evaluation and numerical simulation",
      "Thermal Stress Analysis of Powder Metallurgy Sintering Process Based on ANSYS",
      "Stress analysis on Spur Gear",
      "Numerical analysis of Cam shaft ",
    ],
  },
  {
    key: "Computer_Science",
    title: "Computer Science",
    url: "",
    src: computer,
    alt: "Computer Science-Engineering",
    list: [
      "Face detection",
      "Online Auction Systems",
      "E-authentication system",
      "Crime Rate prediction",
      "Measurement app",
      "Symbol Recognition",
      "News App",
      "Search Engine",
      "Online ebook maker",
      "Mobile payment app",
    ],
  },
  {
    key: "Information_Technology",
    title: "Information Technology",
    url: "",
    src: information,
    alt: "Information Technology-Engineering",
    list: [
      "Offloading of Mobile Data using Overlaps & Uniform Pricing",
      "Personalized Ranking Framework",
      "Compound Keyword Search based on Semantic over Encrypted Cloud Data",
      "Modeling & Forecasting of Dynamic QoS Attributes with Time-aware for Cloud Services",
      "Reliable Electronic Voting project",
      "Scheduling of Smart Manufacturing through Edge Computing & Multi-class Deep Q Network project",
      "Two-Channel Graph Filter Banks with Critically-Sampled & Spectral Domain project",
      "Stock Market Instability Prediction Approach using Time Series Data",
      "Identification and Detection of Spammer and Fake User in Social Media project",
      "Construction of Sentiment Lexicon using Hierarchical Supervision Topic Model project",
    ],
  },
  {
    key: "Aerospace",
    title: "Aerospace",
    url: "",
    src: aerospance,
    alt: "Aerospace-Engineering",
    list: [
      "Analysis of Noise levels, Audio frequency and Fuel consumption with Propellers of type McCauley and MT on BAe Jetstream 32 project",
      "VTOL Unmanned Aerial Helicopters ",
      "Aerodynamics effect of the hot wire coil on the SELIG S1223 Airfoil ",
      "Computational Fluid dynamics study of wind turbine blade at low Reynolds number for various angle of attack",
      "Simulation of Plume-Spacecraft Interaction",
      "Experiment of All Solid-State Electrochemical Sensor for Surface Chemistry Analysis for Adhesive Bonding",
      "Experimental and Numerical Investigations of a High Performance Co-Flow Jet Airfoil",
      "3D Fuel Tank Models for System Simulation",
      "Design of a Hoverwing Aircraft",
      "Theoretical Studies of Plasma Detachment in the Vasimr Magnetic Nozzle",
    ],
  },
  {
    key: "Software",
    title: "Software",
    url: "",
    src: software,
    alt: "Software-Engineering",
    list: [
      "Java-based PDF Converter project",
      "Management System for Pharmacy",
      "Management System for Address Book using Java project",
      "Reminder and Protector of Password project",
      "Java-based Ajax Browser project ",
      "Detection of Intrusion in WSN project",
      "Java-based Software for Application Installer",
      "Converter from Image to Text project",
      "Java-based Software for Application Re-installer",
      "Explorer of Folder and File project ",
      "Java-based Simulator System for ATM",
      "Encryption of Data using Java",
      "Management System for Cybercafe",
      "Reservation System for Bus Ticket using Java",
      "The converter of Text to HTML ",
    ],
  },
  {
    key: "Civil",
    title: "Civil",
    url: "",
    src: civil,
    alt: "Civil-Engineering",
    list: [
      "Analysis of Seismic Demand in different structural members",
      "Advanced Earthquake Resistant strategies",
      "Seismic isolation devices",
      "Energy dissipation devices for seismic design",
      "Reservoir induced seismicity",
      "Failure of foundation due to earthquake",
      "Cost Benefit Analysis of Earthquake Resistant Structures",
      "Confined vs Brick Masonry Buildings",
      "Seismic Behavior Analysis Of Different Structures (Buildings, Bridges, Shear Walls, Footing, Masonry)",
      "Earthquake Vibration Control Using innovative techniques",
      "Earthquake Vibration Control Using new / innovative materials",
      "Increasing strength of buildings by introducing new materials in construction (bentonite, marble dust, rice husk)",
      "Analysis of Building Codes",
      "Innovative use of wood and steel in concrete / brick buildings",
      "Landslide stabilization",
    ],
  },
  {
    key: "Electrical",
    title: "Electrical",
    url: "",
    src: electrical,
    alt: "Electrical-Engineering",
    list: [
      "Power Grid Failure Detection Based on Voltage and Frequency Variance Detection",
      "Three Phase Fault Analysis with Auto Reset on Temporary Fault and Permanent Trip",
      "Induction Motor Timer Using Auto Delta Star Starter",
      "Ac to High Voltage DC Using Voltage Multiplier Circuit",
      "Auto Selection of any Available Phase in 3 Phase Supply System",
      "ACPWM Control System for Induction Motor using AVR Microcontroller",
      "ATMEGA Microcontroller based Commercial Power Saver Project",
      "Smart watch for Seniors/Elderly Project Using Microcontroller",
      "Smart Charger Monitoring System using Arduino",
      "Smart Road Safety and Vehicle Accident Prevention System for Mountain roads",
      "IOT based Smart Agriculture Monitoring System Project",
      "IOT Based Automatic Vehicle Accident Detection and Rescue System",
      "RFID Based Petrol Pump Automation System",
      "IOT Based Heart Monitoring System Using ECG",
      "IOT based Anti-theft Flooring System using Raspberry Pi",
    ],
  },
  {
    key: "Electronics",
    title: "Electronics",
    url: "",
    src: electronic,
    alt: "Electronics-Engineering",
    list: [
      "IOT Smart Parking",
      "Programmable Robotic Arm",
      "Solar Floor Cleaner Robot",
      "Arduino Alcohol Sense Engine Lock",
      "Arduino Covid Disinfection Box",
      "AI Bartender Cocktail Maker Machine",
      "IOT Dog Daycare Robot",
      "Arduino Multi Player Air Hockey Table",
      "Android Micro Drone With Obstacle Detector",
      "360° Filmmaking Drone For 4K HD Video",
      "IOT Temperature & Mask Scan Entry System",
      "IOT Social Distancing & Monitoring Robot For Queue",
      "Auto Indoor Hydroponic Fodder Grow Chamber",
      "Autonomous Theft Proof Delivery Robot For Food & Ecommerce",
      "Social Distancing & Mask Monitor Drone",
    ],
  },
  {
    key: "Mathematical and computational",
    title: "Mathematical and Computational",
    url: "",
    src: mathamatical,
    alt: "Mathematical-and-computational-Engineering",
    list: [
      "Computer Science",
      "Databases",
      "Networks/ Cryptography",
      "Object Oriented Programming",
      "Computer/Mobile Applications",
      "Machine Learning/ AI",
      "Data Mining",
      "Applied Mathematics",
      "Computational Fluid Dynamics (CFD)",
      "PDE",
      "Financial Mathematics",
      "Pure Mathematics",
      "Real Analysis",
      "Complex Analysis",
      "Topology",
    ],
  },
  // {
  //   key: "Aerospace",
  //   title: "Aerospace",
  //   url: "",
  //   src: "https://i.pinimg.com/originals/4f/b7/cb/4fb7cb8180f2c9b9aad54c2f23da4b13.jpg",
  //   alt: "Aerospace-Engineering",
  //   list: ["a", "b", "c"],
  // },
];

export { ProjectsList };