import "./globals.css";

export const metadata = {
  title: "Accurate Thermal Systems | Precision Thermal Engineering",
  description: "Precision thermal systems for calibration, thermal cleaning, heat treatment, reactor heating, research and industrial applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
