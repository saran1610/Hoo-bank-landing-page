import "./Banner.scss"
import logo from "../../assets/images/robot.png"
import {BsArrowUpRight} from 'react-icons/Bs';

function Banner(){
    return(
        <section>
            <div className="container banner">
            <div className="row">
                <div className="col-12 col-md-6">
                    <p>20% Discount For 1 Month Account</p>
                    <div className="heading">
                         <h1>THE NEXT GENERATION PAYMENT METHOD.</h1> 
                         <button><a href="">Get <BsArrowUpRight/> Started</a></button>   
                    </div>
                    
                    
                    <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
                </div>
                <div className="col-12 col-md-6">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </section>
        
    );
}

export default Banner;