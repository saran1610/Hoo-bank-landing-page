import "./section6.scss";
import Button from "../Button/Button";

const sec6pic = [
  {
    "id":1,
    photo: "/image/airbnb.png"
  },
  {
    "id":2,
    photo: "/image/binance.png"
  },
  {
    "id":3,
    photo: "/image/coinbase.png"
  },
  {
    "id":4,
    photo: "/image/dropbox.png"
  },
];

 const sec6data = sec6pic.map((item) => 
 <div className="col-3 pic" key={item.id}>
     <img src={item.photo} />
     </div>
);
// import i from "../../assets/images/airbnb.png"
function Section6() {
  return (
    <section>
      <div className="container section6">
        <div className="row">
          {sec6data}
          {/* <div className="col-3 pic">
            <img src={binance} alt="" />
            </div>
            <div className="col-3 pic">
            <img src={coinbase} alt="" />
            </div>
            <div className="col-3 pic">
            <img src={dropbox} alt="" />
            </div> */}
       

          <div className="col-8  page">
            <h1>Let’s try our service now!</h1>
            <p>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <div className="col-4">
         <Button btn="Get Started"/>
            {/* <button>
              <a href="">Get Started</a>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section6;
