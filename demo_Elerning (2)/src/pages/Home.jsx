// import HeroCarousel from '../components/sections/HeroCarousel';
// import Services from '../components/sections/Services';
// import AboutSection from '../components/sections/About';
// import Banner1 from '../components/sections/Banner1';
// import Categories from '../components/sections/Categories';
// import CoursesSection from '../components/sections/Courses';
// import Banner2 from '../components/sections/Banner2';
// import FAQ from '../components/sections/FAQ';

import About from "../components/common/About";
import Categories from "../components/common/Categories";
import Courses from "../components/common/Courses";
import HeroCarousel from "../components/common/HeroCarousel";
import Services from "../components/common/Services";
 

const Home = () => {
  return (
    <>
      <HeroCarousel />  
      <Services />
       <About />
       <Categories />
      <Courses />



      {/* // <Banner1 />
      <Categories />
      // <Banner2 />
      // <FAQ />   */}
    </>
  );
};

export default Home;