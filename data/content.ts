export const CONTACT = {
  phone: "+91 98881 22254",
  phoneHref: "tel:+919888122254",
  whatsapp: "https://wa.me/919888122254",
  email: "info@techcadd.com",
  address: "2nd Floor, Crystal Plaza, SCS 78, Opposite PIMS Hospital, Jalandhar, Punjab 144001",
  hours: "Mon – Sat, 9 AM – 7 PM",
} as const;

export const BRANCHES = [
  "Mohali",
  "Ludhiana",
  "Phagwara",
  "Jalandhar",
  "Amritsar",
  "Hoshiarpur",
] as const;

/* ---------------- navigation ---------------- */

export type NavTag = "hot" | "new" | "trending";

export const AI_FUNDAMENTALS: { label: string; tag?: NavTag }[] = [
  { label: "Generative AI" },
  { label: "Artificial Intelligence (AI)" },
  { label: "Prompt Engineering" },
  { label: "ChatGPT & AI Tools", tag: "hot" },
];

export const AI_DEVELOPMENT: { label: string; tag?: NavTag }[] = [
  { label: "Agentic AI", tag: "new" },
  { label: "AI-Powered Marketing", tag: "trending" },
  { label: "RAG (Retrieval-Augmented Generation)" },
  { label: "All AI Courses in Jalandhar" },
];

export const COURSE_LINKS = [
  "Programming",
  "AI & Data",
  "Digital Marketing",
  "Cyber & Cloud",
  "Full-Stack Development",
  "CAD / CAM",
];

export const CERTIFICATE_LINKS = [
  "45 Days Training",
  "6 Weeks Training",
  "6 Months Training",
  "Internship Programme",
];

export const RESOURCE_LINKS = [
  { label: "Student Reviews", href: "#reviews" },
  { label: "Our Branches", href: "#branches" },
  { label: "Placement Support", href: "#about" },
  { label: "Enquire Now", href: "#enquire" },
];

export const DRAWER_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Branches", href: "#branches" },
  { label: "Student Reviews", href: "#reviews" },
  { label: "Placement Support", href: "#about" },
  { label: "Book a Demo", href: "#enquire" },
  { label: "Contact", href: "#enquire" },
];

/* ---------------- hero ---------------- */

export const HERO_STATS = [
  { value: 4.9, decimals: 1, label: "★ Google rating" },
  { value: 25000, suffix: "+", label: "Engineers trained" },
  { value: 500, suffix: "+", label: "Hiring partners" },
  { value: 92, suffix: "%", label: "Placement rate, 2025" },
  { staticValue: "2016", label: "Training since" },
] as const;

/* ---------------- about ---------------- */

export const TRAINING_FORMATS = [
  { term: "45 Days", detail: "Summer & winter industrial training" },
  { term: "6 Weeks", detail: "University-mandated training" },
  { term: "6 Months", detail: "Industrial training with internship" },
  { term: "9 Months", detail: "Expert track with client-level projects" },
];

/* ---------------- how it works ---------------- */

export const STEPS = [
  {
    when: "Day 1",
    title: "Career counselling",
    body: "Sit with a counsellor, compare tracks and pick the one that fits your degree and goal.",
  },
  {
    when: "Core term",
    title: "Classroom & lab",
    body: "Small batches, daily practicals on licensed software, and doubt sessions until it clicks.",
  },
  {
    when: "Final phase",
    title: "Live project & internship",
    body: "Build something real from our client work, then walk out with an internship letter.",
  },
  {
    when: "On completion",
    title: "Placement drives",
    body: "Portfolio reviews, mock interviews and drives with our hiring partner network.",
  },
];

/* ---------------- categories ---------------- */

export type CategoryIcon = "ai" | "code" | "chart" | "shield" | "send" | "cloud";

