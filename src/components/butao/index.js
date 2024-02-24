import './style.css';

export default function Butao(props){
    return(
      <div className='area-butao'>
          <button>{props.children}</button>
      </div>
    );
}