import React from 'react'
import { Link } from 'react-router-dom';
import TemplatePage from '../../../components/TemplatePage'

function CadastroCategoria() {
    return (
        <TemplatePage>            
            <h1>Cadastro de Categoria</h1>
            <Link to="/">ir para Home</Link>
        </TemplatePage>
    )
}

export default CadastroCategoria