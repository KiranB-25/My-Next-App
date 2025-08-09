import PortfolioNavbar from '@/components/custom components/Navbar';
import HeroSection from '@/components/custom components/Herosection';
import AboutSection from '@/components/custom components/AboutSection';
import SkillsSection from '@/components/custom components/SkillSection';
import Footer from '@/components/custom components/FooterSection';
import ExperienceSection from '@/components/custom components/ExperienceSection';
import ProjectsSection from '@/components/custom components/ProjectSection';
import ContactSection from '@/components/custom components/ContactSection';
import MapSection from './location/page';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <MapSection />
    </>
  );
};

export default Home;
