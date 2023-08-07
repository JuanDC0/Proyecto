import React from "react";
import NavBar from '../NavBar/NavBar'
import { useState } from "react";
import style from './calculadora.module.css'
var Algebrite = require('algebrite')
const Calculadora = () => {
    const [info, setInfo] = useState('')
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState('')

    const handleInfo = (data) => {
        setError('')
        setResultado('')
        setInfo(data)
    }
    const handleCalcular = () => {
        if (validarDatos() == '') {
            try {
                const ecuacionOriginal = info
                //dividimos la ecuacion en 2
                const lados = ecuacionOriginal.split('=');
                const ladoIzquierdo = lados[0].trim();
                const ladoDerecho = lados[1].trim();
                // separamos los terminos del lado derecho
                let terminosDerechos = ladoDerecho.split(/\s*([\+\-])\s*/);
                //añadimos un - si el primer termino no lo tiene
                if(!terminosDerechos[0].includes('-') && terminosDerechos[0].length>0){
                    terminosDerechos[0] = `-${terminosDerechos[0]}`
                } 
                //cambiamos los signos
                terminosDerechos = terminosDerechos.map( (t,i) => {
                    if(t == '+'){
                        return t = '-'
                    }
                    else if(t == '-'){
                        return t = '+'
                    }
                    else
                    return t
                });
                //movemos toda la ecuacion al lado izquierdo
                const expresionNueva = ladoIzquierdo.concat(terminosDerechos.join(""))
                //recuperamos el resultado
                let resultado = Algebrite.run(expresionNueva)
                let variableNegativa = false

                if (!resultado.includes('x')){
                    throw new Error('El resultado no otorga una variable para depejar')
                } 

                if(resultado[0] == '-'){
                    variableNegativa = true
                } 

                let divisor = 1
                if( resultado.includes('*')){ //significa que x es mayor a un numero
                    divisor= resultado.slice(0, resultado.indexOf("*")).replace("-","") 
                }
                
                resultado = resultado.slice(resultado.indexOf('x')+1)
                
                //cambiamos el signo al despejar
                if(resultado.includes("-")){
                    resultado = resultado.replace("-","")
                }else{
                    resultado = resultado.replace("+","-")
                }
                
                //si la x es negativo, multiplicamos el resultado por -1
                if(variableNegativa){
                    resultado = resultado* -1   
                }

                // si el divisor es mayor a 1, mostramos el resultado como una fracción
                if (divisor>1){
                    if(resultado % divisor ==0){
                        resultado = resultado / divisor
                    }else{
                        resultado = `${resultado}/${divisor}`
                    }
                } 
                setResultado("El resultado es: " +resultado)
            } catch (error) {
                setError(error.message)
            }
        }
    }

    const validarDatos = () => {
        let mensajeError = ''
        if (info.length === 0)
            mensajeError = 'No se han ingresado datos'
        else if (!info.includes('='))
            mensajeError = 'La epresion no tiene un "=", por lo tanto no es una ecuación'
        else if (info.indexOf('=') != info.lastIndexOf('='))
            mensajeError = 'La expresión tiene más de 1 "="'
        else if (!info.includes('x'))
            mensajeError = 'La expresión no tiene alguna variable para despejar'
        if (mensajeError.length > 0)
            setError(mensajeError)
        return mensajeError
    }
    const pressEnter = (e) => {
        if (e.key == 'Enter')
            handleCalcular()
    }
    return (
        <>
            <NavBar />
            <div className={style.indicaciones}>
                <h3 className="text-center p-3">Calculadora de ecuaciones de primer grado</h3>
                <div className="ms-4">
                    <span> Indicaciones: </span>
                    <ul>
                        <li>Solo se puede utilizar una variable, la variable <strong>X</strong></li>
                        <li>La ecuación siempre debe tener un <strong>=</strong></li>
                    </ul>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <input type="text"
                        value={info}
                        className={style.inputText}
                        onChange={(e) => handleInfo(e.target.value)}
                        onKeyDown={(e) => pressEnter(e)}
                    />
                    <button
                        className="btn btn-primary ps-4 pe-4 mt-3"
                        disabled={info.length == 0}
                        onClick={() => handleCalcular()}
                    >
                        Calcular
                    </button>
                </div>
                <div className="d-flex justify-content-center pt-4">

                {error ?
                    <label className="text-danger text-center">{error}</label>
                    :
                    <label className="text-success text-center">{resultado}</label>
                }
                </div>
            </div>
        </>
    )
}

export default Calculadora