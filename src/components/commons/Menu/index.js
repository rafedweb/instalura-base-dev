import React from 'react';
import { Logo } from '../../../../theme/Logo';
import { MenuWrappper } from './styles/MenuWrapper'


const links = [
    {
        texto: 'Home',
        url: '/'
    },
    {
        texto: 'Perguntas frequentes',
        url: '/faq'
    },
    {
        texto: 'Sobre',
        url: '/sobre'
    }
]
export default function Menu(){
  return(
    <MenuWrappper>
      <MenuWrappper.LeftSide>
        <Logo />
      </MenuWrappper.LeftSide>
      <MenuWrappper.CentralSide>
        {links.map((link) => {
            return(<li>
                  <a href={link.url}>
                      {link.texto}
                  </a>
            </li>)
          }
        )}
      </MenuWrappper.CentralSide>
      <MenuWrappper.RightSide>
        <button>
            Entrar
        </button>
        <button>
            Cadastrar
        </button>
      </MenuWrappper.RightSide>
    </MenuWrappper>
  )
}