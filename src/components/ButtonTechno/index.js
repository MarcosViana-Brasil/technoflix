import styled from 'styled-components'

const ButtonTechno = styled.button`
/*
    padding: 14px 35px;    
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    border: 1px solid var(--color-gray-light);
    border-radius: 4px;
    font-size: 18rem;
    cursor: pointer;
*/
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;    
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    cursor: pointer;
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default ButtonTechno;