import './styles.scss';

import { Link } from 'react-router-dom';

type ProjectProps = {
  image: string;
  title: string;
  link: string;
  hasLink?: boolean;
}

export function Project({ hasLink = false, ...props}: ProjectProps){

  return (
    <>
    { hasLink ? 
    (
    <div className="projects">    
    <div>
    <a href={props.link} target="_blank">
    <img className="project" src={props.image} alt={props.title} />
    </a>
    </div>
    <a href={props.link} target="_blank" className="projectTitle">{props.title}</a>
    </div>
    ) :
    (
    <div className="projects">    
    <div>
    <Link to={props.link}>
    <img className="project" src={props.image} alt={props.title} />
    </Link>
    </div>
    <Link to={props.link} className="projectTitle">{props.title}</Link>
    </div>
    )

}
    </>
  );

}