import { IMenu } from "../types/menu-d-t";


const menu_data:IMenu[] = [
  {
    id:1,
    link:'/',
    title:'Home',
  },
  {
    id:2,
    link:'/servicios-factoring',
    title:'Liquidez para tu empresa',
  },
  {
    id:3,
    link:'/',
    title:'Blog',
     dropdown:true,
     dropdown_menus:[
       {link:'/blog-factoring/1',title:'Descifrando el Factoring'},
       {link:'/blog-factoring/2',title:'Cómo mejorar la liquidez empresarial'}
    ]
  },
  {
    id:4,
    link:'/contacto',
    title:'Contáctanos'
  }
]

export default menu_data;