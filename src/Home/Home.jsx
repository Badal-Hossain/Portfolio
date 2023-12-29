import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Navbar from "../shared/navbar/Navbar";

const Home = () => {
    return (
        <div className="font-kanit">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Skills></Skills>
        </div>
    );
};
export default Home;