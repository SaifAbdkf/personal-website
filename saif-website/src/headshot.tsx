import { useNavigate } from 'react-router-dom'; // Import useNavigate
import pdp_small from '../assets/images/pdp_small.jpg'; // Your image path

export default function Headshot() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate("/"); // Navigate to the home page when the image is clicked
  };

  return (
    <img
      src={pdp_small}
      alt="Headshot"
      className="headshot" // Apply your styling class if necessary
      onClick={handleClick} // Add the click event handler
      style={{ cursor: "pointer" }} // Makes it clear that the image is clickable
    />
  );
}
