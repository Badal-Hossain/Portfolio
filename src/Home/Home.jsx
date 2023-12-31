import About from "../About/About";
import Banner from "../Banner/Banner";
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
        </div>
    );
};
export default Home;