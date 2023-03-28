import "./footer.scss"
import logo from "../../assets/images/logo.svg"
import { FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/Bs';
import {BsLinkedin} from 'react-icons/Bs';

const footersec=[
    {
        link:"Content"
    },
    {
        link:"How it Works"
    },
    {
        link:"Create"
    },
    {
        link:"Explore"
    },
    {
        link:"Terms & Services"
    },
]

const footersec2=[
    {
        data:"Help Center"
    },
    {
        data:"Partners"
    },
    {
        data:"Suggestions"
    },
    {
        data:"Blog"
    },
    {
        data:"Newsletters"
    },
]
function Footer(){
    const useful=footersec.map(item=>
        <li><a href="">{item.link}</a></li>  )

        const communit=footersec2.map(items=>
            <li><a href="">{items.data}</a></li>)
    return(
        <section>
              <div className="container footer">
            <div className="row">
                <div className="col-lg-5  col-sm-12 col-md-12">
                    <img src={logo} alt="" />
                    <p>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className=" col-sm-6 col-md-4 col-lg-2">
                    <h3>Useful Links</h3>
                    <nav>
                        <ul>
                            {useful}
                            {/* <li><a href="">Content</a></li>
                            <li><a href="">How it Works</a></li>
                            <li><a href="">Create</a></li>
                            <li><a href="">Explore</a></li>
                            <li><a href="">Terms & Services</a></li> */}
                        </ul>
                    </nav>
                        
                </div>
                <div className="col-2  col-sm-6 col-md-4 col-lg-2">
                    <h3>Community</h3>
                    <nav>
                        <ul>
                            {communit}
                            {/* <li><a href="">Help Center</a></li>
                            <li><a href="">Partners</a></li>
                            <li><a href="">Suggestions</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Newsletters</a></li> */}
                        </ul>
                    </nav>
                       
                </div>
                <div className="col-3  col-sm-12 col-md-4 col-lg-3 ">
                    <h3>Partner</h3>
                    <nav>
                        <ul>
                            <li><a href="">Our Partner</a></li>
                            <li><a href="">Become a Partner</a></li>
                        </ul>
                    </nav>
                       
                </div>
            </div><hr />
            <div className="footerlast ">
                <p>Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
                <div>
                <span><a href=""><FaInstagram/></a></span>
                <span><a href=""><FaFacebook /></a></span>
                <span><a href=""><BsTwitter /></a></span>
                <span><a href="">< BsLinkedin/></a></span>
                </div>
            </div>
        </div>
        </section>
      
    );
}
export default Footer;