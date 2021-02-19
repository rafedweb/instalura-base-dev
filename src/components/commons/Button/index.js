import  styled, { css } from 'styled-components'
import get from 'lodash/get'

const ButtonGhost = css`
color: #FB7B6B;
background: transparent;
`;

const ButtonDefault = css`
color: white;
background-color: ${function(props){
    return get(props.theme, `colors.${props.variant}.color`)
}};
color: ${function(props){
    return get(props.theme, `colors.${props.variant}.contrastText`)
}};
`;

export const Button = styled.button`
border: 0;
cursor: pointer ;
padding: 12px 26px;
font-weight: bold;
opacity: 1;
border-radius: 8px;

${function(props){
    console.log('props', props);
    if(props.ghost){
        return ButtonGhost
    }
    return ButtonDefault;
}}
/* .::after..*/
&:hover,
&:focus {
    opacity: .5;
}
`;

