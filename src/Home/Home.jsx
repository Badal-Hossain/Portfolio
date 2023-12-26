import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Navbar from "../shared/navbar/Navbar";

const Home = () => {
    return (
        <div className="font-kanit">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};
export default Home;