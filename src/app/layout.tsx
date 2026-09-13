import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CODEXSTREAM | Web Development Company & Digital Agency",
  description:
    "We design, develop and market digital experiences that help businesses thrive online. Web Development, App Development, UI/UX Design, and Digital Marketing.",
  keywords: ["CODEXSTREAM", "Web Development Company", "Digital Agency", "App Development", "Web Designing", "Digital Marketing"],
  icons: {
    icon: [
      { url: "/images/emblem.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/emblem.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link rel="icon" type="image/png" href="/images/emblem.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/emblem.png" />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
