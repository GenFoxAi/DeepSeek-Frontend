import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta property="og:site_name" content="DeepSeek" />
      <meta property="og:title" content="DeepSeek" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/deepseek-trans.png" />
      <meta property="og:image:width" content="125" />
      <meta property="og:image:height" content="125" />
      <meta property="og:description" 
    content=' "DeepSeek is a captivating and responsive cryptocurrency landing page built to introduce users to the innovative DeepSeek cryptocurrency. The project implements React.js, Next.js, and Tailwind CSS to create a dynamic and visually appealing interface that provides an engaging gateway for users to explore DeepSeek." ' />
      <meta property="og:url" content="https://www.deepseekcoin.us/" />
      <meta property="og:determiner" content="the" />
      <meta property="og:locale" content="ms_MY" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="zh_SG" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="es_ES" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
