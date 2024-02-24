import './style.css';
import CampoTexto from '../campoTexto';
import ListaSuspensa from '../listaSuspensa';
import Butao from '../butao';
import { useState } from 'react';



export default function Formulario(props) {


    const teams = [
        'Selecione uma opção',
        'fogo',
        'agua',
        'terra',
        'vento',
    ]


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    function salvarDados(event) {
        event.preventDefault()
       props.aoNovoPokemon({
        nome,
        cargo,
        imagem,
        time
       })
    }

    return (
        <>
            <section className='formulario'>
                <form onSubmit={salvarDados}>
                    <CampoTexto
                        obrigatorio={true}
                        label="Nome"
                        placeholder="nome"
                        aoAlterado={valor => setNome(valor)}
                        valor={nome}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="Cargo"
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="imagem"
                        placeholder="imagem"
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}

                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label="tipos"
                        itens={teams}
                        valor={time}
                        aoAlterado={valor =>setTime(valor)}
                    />
                    <Butao>
                        Enviar
                    </Butao>
                </form>
            </section>
        </>
    );
}