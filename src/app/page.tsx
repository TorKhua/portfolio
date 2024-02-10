import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Languages from "@/components/Languages/Languages";
import Nav from "@/components/Nav/Nav";
import Profile from "@/components/Profile/Profile";
import Projects from "@/components/Project/Projects";
import Skills from "@/components/Skills/Skills";
import Studies from "@/components/Studies/Studies";

export default function Home() {
  return (
    <main className="max-w-3xl dark:bg-d_bg bg-l_bg">
      <Nav />
      <Header />
      <br />
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
