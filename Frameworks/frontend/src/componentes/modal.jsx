import { Component, useState } from 'react'

const BACKGROUND_STYLE = {
    position:"fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgb(0,0,0, 0.3)",
    zIndex: "1000" /*mexe no eixo z fazendo o elemento vir mais para a frente*/ 
}

const MODAL_STYLE ={
    position:"fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "150px",
    backgroundColor: "#ffff",
    borderRadius: "10px",
    height: "200px"
}

export default function Modal({isOpen, children}){
    if (isOpen) {
        return (

            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE} class="modal">
                    <button class="btn-fechar">
                        <img src="img/botao-apagar.svg" alt="Fechar" />
                    </button>               

                </div>
            </div>


        )
    }

    return null
}
