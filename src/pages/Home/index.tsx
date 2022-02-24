import { Avatar } from '../../components/Avatar';
import { Menu } from '../../components/Menu';


import './styles.scss';
import { TitleText } from '../../components/TitleText';

export function Home() {
  return (
    <div className="container">
      

    <div className="header">
    <Menu />
    </div> 
      <div className="body">


      <Avatar 
        avatar=""
        alt=""
      />
      
      <div className="about">
      <TitleText
        title="Sobre mim"
        text=""
        textp=""                 
      />

     
      </div>
      </div>
    </div>
  );
}