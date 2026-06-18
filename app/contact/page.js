import Contact from "@/components/Sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact | Zeeshan",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
