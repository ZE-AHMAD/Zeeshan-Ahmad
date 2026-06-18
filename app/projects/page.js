import ProjectsPage from "@/components/Pages/ProjectsPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Projects | Zeeshan",
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <ProjectsPage />
      <Footer />
    </>
  );
}
