export const CONTACT = {
  phone: "+91 98881 22254",
  phoneHref: "tel:+919888122254",
  whatsapp: "https://wa.me/919888122254",
  email: "info@techcadd.com",
  address: "2nd Floor, Crystal Plaza, SCS 78, Opposite PIMS Hospital, Jalandhar, Punjab 144001",
  hours: "Mon – Sat, 9 AM – 7 PM",
} as const;

export const BRANCHES = [
  "Chandigarh",
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
  { label: "Blogs", href: "#blogs" },
  { label: "FAQs", href: "#faq" },
  { label: "Student Reviews", href: "#reviews" },
  { label: "Placement Support", href: "#why" },
];

export const DRAWER_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#about" },
  { label: "AI", href: "#courses" },
  { label: "Courses", href: "#categories" },
  { label: "Certificate Programs", href: "#about" },
  { label: "After 12th", href: "#courses" },
  { label: "Resources", href: "#blogs" },
  { label: "Placement Support", href: "#why" },
  { label: "Student Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#enquire" },
];

/* ---------------- hero ---------------- */

export const HERO_STATS = [
  { value: 4.9, decimals: 1, label: "★ Google rating" },
  { value: 25000, suffix: "+", label: "Engineers trained" },
  { value: 500, suffix: "+", label: "Hiring partners" },
  { value: 92, suffix: "%", label: "Placement rate, 2025" },
  { staticValue: "2007", label: "Training since" },
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
      { label: "Programming", href: "#categories" },
      { label: "AI & Data", href: "#categories" },
      { label: "Digital Marketing", href: "#categories" },
      { label: "Cyber & Cloud", href: "#categories" },
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
      { label: "College Partnerships", href: "#why" },
      { label: "Events", href: "#blogs" },
      { label: "Gallery", href: "#blogs" },
      { label: "Blogs", href: "#blogs" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact Us", href: "#enquire" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "#faq" },
      { label: "Placement Support", href: "#why" },
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
