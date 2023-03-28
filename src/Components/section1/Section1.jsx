import "./Section1.scss"


        const details =[
            {
                id:'3800+',
                names:"USER ACTIVE"
            },
            {
                id:'230+',
                names:"TRUSTED BY COMPANY"
            },
            {
                id:"$230M+",
                names:"TRANSACTION"
            }
        ]
        function Section1(){
           
        const arraydata = details.map(items=>
            <div className="col-12 col-sm-4"> <p><span>{items.id}</span>{items.names}</p></div>
           
            )

            return(


         <section>
         <div className="container">
             <div className="row section1">
             {arraydata}
                   {/* <div className="col-12 col-sm-4"> 
                   
                             <p><span>3800+</span>USER ACTIVE</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <p><span>230+</span>TRUSTED BY COMPANY</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <p><span>$230M+</span>TRANSACTION</p> 
                        </div>  */}
                 </div> 
         </div>
         </section>
       
        
    );
}
export default Section1;