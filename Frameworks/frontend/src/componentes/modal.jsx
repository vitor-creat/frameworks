import React from 'react'

const BACKGROUND_STYLE = {
    position:"fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0,0,0, 0.3)",
    zIndex: "1000", /*mexe no eixo z fazendo o elemento vir mais para a frente*/ 
}

const MODAL_STYLE ={
    position:"fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "150px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    color: "black"
}

export default function Modal({isOpen, setOpenModal, children}){
    if (isOpen) {
        return (
        <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE} className="modal">
                    <div>{children}</div>
                    <button className='btn-fechar' onClick={setOpenModal}> fechar </button>
                </div>
            </div>
        )
    }

    return null

}