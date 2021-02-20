import { createGlobalStyle } from 'styled-components'
import {normalize} from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
${normalize}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`