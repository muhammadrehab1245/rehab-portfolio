import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Rehab - Portfolio",
  description:
    "I am a passionate web developer specializing in the MERN Stack (MongoDB, Express.js, React, Node.js) and Next.js. I build modern, scalable, and responsive web applications that provide seamless user experiences. My projects showcase my skills in creating dynamic front-end interfaces with React and Next.js, while efficiently managing back-end services using Node.js and MongoDB. Explore my work to see how I bring innovative ideas to life using these powerful technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#333",
              color: "#fff",
              borderRadius: "8px",
              padding: "12px 16px",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
