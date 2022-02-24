import { Menu } from '../../components/Menu';


import './styles.scss';
import { TitleText } from '../../components/TitleText';
import { Project } from '../../components/Project';





export function Projects() {
  return (
    <div className="container">
      
    <Menu />
      <div className="body">
        <TitleText 
        title="Projetos"
        withoutIcons        
        />

        <div className="myProjects">

        <Project 
          image=""
          title=""
          link="/"
        />

 
        <Project 
          image=""
          title=""
          link="" 
          hasLink
        />             

        </div>



      </div>
    </div>
  );
}