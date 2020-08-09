/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplatePage from '../../../components/TemplatePage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    nomeCategoria: '',
    descricaoCategoria: '',
    corCategoria: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('Hello world...');
    const URL = 'http://localhost:8000/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <TemplatePage>
      <h1>
        Cadastro de Categoria:
        {values.nomeCategoria}
      </h1>
      <form onSubmit = {function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        if (values.nomeCategoria !== '') {
          setCategorias([
            ...categorias,
            values,
          ]);
          setValues(initialValues);
        }
      }}
      >

        <FormField
          label = "Nome da Categoria: "
          type = "text"
          name = "nomeCategoria"
          value = {values.nomeCategoria}
          onChange = {handleChange}
        />

        <FormField
          label = "Descrição : "
          type = "textarea"
          name = "descricaoCategoria"
          value = {values.descricaoCategoria}
          onChange = {handleChange}
        />

        <FormField
          label = "Cor da Categoria: "
          type = "color"
          name = "corCategoria"
          value = {values.corCategoria}
          onChange = {handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key = {`${categoria.nomeCategoria}`}>
            {categoria.nomeCategoria}
          </li>
        ))}
      </ul>

      <Link to = "/">ir para Home</Link>
    </TemplatePage>
  );
}

export default CadastroCategoria;
