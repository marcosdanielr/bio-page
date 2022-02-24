import { AboutProject } from '../../../components/AboutProject';
import { Menu } from '../../../components/Menu';
import './styles.scss';

export function ProjectInfo() {
  return (
    <div className="container">
      
    <Menu />
      <div className="body">


        <div className="projectPage">

          <AboutProject           
          aboutTitle=""          
          aboutP=""          
          
          videoUrl=""
          videoUrl2=""
          
          hasImg
          hasVideo
          hasVideo2          
          />        

        </div>

      </div>
    </div>
  );
}