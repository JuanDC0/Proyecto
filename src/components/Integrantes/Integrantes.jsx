import React from "react";
import NavBar from "../NavBar/NavBar";
import foto1 from "../../Fotos/nicol.jpg"
import foto2 from "../../Fotos/jair.jpg"
import foto3 from "../../Fotos/juan.png"
const Integrantes = () => {
return(
    <>
    <NavBar />
        <div>
        
          
            <h2 className="text-center">Integrantes</h2>
            <div className = "d-flex justify-content-around flex-wrap">
               <div> <li>Angie Nicol Rodriguez</li> 
                   <img src={foto1} style={{ width: "150px", borderRadius: "100px", height: "150px"}} />
               </div>
               <div> <li>Jair Nixon Rodriguez </li>
                   <img src={foto2} style={{ width: "150px", borderRadius: "100px", height: "150px"}} />
               </div>
               <div> <li>Diego Andrade Calero</li>
                    <img src={foto3} style={{ width: "150px", borderRadius: "100px", height: "150px" }}/>
               </div>
            </div>
        </div>
    </>
)    
}

export default Integrantes