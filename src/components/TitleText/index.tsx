import './styles.scss';

import reactsvg from '../../assets/react.svg';
import jssvg from '../../assets/js.svg';
import tssvg from '../../assets/ts.svg';
import htmlsvg from '../../assets/html.svg';
import csssvg from '../../assets/css.svg';
import sasssvg from '../../assets/sass.svg';
import csvg from '../../assets/c.svg';
import unitysvg from '../../assets/unity.svg';
import blendersvg from '../../assets/blender.svg';
import photoshopsvg from '../../assets/photoshop.svg';
import gimpsvg from '../../assets/gimp.svg';
import linuxsvg from '../../assets/linux.svg';
import { useState } from 'react';

type AboutMeProps = {
  title: string;
  text?: string;
  textp?: string;
  textp1?: string;
  textp2?: string;
  textp3?: string;
  textp4?: string; 
  withoutIcons?: boolean;

}






export function TitleText({withoutIcons = false, ...props}: AboutMeProps){
  


  return (
    <>
     {withoutIcons 
     ?
    (
    <div className="Info">
      <h1 className="titleEffect">{props.title}</h1>
      <p className="paragraph">{props.text}</p>
      <p className="paragraph">{props.textp}</p>
      <p className="paragraph">{props.textp1}</p>
      <p className="paragraph">{props.textp2}</p>
      <p className="paragraph">{props.textp3}</p>
      <p className="paragraph">{props.textp4}</p>
      </div> 
      )

      :

      (
      <div className="Info">
      <h1 className="titleEffect">{props.title}</h1>
      <p className="paragraph">{props.text}</p>
      <p className="paragraph">{props.textp}</p>
      <p className="paragraph">{props.textp1}</p>
      <p className="paragraph">{props.textp2}</p>
      <p className="paragraph">{props.textp3}</p>
      <p className="paragraph">{props.textp4}</p>
    
     <footer className="icons">    

    <img className="icon" src={reactsvg} alt="" />
    <img className="icon" src={jssvg} alt="" />
    <img className="icon" src={tssvg} alt="" />
    <img className="icon" src={htmlsvg} alt="" />
    <img className="icon" src={csssvg} alt="" />
    <img className="icon" src={sasssvg} alt="" />
    <img className="icon" src={csvg} alt="" />  
    <img className="icon" src={unitysvg} alt="" />
    <img className="icon" src={blendersvg} alt="" />
    <img className="icon" src={photoshopsvg} alt="" />
    <img className="icon" src={linuxsvg} alt="" />

    </footer>         
    </div>  
    )
    } 
    </>
  );
}