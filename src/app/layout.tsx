export const metadata = {
  title: "Eraya Foods",
  description: "From India’s Fields to the World’s Tables",
};
// import Nav from './components/navbar'
import Footer from "./components/footer";
import Navbar from "./components/navbar";
// import { Navbar } from '@nextui-org/navbar'
import "./globals.css";
import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../icon.ico" type="image/svg+xml" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
