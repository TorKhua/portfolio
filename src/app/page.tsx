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
    <main className="max-w-3xl m-auto">
      <div
        className="px-5 sticky top-0 dark:bg-d_bg bg-l_bg_h">
        <Nav />
      </div>
      <div className="px-5">
        <Header />
        <Profile />
        <Studies />
        <Skills />
        <Experience />
        <Languages />
        <Projects />
      </div>
    </main>
  );
}