export const CATEGORIES: { icon: CategoryIcon; title: string; body: string }[] = [
  { icon: "ai", title: "Artificial Intelligence", body: "Models, agents and RAG systems built for production." },
  { icon: "code", title: "Full-Stack Development", body: "MERN, MEAN and PHP stacks, schema to deploy." },
  { icon: "chart", title: "Data Science", body: "Analytics, dashboards and decision intelligence." },
  { icon: "shield", title: "Cybersecurity", body: "Ethical hacking, hardening and incident response." },
  { icon: "send", title: "Digital Marketing", body: "Search, paid media and storefronts that convert." },
  { icon: "cloud", title: "Cloud & DevOps", body: "Containers, pipelines and infrastructure you can hand over." },
];

/* ---------------- why techcadd ---------------- */

export type WhyIcon = "book" | "user" | "shield" | "clock";

export const DIFFERENTIATORS: { icon: WhyIcon; title: string; body: string; strong?: string; tail?: string }[] = [
  {
    icon: "book",
    title: "Industry-Built Curriculum",
    body: "We teach from the same stack we ship client work on, so the syllabus moves the moment the industry does.",
  },
  {
    icon: "user",
    title: "Certified Trainers",
    body: "Learn from engineers who still write production code, not from career instructors reading a decade-old slide deck.",
  },
  {
    icon: "shield",
    title: "Placement Support",
    body: "500+ hiring partners, mock interviews and on-campus drives, run by our placement cell.",
  },
  {
    icon: "clock",
    title: "Flexible Batches",
    body: "45-day, 6-week, 6-month, weekend and 1-on-1 formats, every class 2 hours, with fee ",
    strong: "EMI options",
    tail: " so cost never decides it.",
  },
];

/* ---------------- testimonials ---------------- */

export const TESTIMONIALS = [
  {
    quote:
      "I joined the 6-month MERN batch straight after B.Tech with almost no coding confidence. The live projects are what got me through my interviews.",
    initials: "SK",
    name: "Simranjeet Kaur",
    role: "Frontend Developer, Jalandhar",
  },
  {
    quote:
      "The Data Science trainers went far beyond the syllabus. Doubt sessions after class were the difference between understanding a model and just running it.",
    initials: "HS",
    name: "Harman Sidhu",
    role: "Data Analyst, Gurugram",
  },
  {
    quote:
      "My 45-day industrial training turned into a job offer. The placement cell prepped my resume and set up three interviews in the same month.",
    initials: "AV",
    name: "Aditya Verma",
    role: "Python Developer, Jalandhar",
  },
  {
    quote:
      "As a working professional I needed evening batches, and techcadd let me switch between the campus and the live online class whenever my shifts moved.",
    initials: "NB",
    name: "Neha Bansal",
    role: "Digital Marketing Lead, Ludhiana",
  },
  {
    quote:
      "We hire from the Jalandhar centre every year. Their students arrive knowing Git, deployment and how to read someone else's code, and that is rare.",
    initials: "RM",
    name: "Rajiv Malhotra",
    role: "Engineering Manager, hiring partner",
  },
  {
    quote:
      "The ethical hacking lab is properly set up. Working on real machines instead of slides is what made the certification worth it for me.",
    initials: "GS",
    name: "Gurpreet Singh",
    role: "Security Analyst, Bengaluru",
  },
];

/* ---------------- modules ---------------- */

export const MODULES = [
  {
    n: "01",
    title: "Industry certificate",
    body: "Issued on completion and verifiable online, recognised by the hiring partners we place through.",
  },
  {
    n: "02",
    title: "Internship letter",
    body: "Every 6-week and 6-month track closes with a documented internship on real client work.",
  },
  {
    n: "03",
    title: "Live client projects",
    body: "You ship features out of our actual delivery pipeline, not a toy app copied from a tutorial.",
  },
  {
    n: "04",
    title: "Doubt-clearing sessions",
    body: "Daily lab hours with your trainer, plus batch groups that stay active long after the course ends.",
  },
  {
    n: "05",
    title: "Interview preparation",
    body: "Portfolio reviews, aptitude drills and mock interviews scheduled ahead of every placement drive.",
  },
];

/* ---------------- technologies ---------------- */

