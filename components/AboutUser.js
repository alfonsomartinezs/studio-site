import Link from "next/link"

const AboutUser = ({imagePath,name,role}) => {
  return (
    <div className="about-user">
      <img src={imagePath} />
      <h3>{name}</h3>
      <p>{role}</p>
      <a className="social-icon" href="/"><img src="/assets/icon-linkedin.svg"></img></a>
      <a className="social-icon" href="/"><img src="/assets/icon-twitter.svg"></img></a>
    </div>
   );
}
 
export default AboutUser;