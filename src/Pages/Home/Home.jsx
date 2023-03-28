import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/footer/footer";
import Header from "../../Components/Header/Header";
import Section1 from "../../Components/section1/Section1";
import Section2 from "../../Components/section2/Section2";
import Section3 from "../../Components/section3/section3";
import Section4 from "../../Components/section4/section4";
import Section5 from "../../Components/section5/section5";
import Section6 from "../../Components/section6/section6";

function Home(){
    return(
        <div className="Home">
            <Header/>
            <Banner/>
            <Section1/>
             <Section2/>  
             <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>  
            <Footer/>

        </div>

    );
}

export default Home;