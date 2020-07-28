import styled from 'styled-components'
import LogoTechno from '../LogoTechno'
import ButtonTechno from '../ButtonTechno'

const HeaderTechno = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;    
    background-color: var(--color-black-dark);
    border-bottom: 2px solid var(--color-gray-light);

    @media(max-width: 800px) {
        justify-content: center;
        padding: 15px 16px;
        & > ${LogoTechno} {
            height: 35px;
        }
        & > ${ButtonTechno} {
            background-color: var(--color-primary);
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100vw;
        }
    }
`;



export default HeaderTechno;