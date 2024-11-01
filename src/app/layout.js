// app/layout.js (server layout)

import localFont from "next/font/local";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient"; // Import a client layout if needed

const merriweather = localFont({
  src: "./fonts/Merriweather-Regular.ttf",
  variable: "--font-merriweather",
  weight: "400",
});

export const metadata = {
  title: "Scriptify",
  description: "Scriptify is your go-to platform for all things scriptwriting. Join us today and take your writing to the next level.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable}`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
