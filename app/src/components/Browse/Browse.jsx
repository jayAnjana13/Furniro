import { assets } from "../../assets/assets.js";
import "./browse.css";

const Browse = () => {
  return (
    <div className="browse">
      <h1>Browse The Range</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, debitis!
      </p>
      <div className="browse-content">
        <div className="browse-content-item">
          <img src={assets.dining_img} alt="" />
          <p>Dining</p>
        </div>
        <div className="browse-content-item">
          <img src={assets.living_img} alt="" />
          <p>Living</p>
        </div>
        <div className="browse-content-item">
          <img src={assets.bedroom_img} alt="" />
          <p>Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
