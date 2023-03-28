import "./section3.scss"
import logo from "../../assets/images/bill.png"
import pic from "../../assets/images/google.svg"
import image1 from "../../assets/images/apple.svg"

function Section3(){
    return(
        <section>
            <div className="container section3">
    <div className="row ">
        <div className="col-12 col-md-6">
            <div className="logo"> 
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="col-12 col-md-6">
            <h1>Easily control your billing & invoicing.</h1>
            <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className="images">
                <img src={pic} alt="" />
                <img src={image1} alt="" />
            </div>
        </div>
    </div>
</div>

        </section>

    );
}
export default Section3;