import { Config } from 'tailwindcss';

const spacing = (() => {
  const spacingObject: { [key: string]: string } = {};

  Array(200)
    .fill(1)
    .forEach((_, i) => (spacingObject[`${i}pxr`] = `${i / 16}rem`));

  return spacingObject;
})();

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    spacing: {
      ...spacing,
    },
    screens: {
      tablet: { max: '1023px' },
      desktop: { min: '768px' },
      mobile: { max: '767px' },
    },
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'custom': '1px 2px 4px rgba(170, 178, 200, 0.45)',
      }
    },
  },
  plugins: [],
};

export default config;
