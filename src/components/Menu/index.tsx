
import { Link } from 'react-router-dom';
import './styles.scss';

export function Menu(){

  return (
    
    <div className="menu">
    <ul>
    <li><Link to="/">Sobre mim</Link></li> 
    <li><Link to="/projects">Projetos</Link></li> 
    <li><a href="#" target="_blank">GitHub</a></li> 
    <li><a href="#" target="_blank">Linkedin</a></li> 
    <li><a href="#" target="_blank">Youtube</a></li> 
    <li><a href="#" target="_blank">Contato</a></li>       
    </ul>
    </div>
    
  );

}