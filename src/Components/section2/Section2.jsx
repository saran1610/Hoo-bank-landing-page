import "./Section2.scss"
import {BsShieldFillCheck} from 'react-icons/Bs';
import {BsSendFill} from 'react-icons/Bs';
import { BsStarFill } from "react-icons/Bs";
import Button from "../Button/Button";


// const sec2=[
// {
//     icon:<BsStarFill/>,
//     heading:"Rewards",
//     para:"The best credit cards offer some tantalizing combinations of promotions and prizes"
// },
// {
//     icon:<BsShieldFillCheck/>,
//     heading:"100% Secured",
//     para:"We take proactive steps make sure your information and transactions are secure."
// },
// {
//     icon:<BsSendFill/>,
//     heading:"Balance Transfer",
//     para:"A balance transfer credit card can save you a lot of money in interest charges."
// }
// ]


function Section2(){
    // const sec2array=sec2.map(item=>
    //     <div>
    //         <span> <a href="">{item.icon}</a></span>
    //     </div>,
        
    //     <div>
    //         <h3>{item.heading}</h3>,
    //          <p>{item.para}</p>
    //     </div>
    //    )

    return(
        <section>
        <div className="container ">
            <div className="row section2">
                <div className="col-12 col-md-6">
                    <h1>You do the business, we’ll handle the money.</h1>
                    <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <Button btn="Get Started"/>
                    {/* <button><a href="">Get Started</a></button> */}
                </div>


                <div className="col-12 para col-md-6 ">
                    <div>
                         {/* <div className="icons">
                            {sec2array}
                        </div>  */}

                          <div className="icons">
                            <div>
                                <span><a href=""><BsStarFill/></a></span>
                            </div>
                            <div>
                                <h3>Rewards</h3>
                                <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                            </div>
                        </div>

                        <div className="icons">
                             <div>
                                <span><a href=""><BsShieldFillCheck/></a></span>
                            </div>
                            <div>
                                <h3>100% Secured</h3>
                                <p>We take proactive steps make sure your information and transactions are secure.</p>
                            </div> 
                        </div>

                        <div className="icons">
                            <div>
                                <span><a href=""><BsSendFill/></a></span>
                            </div>
                            <div>
                                <h3>Balance Transfer</h3>
                                <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                            </div>
                            
                        </div>  
                    </div>
                    
                </div>
            </div>
        </div>
        </section>
        
    );
}
export default Section2;