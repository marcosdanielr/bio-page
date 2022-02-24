
import './styles.scss';

type AboutProjectProps = {
  aboutTitle: string;
  aboutImage?: string;
  aboutP: string;
  aboutP1?: string;
  aboutP2?: string;
  aboutP3?: string;
  videoUrl?: string;
  videoUrl2?: string;
  hasImg?: boolean;
  hasVideo?: boolean;
  hasVideo2?: boolean;
}

export function AboutProject({ hasImg = false, hasVideo = false, hasVideo2 = false, ...props }: AboutProjectProps){

return( 
<div className="aboutProjectContainer">
<h1 className="aboutprojectTitle">{props.aboutTitle}</h1>
{ hasImg &&
<img className="aboutImage" src={props.aboutImage} alt={props.aboutTitle} />
}
<p className="productPageAbout">{props.aboutP}</p>
<p className="productPageAbout">{props.aboutP1}</p>

{ hasVideo &&
<iframe src={props.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}

{ hasVideo2 &&
<iframe src={props.videoUrl2} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}


<p className="productPageAbout">{props.aboutP2}</p>
<p className="productPageAbout">{props.aboutP3}</p>
</div>
);
}