export const TECH_GROUPS = [
  {
    key: "prog",
    label: "Programming",
    items: [
      { name: "Python", color: "#3776AB" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Java", color: "#EA2D2E" },
      { name: "C / C++", color: "#00599C" },
      { name: "PHP", color: "#777BB4" },
      { name: "Kotlin", color: "#7F52FF" },
      { name: "Go", color: "#00ADD8" },
    ],
  },
  {
    key: "fw",
    label: "Frameworks",
    items: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#ffffff" },
      { name: "Vue", color: "#4FC08D" },
      { name: "Angular", color: "#DD0031" },
      { name: "Node & Express", color: "#68A063" },
      { name: "Django", color: "#092E20" },
      { name: "Laravel", color: "#FF2D20" },
      { name: "Flutter", color: "#02569B" },
    ],
  },
  {
    key: "ai",
    label: "AI & ML",
    items: [
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "Keras", color: "#D00000" },
      { name: "scikit-learn", color: "#F7931E" },
      { name: "Hugging Face", color: "#FFD21E" },
      { name: "LangChain", color: "#1C3C3C" },
      { name: "Anthropic", color: "#D4A27F" },
      { name: "OpenCV", color: "#5C3EE8" },
      { name: "Pandas", color: "#150458" },
      { name: "NumPy", color: "#013243" },
      { name: "Jupyter", color: "#F37626" },
      { name: "Streamlit", color: "#FF4B4B" },
    ],
  },
  {
    key: "cad",
    label: "CAD / CAM",
    items: [
      { name: "AutoCAD", color: "#E51050" },
      { name: "SolidWorks", color: "#F2C811" },
      { name: "CATIA", color: "#F46800" },
      { name: "3ds Max", color: "#0696D7" },
      { name: "Revit", color: "#FF9900" },
      { name: "Creo", color: "#E87D0D" },
    ],
  },
  {
    key: "db",
    label: "Databases",
    items: [
      { name: "MongoDB", color: "#47A248" },
      { name: "MySQL", color: "#4479A1" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Redis", color: "#DC382D" },
      { name: "SQL Server", color: "#CC2927" },
      { name: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    key: "ops",
    label: "DevOps",
    items: [
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Jenkins", color: "#D24939" },
      { name: "Terraform", color: "#844FBA" },
      { name: "Git", color: "#F05032" },
      { name: "GitHub Actions", color: "#8B949E" },
    ],
  },
  {
    key: "cloud",
    label: "Cloud",
    items: [
      { name: "AWS", color: "#FF9900" },
      { name: "Azure", color: "#0078D4" },
      { name: "Google Cloud", color: "#4285F4" },
      { name: "Vercel", color: "#E5E7EB" },
      { name: "DigitalOcean", color: "#0080FF" },
      { name: "Cloudflare", color: "#F38020" },
    ],
  },
];

/* ---------------- faqs ---------------- */

export const FAQS = [
  {
    q: "How long is the digital marketing course in Jalandhar?",
    a: "The core Digital Marketing Course runs 3 to 6 months depending on the batch you choose. The advanced AI-Powered Digital Marketing Course runs 6 to 9 months. Both include a live client project and an internship block.",
  },
  {
    q: "Can Marketing Analytics help my digital marketing career?",
    a: "Yes. Analytics skills can complement roles in digital marketing, SEO, performance marketing, social media, conversion optimization, and marketing reporting.",
  },
  {
    q: "Why choose a Marketing Analytics course in Jalandhar?",
    a: "A local, practical course can provide structured learning, trainer guidance, hands-on projects, and career-focused skills while helping you develop expertise in data-driven marketing.",
  },
  {
    q: "Do I need a technical background to learn Marketing Analytics?",
    a: "No. Beginners can learn Marketing Analytics with basic computer knowledge and an interest in digital marketing and data.",
  },
  {
    q: "What is a Marketing Analytics course?",
    a: "It teaches you how to collect, analyze, and interpret marketing data to improve campaigns, customer engagement, conversions, and business results.",
  },
];

/* ---------------- blogs ---------------- */

export const POSTS = [
  {
    category: "AWS",
    date: "Sep 22, 2026",
    read: "4 min read",
    title:
      "The Local Shop Owner Whose Business Went Cloud-Based Overnight (And What It Means for Jalandhar's Youth)",
    excerpt:
      "A small shop owner in Jalandhar took his business online almost overnight. Here's what actually changed, what skills made it possible, and why more local entrepreneurs and students are learning the same tech today.",
  },
  {
    category: "AWS",
    date: "Sep 22, 2026",
    read: "4 min read",
    title: "How a Jalandhar Graduate Landed a Cloud Job Just Months After Learning AWS",
    excerpt:
      "A Jalandhar graduate went from zero cloud knowledge to a cloud computing job in just a few months. Here's the real story of how learning AWS at techcadd changed his career path.",
  },
  {
    category: "App Development",
    date: "Sep 21, 2026",
    read: "5 min read",
    title: "From Classroom Project to Play Store: An App Development Success Story in Jalandhar",
    excerpt:
      "How a simple classroom assignment in Jalandhar turned into a real Play Store app — a practical, inspiring look at what it actually takes for students to go from idea to launch.",
  },
  {
    category: "App Development",
    date: "Sep 21, 2026",
    read: "5 min read",
    title: "A Jalandhar Student's First Android App Now Has Real Users: Here's How It Happened",
    excerpt:
      "A Jalandhar student built their first Android app and got real users. Here's the honest journey, the mistakes, and what actually worked.",
  },
  {
    category: "Ethical Hacking",
    date: "Sep 19, 2026",
    read: "5 min read",
    title: "How Ethical Hacking Training Turned a Curious Mind Into a Cyber Professional in Jalandhar",
    excerpt:
      "From curious beginner to confident cyber professional — discover how ethical hacking training in Jalandhar helped one student build real skills, land opportunities, and start a career in cybersecurity.",
  },
  {
    category: "Ethical Hacking",
    date: "Sep 19, 2026",
    read: "5 min read",
    title: "The Jalandhar Teenager Who Found a Security Flaw in a Local Business Website",
    excerpt:
      "A Jalandhar teen spotted a security flaw in a local business website — a real story showing why ethical hacking and cybersecurity skills matter for students today.",
  },
];

/* ---------------- footer ---------------- */

export const FOOTER_COLUMNS = [
  {
    title: "Courses",
    links: [
      { label: "Programming", href: "#courses" },
      { label: "AI & Data", href: "#courses" },
      { label: "Digital Marketing", href: "#courses" },
      { label: "Cyber & Cloud", href: "#courses" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Internship & Training", href: "#about" },
      { label: "After 12th Courses", href: "#courses" },
      { label: "Industrial Training", href: "#about" },
      { label: "6 Months Training", href: "#about" },
      { label: "45 Days Training", href: "#about" },
      { label: "Internship Programme", href: "#about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About techcadd", href: "#about" },
      { label: "Our Founder", href: "#about" },
      { label: "College Partnerships", href: "#about" },
      { label: "Our Branches", href: "#branches" },
      { label: "Events", href: "#reviews" },
      { label: "Gallery", href: "#reviews" },
      { label: "Blogs", href: "#reviews" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact Us", href: "#enquire" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "#enquire" },
      { label: "Placement Support", href: "#about" },
      { label: "Free Tools", href: "#" },
      { label: "Enquire Now", href: "#enquire" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

export const COURSE_OPTIONS = [
  "Artificial Intelligence",
  "Full-Stack Development",
  "Data Science & Analytics",
  "Cybersecurity & Ethical Hacking",
  "Digital Marketing",
  "Cloud & DevOps",
  "CAD / CAM",
];

/* =========================================================
   Landing page: course catalogue, branches, Google reviews
   Course names and grouping taken from techcaddjalandhar.com/courses
   ========================================================= */

export const COURSE_CATALOGUE = [
  {
    key: "programming",
    label: "Programming",
    blurb: "Languages and stacks, from first syntax to a deployed application.",
    courses: [
      { name: "Python", icon: "python", desc: "Syntax, data structures and automation — the language most AI and backend work starts from." },
      { name: "Java", icon: "openjdk", desc: "OOP, collections and Spring fundamentals for enterprise and Android work." },
      { name: "C & C++", icon: "cplusplus", desc: "Memory, pointers and data structures — the foundation interviews still test." },
      { name: "Kotlin", icon: "kotlin", desc: "Modern JVM language and the default choice for new Android apps." },
      { name: "Flutter App Development", icon: "flutter", desc: "One Dart codebase compiled to native Android and iOS apps." },
      { name: "Web Designing", icon: "html5", desc: "HTML, CSS and responsive layout, from wireframe to a polished page." },
      { name: "Web Development", icon: "javascript", desc: "JavaScript, APIs and the browser platform behind interactive sites." },
      { name: "Full Stack Development", desc: "Frontend, backend, database and deployment taught as one track." },
      { name: "MERN Stack", icon: "react", desc: "MongoDB, Express, React and Node — schema design through to deploy." },
      { name: "MEAN Stack", icon: "angular", desc: "MongoDB, Express, Angular and Node for typed, enterprise-style apps." },
      { name: "PHP Full Stack", icon: "php", desc: "Core PHP, Laravel and MySQL — the stack most Indian agencies run." },
      { name: "Python + Django Full Stack", icon: "django", desc: "Django ORM, views and REST APIs, deployed on a real server." },
    ],
  },
  {
    key: "ai-data",
    label: "AI & Data",
    blurb: "Models, agents and analytics built the way production teams build them.",
    courses: [
      { name: "Artificial Intelligence", icon: "tensorflow", desc: "Search, reasoning and applied ML — the broad AI foundation course." },
      { name: "Machine Learning", icon: "scikitlearn", desc: "Regression, classification and honest model evaluation with scikit-learn." },
      { name: "Deep Learning", icon: "pytorch", desc: "Neural networks, CNNs and transformers in TensorFlow and PyTorch." },
      { name: "Data Science", icon: "pandas", desc: "Statistics, Python and the full analysis pipeline through to a decision." },
      { name: "Data Analytics", icon: "googleanalytics", desc: "Cleaning, querying and reporting on real business datasets." },
      { name: "Power BI", desc: "DAX, data models and dashboards that stakeholders actually read." },
      { name: "Tableau", desc: "Visual analytics and interactive dashboards from live data sources." },
      { name: "Generative AI", icon: "huggingface", desc: "LLMs, diffusion models and how to build real products on top of them." },
      { name: "Prompt Engineering", desc: "Structured prompting, evaluation and cost control for LLM apps." },
      { name: "Agentic AI", desc: "Tool-using agents that plan, call APIs and finish multi-step tasks." },
      { name: "RAG (Retrieval-Augmented Generation)", desc: "Embeddings, vector search and grounding an LLM in your own documents." },
      { name: "ChatGPT & AI Tools", desc: "Practical day-to-day use of AI tools across real office workflows." },
    ],
  },
  {
    key: "marketing",
    label: "Digital Marketing",
    blurb: "Search, paid media, social and storefronts that actually convert.",
    courses: [
      { name: "Digital Marketing", icon: "googlemarketingplatform", desc: "Search, paid media, social and analytics taught as one funnel." },
      { name: "Social Media Marketing", icon: "instagram", desc: "Content, community and paid social across Instagram and Facebook." },
      { name: "Google Ads", icon: "googleads", desc: "Search, Display and Performance Max campaigns, bidding and tracking." },
      { name: "SEO", icon: "google", desc: "Technical SEO, on-page, content and local ranking for Punjab businesses." },
      { name: "AI-Powered Marketing", desc: "Using LLMs for research, copy, segmentation and reporting." },
      { name: "WordPress", icon: "wordpress", desc: "Themes, plugins and a maintainable site you can hand to a client." },
      { name: "Shopify", icon: "shopify", desc: "Storefronts, product data and checkout for a live e-commerce business." },
    ],
  },
  {
    key: "cyber-cloud",
    label: "Cyber & Cloud",
    blurb: "Offensive and defensive security, plus the infrastructure underneath it.",
    courses: [
      { name: "Cybersecurity", desc: "Threats, hardening, monitoring and incident response fundamentals." },
      { name: "Ethical Hacking", icon: "kalilinux", desc: "Reconnaissance, exploitation and reporting in a live pentest lab." },
      { name: "Cloud Computing", icon: "googlecloud", desc: "Compute, storage, networking and cost control on public cloud." },
      { name: "AWS", desc: "EC2, S3, IAM and VPC, aligned to the Cloud Practitioner path." },
      { name: "Linux", icon: "linux", desc: "Shell, permissions, services and the server skills every ops role needs." },
    ],
  },
  {
    key: "cad",
    label: "Civil / Mechanical",
    blurb: "Licensed CAD and CAM software, taught on real drawing sets.",
    courses: [
      { name: "AutoCAD", icon: "autocad", desc: "2D drafting and 3D modelling to industry drawing standards." },
      { name: "SolidWorks", icon: "dassaultsystemes", desc: "Parametric part design, assemblies and manufacturing drawings." },
      { name: "3ds Max", icon: "autodesk", desc: "Modelling, lighting and photoreal architectural visualisation." },
      { name: "Revit", icon: "autodesk", desc: "BIM modelling and coordinated construction documentation." },
    ],
  },
  {
    key: "basics",
    label: "Basic Skills",
    blurb: "Office, accounts and computer fundamentals for a first job.",
    courses: [
      { name: "Basic Computer", desc: "Windows, files, internet and email for a confident first office job." },
      { name: "MS Office", desc: "Word, Excel and PowerPoint to a practical working standard." },
      { name: "Tally", desc: "GST-ready accounting, inventory and payroll in Tally Prime." },
      { name: "Desktop Publishing (DTP)", desc: "Photoshop, CorelDRAW and InDesign for print-ready artwork." },
      { name: "Typing", desc: "Speed and accuracy drills in English and Punjabi." },
    ],
  },
];

/** Flat list for the hero form's course dropdown. */
export const HERO_FORM_COURSES = [
  "Artificial Intelligence",
  "Data Science",
  "Full Stack Development",
  "Digital Marketing",
  "Cybersecurity & Ethical Hacking",
  "Cloud Computing",
  "Python",
  "AutoCAD",
  "Tally",
  "Other",
];

export const BRANCH_DETAILS: {
  city: string;
  main?: boolean;
  /** Street address as published by that centre. */
  address?: string;
  /** Towns the centre draws from — shown only where no address is published. */
  areas?: string;
}[] = [
  {
    city: "Jalandhar",
    main: true,
    address: "2nd Floor, Crystal Plaza, SCS 78, Opposite PIMS Hospital, Jalandhar, Punjab 144001",
  },
  {
    city: "Mohali",
    address:
      "Plot No. F-547, 3rd Floor, Industrial Area 8A, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160055",
  },
  {
    city: "Ludhiana",
    address:
      "1st Floor, Sear Complex, 773/1, Opposite BSNL Exchange, Bharat Nagar Chowk, Ludhiana, Punjab 141001",
  },
  {
    city: "Phagwara",
    address:
      "Opposite Bus Stand, near Vishal Mega Mart, Above HDFC Bank, GT Road, Sondhi Chowk, Phagwara, Punjab 144401",
  },
  {
    city: "Hoshiarpur",
    address: "Shop No. 4, City Centre, near Bus Stand, Model Colony, Hoshiarpur, Punjab 146001",
  },
  {
    city: "Amritsar",
    address:
      "3rd Floor, District Shopping Complex, SCO 28, B-Block, Ranjit Avenue, Amritsar, Punjab 143001",
  },
];

export const GMB = {
  rating: "4.9",
  reviews: "556+",
  alumni: "15K+",
  profileUrl: "https://www.google.com/maps/search/techcadd+computer+education+jalandhar",
};
