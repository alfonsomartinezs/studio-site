import Link from "next/link"
import LinkedinIcon from "./LinkedinIcon";
import TwitterIcon from "./TwitterIcon";

const AboutUser = ({ imagePath, name, role, clipClass }) => {
  console.log(clipClass)
  return (
    <div className="about-user">
      <img src={imagePath} className={clipClass} alt={`a picture of ${name}`}/>
      <h3>{name}</h3>
      <p>{role}</p>
      <a className="social-icon" href="/"><LinkedinIcon/></a>
      <a className="social-icon" href="/"><TwitterIcon/></a>
    </div>
   );
}
 
export default AboutUser;