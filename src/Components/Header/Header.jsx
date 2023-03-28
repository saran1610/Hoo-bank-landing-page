import "./Header.scss"
import logo from "../../assets/images/logo.svg"
function Header(){
    return(
        <section>
             <div className="container header">
            <div className="row">
                <div className="col-6">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="col-6 d-none d-sm-block ">
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Client</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            
        </div>
        </section>
       
        
    );
}

export default Header;