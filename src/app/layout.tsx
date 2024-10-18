export const metadata = {
    title: "Eraya Foods",
    description: "From India’s Fields to the World’s Tables",
};
import Nav from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Nav />
                {children}
                <div className="mt-auto">
                    <Footer />
                </div>
            </body>
        </html>
    );
}
