import React from "react";
import NavBar from "../NavBar/NavBar";
import Card from './card'
const Tecnologias = () => {
    return(
        <>
            <NavBar/>
            <div className="ps-2 pe-2 d-flex flex-column flex-wrap">
                <h3 className="text-center">Tecnologías</h3>
                {/* <span>Esta página web fue hecha con:</span> */}
                <Card 
                    border={'#FEE847'}
                    color={'#FFF5AE'} 
                    nombre={'JavaScript'} 
                    img={'https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png'} 
                    version={'ES6'}
                />
                <Card 
                    border={'#52D1FF'}
                    color={'#C0ECFC'} 
                    nombre={'React'} 
                    img={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'} 
                    version={'v.18.2.0'}
                />
                <Card 
                    border={'#9A9A99'}
                    color={'#D0D0D0'} 
                    nombre={'React Router'} 
                    img={'https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png'} 
                    version={'v.5.2.0'}
                />
                <Card 
                    border={'#9E5CFE'}
                    color={'#D3B5FF'} 
                    nombre={'Bootstrap'} 
                    img={'https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png'} 
                    version={'v.5.3.1'}
                />
                <Card 
                    border={'#52D1FF'}
                    color={'#C0ECFC'} 
                    nombre={'CSS'} 
                    img={'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png'} 
                    version={'css module'}
                />
                <h3 className="text-center mb-2 mt-2">Deploy</h3>
                {/* <span>Esta página fue deployada en: </span> */}
                <Card 
                    border={'#000000'}
                    color={'#FFFFFF'} 
                    nombre={'Vercel'} 
                    img={'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png'} 
                    link={'https://vercel.com/'}
                />
                <h3 className="text-center mt-2 mb-2">Repositorio</h3>
                {/* <span>El repositorio está en: </span> */}
                <Card 
                    border={'#000000'}
                    color={'#FFFFFF'} 
                    nombre={'GitHub'} 
                    img={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'} 
                    link={'https://GitHub.com/'}
                />
            </div>
        </>
    )
}

export default Tecnologias
