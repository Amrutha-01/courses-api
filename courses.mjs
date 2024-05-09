export const courses = [
  {
    id: 1,
    name: "Full Stack Web Development Bootcamp",
    instructor: "Emily Johnson",
    description:
      "Join our comprehensive Full Stack Web Development Bootcamp and master both front-end and back-end technologies. This intensive program covers HTML, CSS, JavaScript, Node.js, React, and database management. Gain hands-on experience through projects and workshops.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic understanding of programming"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML/CSS",
        content: "Fundamentals of HTML and CSS for web development.",
      },
      {
        week: 2,
        topic: "JavaScript Basics",
        content: "Introduction to JavaScript programming and DOM manipulation.",
      },
      {
        week: 3,
        topic: "Node.js and Express",
        content:
          "Building server-side applications with Node.js and Express framework.",
      },
      {
        week: 4,
        topic: "React Frontend Development",
        content: "Creating interactive user interfaces with React library.",
      },
      {
        week: 5,
        topic: "Database Management",
        content: "Introduction to SQL databases and MongoDB.",
      },
    ],
    students: [
      { id: 101, name: "Alice Johnson", email: "alice@example.com" },
      { id: 102, name: "Bob Smith", email: "bob@example.com" },
      { id: 103, name: "Charlie Brown", email: "charlie@example.com" },
    ],
  },
  {
    id: 2,
    name: "Data Science Foundations",
    instructor: "Mark Davis",
    description:
      "Delve into the world of data science and learn essential skills in data analysis, statistics, and machine learning. This course covers Python programming, data manipulation with pandas, data visualization with matplotlib, and introductory machine learning algorithms.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "5 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Python",
        content:
          "Basics of Python programming language and its applications in data science.",
      },
      {
        week: 2,
        topic: "Data Manipulation with Pandas",
        content: "Working with tabular data using the pandas library.",
      },
      {
        week: 3,
        topic: "Data Visualization with Matplotlib",
        content: "Creating visualizations to explore and present data.",
      },
      {
        week: 4,
        topic: "Machine Learning Basics",
        content:
          "Understanding supervised and unsupervised learning algorithms.",
      },
    ],
    students: [
      { id: 201, name: "David Green", email: "david@example.com" },
      { id: 202, name: "Eva Martinez", email: "eva@example.com" },
      { id: 203, name: "Frank Davis", email: "frank@example.com" },
    ],
  },
  {
    id: 3,
    name: "Mobile App Development with Flutter",
    instructor: "Sarah Adams",
    description:
      "Master mobile app development with Flutter, Google's UI toolkit for building natively compiled applications. Learn Dart programming, Flutter widgets, state management, and how to deploy apps on iOS and Android platforms.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "4 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Dart",
        content: "Learn Dart syntax and features for Flutter development.",
      },
      {
        week: 2,
        topic: "Flutter Widgets and Layouts",
        content: "Building user interfaces with Flutter widgets and layouts.",
      },
    ],
    students: [
      { id: 301, name: "Grace Lee", email: "grace@example.com" },
      { id: 302, name: "Henry Wilson", email: "henry@example.com" },
      { id: 303, name: "Ivy Johnson", email: "ivy@example.com" },
    ],
  },
  {
    id: 4,
    name: "Digital Marketing Strategies",
    instructor: "Lucas Brown",
    description:
      "Explore effective digital marketing strategies to grow your business or personal brand online. Topics include social media marketing, SEO, content marketing, email campaigns, and analytics tools.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "4 weeks",
    schedule: "Tuesdays and Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Social Media Marketing",
        content: "Strategies for leveraging social platforms for marketing.",
      },
      {
        week: 2,
        topic: "Search Engine Optimization (SEO)",
        content:
          "Optimizing websites for search engine visibility and ranking.",
      },
    ],
    students: [
      { id: 401, name: "Jack Thompson", email: "jack@example.com" },
      { id: 402, name: "Kate Anderson", email: "kate@example.com" },
      { id: 403, name: "Liam Wilson", email: "liam@example.com" },
    ],
  },
  {
    id: 5,
    name: "UI/UX Design Fundamentals",
    instructor: "Sophia Carter",
    description:
      "Learn the principles of user interface (UI) and user experience (UX) design. Gain practical skills in wireframing, prototyping, usability testing, and design tools such as Sketch and Figma.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "5 weeks",
    schedule: "Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to UI/UX Design",
        content: "Understanding the role of UI/UX in product development.",
      },
      {
        week: 2,
        topic: "Wireframing and Prototyping",
        content: "Creating wireframes and interactive prototypes.",
      },
    ],
    students: [
      { id: 501, name: "Max Taylor", email: "max@example.com" },
      { id: 502, name: "Nora Brown", email: "nora@example.com" },
      { id: 503, name: "Oscar Roberts", email: "oscar@example.com" },
    ],
  },
  {
    id: 6,
    name: "Photography Essentials",
    instructor: "Alexandra Moore",
    description:
      "Explore the art of photography and master essential techniques to capture stunning images. This course covers camera basics, composition principles, lighting techniques, and post-processing with Adobe Lightroom.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "6 weeks",
    schedule: "Wednesdays and Saturdays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Camera Fundamentals",
        content: "Understanding camera settings and controls.",
      },
      {
        week: 2,
        topic: "Composition Techniques",
        content: "Exploring rule of thirds, framing, and leading lines.",
      },
      {
        week: 3,
        topic: "Lighting Principles",
        content: "Using natural and artificial light for creative photography.",
      },
      {
        week: 4,
        topic: "Post-processing with Lightroom",
        content: "Editing and enhancing photos using Adobe Lightroom.",
      },
    ],
    students: [
      { id: 601, name: "Sophie Brown", email: "sophie@example.com" },
      { id: 602, name: "Thomas Johnson", email: "thomas@example.com" },
      { id: 603, name: "Victor Adams", email: "victor@example.com" },
    ],
  },
  {
    id: 7,
    name: "Introduction to Cybersecurity",
    instructor: "Daniel Turner",
    description:
      "Gain foundational knowledge of cybersecurity principles and practices. Learn about network security, cryptography, ethical hacking, and best practices to secure digital assets.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "5 weeks",
    schedule: "Mondays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic understanding of computer networks"],
    syllabus: [
      {
        week: 1,
        topic: "Cybersecurity Fundamentals",
        content: "Overview of cybersecurity threats and vulnerabilities.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Securing computer networks and data transmission.",
      },
      {
        week: 3,
        topic: "Cryptography Basics",
        content: "Understanding encryption techniques and algorithms.",
      },
      {
        week: 4,
        topic: "Ethical Hacking Fundamentals",
        content: "Introduction to ethical hacking and penetration testing.",
      },
    ],
    students: [
      { id: 701, name: "Xavier Clark", email: "xavier@example.com" },
      { id: 702, name: "Yvonne Smith", email: "yvonne@example.com" },
      { id: 703, name: "Zara Baker", email: "zara@example.com" },
    ],
  },
  {
    id: 8,
    name: "Creative Writing Workshop",
    instructor: "Olivia Roberts",
    description:
      "Unlock your creativity and develop essential writing skills through practical exercises and workshops. This course covers storytelling techniques, character development, plot structure, and narrative styles.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "4 weeks",
    schedule: "Tuesdays and Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Creative Writing",
        content:
          "Understanding the elements of storytelling and creative expression.",
      },
      {
        week: 2,
        topic: "Character Development",
        content: "Creating memorable characters with depth and personality.",
      },
    ],
    students: [
      { id: 801, name: "Liam Wilson", email: "liam@example.com" },
      { id: 802, name: "Isabelle Moore", email: "isabelle@example.com" },
      { id: 803, name: "Nathan Turner", email: "nathan@example.com" },
    ],
  },
  {
    id: 9,
    name: "Introduction to Blockchain Technology",
    instructor: "Sophie Adams",
    description:
      "Discover the fundamentals of blockchain technology and cryptocurrencies. Learn about decentralized networks, smart contracts, and applications of blockchain beyond finance.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "6 weeks",
    schedule: "Wednesdays and Saturdays, 3:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: ["Basic understanding of computer science"],
    syllabus: [
      {
        week: 1,
        topic: "Blockchain Basics",
        content:
          "Introduction to blockchain technology and distributed ledgers.",
      },
      {
        week: 2,
        topic: "Cryptocurrencies and Wallets",
        content: "Exploring popular cryptocurrencies and digital wallets.",
      },
      {
        week: 3,
        topic: "Smart Contracts",
        content: "Understanding smart contract development and use cases.",
      },
    ],
    students: [
      { id: 901, name: "Oscar Roberts", email: "oscar@example.com" },
      { id: 902, name: "Penelope White", email: "penelope@example.com" },
      { id: 903, name: "Rachel Carter", email: "rachel@example.com" },
    ],
  },
  {
    id: 10,
    name: "Video Editing Masterclass",
    instructor: "Lucas Martinez",
    description:
      "Learn professional video editing techniques using industry-standard software. This course covers video composition, color grading, special effects, and editing workflows.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "5 weeks",
    schedule: "Thursdays and Sundays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of video production"],
    syllabus: [
      {
        week: 1,
        topic: "Video Editing Fundamentals",
        content: "Introduction to video editing software and tools.",
      },
      {
        week: 2,
        topic: "Advanced Editing Techniques",
        content: "Creating seamless cuts and transitions.",
      },
      {
        week: 3,
        topic: "Color Correction and Grading",
        content: "Enhancing video aesthetics with color adjustments.",
      },
    ],
    students: [
      { id: 1001, name: "Quinn Adams", email: "quinn@example.com" },
      { id: 1002, name: "Rachel Carter", email: "rachel@example.com" },
      { id: 1003, name: "Samantha Hill", email: "samantha@example.com" },
    ],
  },
  {
    id: 11,
    name: "Game Development Fundamentals",
    instructor: "Tom Wilson",
    description:
      "Get started with game development using popular engines like Unity. Learn game design principles, scripting with C#, and building interactive gameplay elements.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "4 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Game Development",
        content: "Understanding game engines and development environments.",
      },
      {
        week: 2,
        topic: "Unity Basics",
        content: "Exploring Unity interface and asset management.",
      },
    ],
    students: [
      { id: 1101, name: "Tyler Reed", email: "tyler@example.com" },
      { id: 1102, name: "Uma Patel", email: "uma@example.com" },
      { id: 1103, name: "Victor Adams", email: "victor@example.com" },
    ],
  },
  {
    id: 12,
    name: "Artificial Intelligence Basics",
    instructor: "Eva Turner",
    description:
      "Introduction to artificial intelligence (AI) concepts and applications. Learn about machine learning algorithms, neural networks, and real-world AI use cases.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "5 weeks",
    schedule: "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of statistics",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to AI",
        content: "Overview of artificial intelligence and its subfields.",
      },
      {
        week: 2,
        topic: "Machine Learning Fundamentals",
        content: "Understanding supervised and unsupervised learning.",
      },
    ],
    students: [
      { id: 1201, name: "Wendy Parker", email: "wendy@example.com" },
      { id: 1202, name: "Xavier Clark", email: "xavier@example.com" },
      { id: 1203, name: "Yvonne Smith", email: "yvonne@example.com" },
    ],
  },
  {
    id: 13,
    name: "UI/UX Design Advanced",
    instructor: "James Anderson",
    description:
      "Take your UI/UX design skills to the next level with advanced techniques and industry best practices. Learn prototyping with Sketch and Figma, usability testing, and design thinking methodologies.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "6 weeks",
    schedule: "Wednesdays and Fridays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["UI/UX Design Fundamentals"],
    syllabus: [
      {
        week: 1,
        topic: "Advanced Prototyping",
        content: "Mastering interactive prototyping tools for user testing.",
      },
      {
        week: 2,
        topic: "Usability Principles",
        content: "Applying usability heuristics to design evaluation.",
      },
    ],
    students: [
      { id: 1301, name: "Zara Baker", email: "zara@example.com" },
      { id: 1302, name: "Max Taylor", email: "max@example.com" },
      { id: 1303, name: "Nora Brown", email: "nora@example.com" },
    ],
  },
  {
    id: 14,
    name: "Music Production Basics",
    instructor: "Jack Evans",
    description:
      "Learn the essentials of music production, from recording techniques to digital audio workstations (DAWs). Explore MIDI, mixing, and creative music composition.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "4 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Music Production",
        content: "Overview of music production tools and techniques.",
      },
      {
        week: 2,
        topic: "Recording and Editing",
        content: "Recording instruments and editing audio tracks.",
      },
    ],
    students: [
      { id: 1401, name: "Quinn Adams", email: "quinn@example.com" },
      { id: 1402, name: "Rachel Carter", email: "rachel@example.com" },
      { id: 1403, name: "Samantha Hill", email: "samantha@example.com" },
    ],
  },
  {
    id: 15,
    name: "E-commerce Business Strategies",
    instructor: "Sophia Roberts",
    description:
      "Discover effective strategies for building and scaling an e-commerce business. Topics include product sourcing, marketing tactics, customer acquisition, and order fulfillment.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://oilab.in/public/img/courses/full-stack-web-developer.jpg",
    duration: "5 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic understanding of e-commerce"],
    syllabus: [
      {
        week: 1,
        topic: "E-commerce Fundamentals",
        content: "Understanding the e-commerce landscape and business models.",
      },
      {
        week: 2,
        topic: "Product Marketing",
        content: "Strategies for product positioning and promotion.",
      },
    ],
    students: [
      { id: 1501, name: "Tyler Reed", email: "tyler@example.com" },
      { id: 1502, name: "Uma Patel", email: "uma@example.com" },
      { id: 1503, name: "Victor Adams", email: "victor@example.com" },
    ],
  },
];
