import { share_img } from "../../assets/assets";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="share-heading">
        <p>Share your setup with</p>
        <h1>#FuniroFurniture</h1>
      </div>
      <div className="share-items">
        <div className="share-items-left">
          <div className="share-left-top">
            <div>
              <img src={share_img.share_1} alt="" />
            </div>
            <div className="share-left-top-2">
              <img src={share_img.share_2} alt="" />
            </div>
          </div>
          <div className="share-left-bottom">
            <div>
              <img src={share_img.share_3} alt="" />
            </div>
            <div>
              <img src={share_img.share_4} alt="" />
            </div>
          </div>
        </div>

        <div className="share-items-center">
          <img src={share_img.share_5} alt="" />
        </div>

        <div className="share-items-right">
          <div className="share-right-top">
            <div className="share-right-top-1">
              <img src={share_img.share_6} alt="" />
            </div>
            <div>
              <img src={share_img.share_7} alt="" />
            </div>
          </div>
          <div className="share-right-bottom">
            <div>
              <img src={share_img.share_8} alt="" />
            </div>
            <div>
              <img src={share_img.share_9} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
