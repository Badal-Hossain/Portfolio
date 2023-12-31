import About from "../About/About";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Navbar from "../shared/navbar/Navbar";

const Home = () => {
    return (
        <div className="font-kanit">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Education></Education>
        </div>
    );
};
export default Home;