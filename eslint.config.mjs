import next from "eslint-config-next";

const eslintConfig = [
  ...next,
  {
    ignores: [".next/**", "node_modules/**", "legacy-static/**"],
  },
];

export default eslintConfig;
