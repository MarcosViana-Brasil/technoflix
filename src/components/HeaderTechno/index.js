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
    /*
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
    */
   .Logo {
        max-width: 168px;
    }
    @media (max-width: 800px) {
        .Logo {
            max-width: 105px;
        }
    }

    .Menu {
        width: 100%;
        height: 94px;
        z-index: 100;

        display: flex;
        justify-content: space-between;
        align-items: center;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding-left: 5%;
        padding-right: 5%;

        background: var(--black);
        border-bottom: 2px solid var(--primary);
    }
    body {
        --bodyPaddingTop: 94px;
        padding-top: var(--bodyPaddingTop);
    }
    @media (max-width: 800px) {
        .Menu {
            height: 40px;
            justify-content: center;
        }
        body {
            --bodyPaddingTop: 40px;
            padding-top: var(--bodyPaddingTop);
        }
    }

    .ButtonLink {
        color: var(--white);
        border: 1px solid var(--white);
        box-sizing: border-box;
        cursor: pointer;
        padding: 16px 24px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        outline: none;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;
        transition: opacity .3s;
    }
    .ButtonLink:hover,
    .ButtonLink:focus {
        opacity: .5;
    }

    @media (max-width: 800px) {
        a.ButtonLink {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--primary);
            border-radius: 0;
            border: 0;
            text-align: center;
        }
    }
`;

export default HeaderTechno;