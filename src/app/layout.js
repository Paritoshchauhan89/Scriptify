import "./globals.css";
import RootLayoutClient from "./RootLayoutClient"; // Import a client layout if needed


export const metadata = {
  title: "Scriptify",
  description: "Scriptify is your go-to platform for all things scriptwriting. Join us today and take your writing to the next level.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
