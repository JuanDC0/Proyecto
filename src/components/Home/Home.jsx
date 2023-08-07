import React from "react";
import NavBar from '../NavBar/NavBar'
import { useState } from "react";
import style from './home.module.css'
const math = require('mathjs')
const Home = () => {
    const [info, setInfo] = useState('')
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState('')

    const handleInfo = (data, infoBtn) => {
        setError('')
        setResultado('')
        if (infoBtn) { // input botones: x,y,z,^,+,-,*,/
            setInfo(`${info}${infoBtn}`)
        }
        else { //input keyboard
            setInfo(data)
        }
    }

    const handleCalcular = () => {
        if (validarDatos().length == 0) {
            try {
                const expresion = math.parse(info);
                const resultado = expresion.evaluate();
                console.log(resultado)
            } catch (error) {
                console.log(error);
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
            <div className="ps-2 pe-2">
                <h3 className="text-center">Calculadora de ecuaciones de primer grado</h3>
                <span className="ms-1"> Indicaciones: </span>
                <ul>
                    <li>Solo se puede utilizar una variable, la variable <strong>X</strong></li>
                    <li>No escriba <strong>x²</strong> en su lugar escriba <strong>x^2</strong></li>
                    <li>La ecuación siempre debe tener un <strong>=</strong></li>
                </ul>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <input type="text"
                        value={info}
                        className={style.inputText}
                        onChange={(e) => handleInfo(e.target.value)}
                        onKeyDown={(e) => pressEnter(e)}
                    />
                    <div className="d-flex mt-2">
                        <button className={style.intputBtns} onClick={() => handleInfo(info, "x")}>x</button>
                        <button className={style.intputBtns} onClick={() => handleInfo(info, "^")}>^</button>
                        <button className={style.intputBtns} onClick={() => handleInfo(info, "+")}>+</button>
                        <button className={style.intputBtns} onClick={() => handleInfo(info, "-")}>-</button>
                        <button className={style.intputBtns} onClick={() => handleInfo(info, "*")}>*</button>
                        <button className={style.intputBtns} onClick={() => handleInfo(info, "/")}>/</button>
                        <button className={style.intputBtns} onClick={() => handleInfo(info, "=")}>=</button>
                    </div>
                    <button
                        className="btn btn-primary mt-3"
                        disabled={info.length == 0}
                        onClick={() => handleCalcular()}
                    >
                        Calcular
                    </button>
                </div>
                {error ?
                    <label className="text-danger">{error}</label>
                    :
                    <label className="text-success">{resultado}</label>
                }
            </div>
        </>
    )
}

export default Home