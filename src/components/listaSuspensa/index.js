import './style.css'


export default function ListaSuspensa(props) {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label><br />

            <select
                onChange={event => props.aoAlterado(event.target.value)}
                required={props.required}
                value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>

        </div>
    )
}