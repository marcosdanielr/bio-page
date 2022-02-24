import "./styles.scss"

type AvatarProps = {
  avatar: string;
  alt: string;
}

export function Avatar({...props}: AvatarProps) {
  return (
    <div className="avatarDiv">
      <img className="avatar" src={props.avatar} alt={props.alt} />    
    </div>
  );
}

