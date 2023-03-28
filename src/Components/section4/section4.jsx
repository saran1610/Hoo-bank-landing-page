import "./section4.scss"
import card from "../../assets/images/card.png"
import Button from "../Button/Button";

function Section4(){
    return(
        <section>
        <div className="container section4">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1>Find a better card deal in few easy steps.</h1>
                    <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                    <Button btn="Get Started"/>
                    {/* <button><a href="">Get Started</a></button> */}
                </div>
                <div className="col-12 col-md-6">
                    <img src={card} alt="" />
                </div>
            </div>
        </div>
        </section>
       
    );
}
export default Section4;