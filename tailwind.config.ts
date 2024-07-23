import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section1':"url('/OIF.jpeg')"
      },
      colors:{
        primry:'#3caf28',
        second:'#236218',
      }
    },
  },
  plugins: [],
};
export default config;
