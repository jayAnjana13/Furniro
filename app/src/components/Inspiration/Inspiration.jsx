import { inspiration_img } from "../../assets/assets.js";
import "./inspiration.css";
const Inspiration = () => {
  return (
    <div className="inspiration">
      <div className="inspiration-items">
        <div className="inspiration-content-left">
          <h2>50+ Beutiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button>Explore More</button>
        </div>

        <div className="inspiration-content-center">
          <img src={inspiration_img.inspiration_1} alt="" />
        </div>

        <div className="inspiration-content-right">
          <img src={inspiration_img.inspiration_2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
