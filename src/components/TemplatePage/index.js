import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import HeadTechno from '../HeaderTechno'
import LogoTechno from '../LogoTechno'
import ButtonTechno from '../ButtonTechno'
import Footer from '../Footer'

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function TemplatePage({children}) {
    return (
        <>
          <HeadTechno>
            <LogoTechno />
            <ButtonTechno as={Link} to="cadastro/video">Novo vídeo</ButtonTechno>
          </HeadTechno>
          <Main>
            {children}
          </Main>
          <Footer />
        </>
    )
}

export default TemplatePage