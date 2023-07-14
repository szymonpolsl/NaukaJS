import styled from "styled-components"

export const DefaultButton = styled.button<{kolor?: string}>`
background-color:  ${(props) => (props.kolor && 'red') || '#645cfc'};
border: none;
padding: 5px;
color: var(--primary-color);
width: 150px;
`

export const Form = styled.form`
    display: flex;
    flex-direction:column;
    gap: 5px;
    height: 30px;
`

export const ExtendedButton = styled(DefaultButton)<{kolor?: string}>`
display: block;
width: 100vw;
`
