import React from "react";
import style from './tecnologias.module.css'
const Card = ({nombre, version, img, color, border, link}) => {
    return(
        <div>

        <div className={style.cardContainer} style={{backgroundColor: color, border: ` 2px solid ${border}`}}>
            <div className={style.imgContainer}>
                <img className={style.image} src={img} alt={nombre} />
            </div>
            <div className={style.nombre}>
                <span>{nombre}</span>
            </div>
            <div className={style.version}>
                {link?
                <a href={link}>ver</a>
                :
                <span className="d-flex">{version}</span>    
            }
            </div>
        </div>
            </div>
    )
}

export default Card
