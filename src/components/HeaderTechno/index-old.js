import React from 'react'
import LogoTechno from '../LogoTechno'
import ButtonLink from '../ButtonLink'
import './Menu.css'


function Menu(){
    return (
        <nav classname='Menu'>
            <a href='/'><LogoTechno /></a>
            <ButtonLink className='ButtonLink' href='/'>Novo vídeo</ButtonLink>
        </nav>

        
    )
}

export default Menu;