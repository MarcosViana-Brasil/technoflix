import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TemplatePage from '../../../components/TemplatePage'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
    const initialValues = {
        nomeCategoria: '',
        descricaoCategoria: '',
        corCategoria: '',
    }
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(initialValues)

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(infosDoEvento){
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        )
    }

    return (
        <TemplatePage>            
            <h1>Cadastro de Categoria: {values.nomeCategoria}</h1>
            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault()
                setCategorias([
                    ...categorias,
                    values
                ])     
                setValues(initialValues)           
            }}>

                <FormField 
                    tag = 'input'
                    label ='Nome da Categoria: '
                    type ='text'
                    name ='nomeCategoria'
                    value = {values.nomeCategoria}
                    onChange = {handleChange}
                />

                <FormField 
                    tag = 'textarea'
                    label ='Descrição : '
                    type ='text'
                    name ='descricaoCategoria'
                    value = {values.nomeCategoria}
                    onChange = {handleChange}
                />

                <FormField 
                    tag = 'input'
                    label ='Cor da Categoria: '
                    type ='color'
                    name ='cor'
                    value = {values.nomeCategoria}
                    onChange = {handleChange}
                />

                
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) =>{
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nomeCategoria}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">ir para Home</Link>
        </TemplatePage>
    )
}

export default CadastroCategoria