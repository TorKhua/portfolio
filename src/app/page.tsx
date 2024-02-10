import About from "@/components/Sections/About/About";
import Experience from "@/components/Sections/Experience/Experience";
import Header from "@/components/Header/Header";
import Languages from "@/components/Sections/Languages/Languages";
import Nav from "@/components/Nav/Nav";
import Profile from "@/components/Sections/Profile/Profile";
import Projects from "@/components/Sections/Project/Projects";
import Skills from "@/components/Sections/Skills/Skills";
import Studies from "@/components/Sections/Studies/Studies";

export default function Home() {
  return (
    <main className="max-w-3xl m-auto px-5">
      <Nav />
      <Header />
      <Profile />
      <Experience />
      <Studies />
      <Skills />
      <Languages />
      <Projects />
      <About />
    </main>
  );
}
