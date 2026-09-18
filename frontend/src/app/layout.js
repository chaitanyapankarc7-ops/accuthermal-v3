import "./globals.css";

export const metadata = {
  title: "Accurate Thermal Systems | Precision Thermal Engineering",
  description: "Precision thermal systems for calibration, thermal cleaning, heat treatment, reactor heating, research and industrial applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Preload above-the-fold fonts (React 19 hoists these to <head>) */}
        <link
          rel="preload"
          href="/assets/fonts/dm-sans-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/manrope-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/ibm-plex-mono-500-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
