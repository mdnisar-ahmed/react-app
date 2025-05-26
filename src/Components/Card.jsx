import profilePic from '../assets/Headshot.png';
import '../index.css';

const Card = () => {
  return (
    <>
    <div className="card" >
    <img className="card card-image" src={profilePic}  alt="placeholder" />
  <h2> Nisar Code</h2>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</>
  )
}

export default Card