import { useState } from 'react';
import  './style.css';

export default function CampoTexto(props) {

  const [valor, setValor] = useState('');

  const dadosDigitados = (event) =>{
   props.aoAlterado(event.target.value);
    
  }
    return(
        <>
          <div className='campoTexto'>
               <label>{props.label}</label>
               <input  value={props.valor} onChange={dadosDigitados} required={props.obrigatorio} type='text' placeholder={`Digite o seu ${props.placeholder}`}/>  
          </div>  
        </>
    );
}