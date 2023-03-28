import "./section5.scss"
// import quotes from "../../assets/images/quotes.svg"
// import people1 from "../../assets/images/people01.png"
// import people2 from "../../assets/images/people02.png"
// import people3 from "../../assets/images/people03.png"

const sec5=[
    {
        para:"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        photo:"/image/quotes.svg",
        personpic:"/image/people01.png",
       name:"Herman Jensen",
       position:"Founder & Leader"
    },
    {
        para:"Money makes your life easier. If you're lucky the money business to have it, you're lucky the money business.",
        photo:"/image/quotes.svg",
        personpic:"/image/people02.png",
       name:"Steve Mark",
       position:"Founder & Leader"
    },
    {
        para:"It is usually people in the money business, finance, and international trade that are really rich",
        photo:"/image/quotes.svg",
        personpic:"/image/people03.png",
       name:"Kenn Gallagher",
       position:"Founder & Leader"
    }
]
   
const sec5details=sec5.map((item)=>
<div className="col-4   col-sm-12 col-md-4 ">
    <div>
        <img src={item.photo} alt="" />
        <p className="details">{item.para}</p>
    </div>
    <div className="pic">
        <div >
            <img src={item.personpic} alt="" />
        </div>
        <div className="names">
            <h4>{item.name}</h4>
            <p>{item.position}</p>
        </div>
    </div>
</div>

    );

function Section5(){
 
    return(
        <section> 
            <div className="container section5">
    <div className="row">
        <div className="col-6  col-sm-12">
            <h1>What People are saying about us</h1>
        </div>
        <div className="col-6  col-sm-12">
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
    </div>
    
    <div className="row part2">
        {sec5details}
        {/* <div className="col-4   col-sm-12 col-md-4 ">
            <div>
                <img src={quotes} alt="" />
                <p className="details">Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
            </div> 
            <div className="pic">
                <div>
                    <img src={people1} alt="" />
                </div>
               
                <div className="names">
                    <h4>Herman Jensen</h4>
                    <p>Founder & Leader</p>
                </div>
            </div>
        </div> */}

        {/* <div className="col-4  col-sm-12 col-md-4 ">
             <div>
                <img src={quotes} alt="" />
                <p className="details">Money makes your life easier. If you're lucky the money business to have it, you're lucky the money business.</p>
            </div> 
            <div className="pic">
                <div>
                <img src={people2} alt="" />    
                </div>
              
                <div className="names">
                    <h4>Steve Mark</h4>
                    <p>Founder & Leader</p>
                </div>
            </div>
        </div>
        <div className="col-4  col-sm-12 col-md-4 ">
        <div>
                <img src={quotes} alt="" />
                <p className="details">It is usually people in the money business, finance, and international trade that are really rich.</p>
            </div> 
            <div className="pic">
                <div>
                <img src={people3} alt="" />
                </div>
                
                <div className="names">
                    <h4>Kenn Gallagher</h4>
                    <p>Founder & Leader</p>
                </div>
            </div>
        </div> */}
    </div>
</div>
        </section>

    );
}
export default Section5;