/* Extracts only the brand icons this site needs into a small TS module. */
const si = require("simple-icons");
const fs = require("fs");

/** course name -> simple-icons slug. Courses with no brand mark are omitted. */
const MAP = {
  "Python": "python",
  "Java": "openjdk",
  "C & C++": "cplusplus",
  "Kotlin": "kotlin",
  "Flutter App Development": "flutter",
  "Web Designing": "html5",
  "Web Development": "javascript",
  "MERN Stack": "react",
  "MEAN Stack": "angular",
  "PHP Full Stack": "php",
  "Python + Django Full Stack": "django",
  "Machine Learning": "scikitlearn",
  "Deep Learning": "pytorch",
  "Data Science": "pandas",
  "Power BI": "powerbi",
  "Tableau": "tableau",
  "ChatGPT & AI Tools": "openai",
  "Social Media Marketing": "instagram",
  "Google Ads": "googleads",
  "SEO": "google",
  "WordPress": "wordpress",
  "Shopify": "shopify",
  "Ethical Hacking": "kalilinux",
  "AWS": "amazonwebservices",
  "Linux": "linux",
  "AutoCAD": "autocad",
  "SolidWorks": "dassaultsystemes",
  "3ds Max": "autodesk",
  "Revit": "autodesk",
  "MS Office": "microsoftoffice",
  "Desktop Publishing (DTP)": "adobephotoshop",
  "Cloud Computing": "googlecloud",
  "Data Analytics": "googleanalytics",
  "Digital Marketing": "googlemarketingplatform",
  "Generative AI": "huggingface",
  "Artificial Intelligence": "tensorflow",
};

function lookup(slug) {
  // exported as siPython, siHtml5, si1dot1... — normalise the slug to that form
  const camel = "si" + slug.charAt(0).toUpperCase() + slug.slice(1);
  if (si[camel]) return si[camel];
  const hit = Object.values(si).find(
    (i) => i && typeof i === "object" && i.slug === slug,
  );
  return hit || null;
}

const icons = {};
const missing = [];

for (const [course, slug] of Object.entries(MAP)) {
  const icon = lookup(slug);
  if (!icon) {
    missing.push(`${course} (${slug})`);
    continue;
  }
  icons[slug] = { title: icon.title, hex: `#${icon.hex}`, path: icon.path };
}

const lines = [
  "/* Generated from the `simple-icons` package — do not edit by hand.",
  " * Regenerate with the script in the project notes if you add a course. */",
  "",
  "export type BrandIcon = { title: string; hex: string; path: string };",
  "",
  "export const BRAND_ICONS: Record<string, BrandIcon> = {",
];
for (const [slug, i] of Object.entries(icons)) {
  lines.push(
    `  ${JSON.stringify(slug)}: { title: ${JSON.stringify(i.title)}, hex: ${JSON.stringify(i.hex)}, path: ${JSON.stringify(i.path)} },`,
  );
}
lines.push("};", "");

fs.writeFileSync(process.argv[2], lines.join("\n"), "utf8");

console.log("written icons:", Object.keys(icons).length);
if (missing.length) {
  console.log("NOT FOUND (will fall back to initials):");
  missing.forEach((m) => console.log("  -", m));
}
console.log("\ncourse -> slug map, for the data file:");
for (const [course, slug] of Object.entries(MAP)) {
  if (icons[slug]) console.log(`  ${course}\t${slug}`);
}
