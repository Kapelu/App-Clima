import React, { useState, useEffect } from 'react';

export default function ScrollHooks (){
    const [scrollY, setScrollY] = useState(0)
    
    
    useEffect(()=>{
        console.log('Fase de Montaje')
    })
    
    useEffect(()=>{
        console.log('Fase de actualización')

        const detectarScroll = ()=> setScrollY(window.pageYOffset)
        window.addEventListener('scroll', detectarScroll)

        return ()=>{
            window.removeEventListener('scroll', detectarScroll)
        }
    },[scrollY])

    useEffect(()=>{
        console.log('Fase de Desmontaje')

        return ()=>{}
    },[])

    useEffect(()=>{
    })
    return(
        <>
        <h2>Hooks - useEffect y el CicloVida</h2>
        <p>Scroll Y del navegador {scrollY} px</p>
        </>
    )
}
