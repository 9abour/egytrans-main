export const globalStyles = (lang: string) => {
  if (lang === 'ar') {
    return `
      body {
        h1, h2, h3, h4, h5, h6 {
          line-height: 120% !important;
        }
      }
    `;
  }

  return ``;
};
