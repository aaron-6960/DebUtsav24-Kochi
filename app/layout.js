import "./globals.css";
import 'aos/dist/aos.css';
import AOSInit from "@/utils/AOSInit";

export const metadata = {
  title: "DebUtsav 2024 | Kochi",
  description: "Join DebutSav, the Debian fest celebrating free and open source software at Kochi Model Engineering College. Explore the world of free and open source software, connect with experts, and dive into the vibrant FOSS community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
