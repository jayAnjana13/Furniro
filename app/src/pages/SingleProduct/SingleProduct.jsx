import { assets, single_product } from "../../assets/assets";
import "./singleProduct.css";

const SingleProduct = () => {
  return (
    <div className="single-product">
      <div className="single-product-top">
        <div className="single-product-top-icons">
          <p>Home</p>
         
        </div>
        <div className="single-product-top-icons">
          <p>Shop</p>
         
        </div>
        <div className="single-product-top-icons" id="single-product-item">
          Asgaard sofa
        </div>
      </div>

      {/* Product details */}

      <div className="single-product-content">
        <div className="single-product-contents">
          <div className="sp-images">
            <div className="sp-side-images">
              <img src={single_product.side_img_1} alt="" />
              <img src={single_product.side_img_2} alt="" />
              <img src={single_product.side_img_3} alt="" />
              <img src={single_product.side_img_4} alt="" />
            </div>
            <div className="sp-main-image">
              <img src={single_product.sp_image} alt="" />
            </div>
          </div>

          <div className="sp-details">
            <h2>Asgaard sofa</h2>
            <p className="sp-price">Rs. 250,000.00</p>

            <div className="sp-rating">
              <img src={single_product.rating_stars} alt="" />
              <div className="sp-reviews">5 Customer Review</div>
            </div>

            <div className="sp-description">
              <p>
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
            </div>

            <div>
              <p>Size</p>
              <div style={{ display: "flex", gap: "20px" }}>
                <div>L</div>
                <div>XL</div>
                <div>XS</div>
              </div>
            </div>

            <div>
              <p>Color</p>
              <div style={{ display: "flex", gap: "20px" }}>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    backgroundColor: "#816DFA",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    backgroundColor: "#000000",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    backgroundColor: "#B88E2F",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            </div>

            <div className="sp-buttons">
              <div className="sp-qty-btn">
                <div className="sp-decrese-btn">-</div>
                <div className="sp-qty">1</div>
                <div className="sp-decrese-btn">+</div>
              </div>

              <div className="sp-add-to-cart-btn">Add to Cart</div>

              <div className="sp-compare-btn">+ Compare</div>
            </div>
            <hr style={{ margin: "20px" }} />

            <div className="sp-details-bottom">
              <div className="sp-bottom-keys">
                <ul>
                  <li>SKU</li>
                  <li>Categories</li>
                  <li>Tags</li>
                  <li>SKU</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>:</li>
                  <li>:</li>
                  <li>:</li>
                  <li>:</li>
                </ul>
              </div>
              <div className="sp-bottom-values">
                <ul>
                  <li> SS001</li>
                  <li> Sofa</li>
                  <li> Sofa, Chair, Home, Shop</li>
                  <li>
                    <div style={{ gap: "20px" }}>
                      <img src={single_product.facebook_icon} alt="" />
                      <img src={single_product.linkedin_icon} alt="" />
                      <img src={single_product.twitter_icon} alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product description */}
      <div className="sp-body">
        <div style={{ display: "flex", gap: "30px" }}>
          <div style={{ color: "#000000" }}>
            <h3>Description</h3>
          </div>
          <div style={{ color: "#9f9f9f" }}>
            <h3>Additional Information</h3>
          </div>
          <div style={{ color: "#9f9f9f" }}>
            <h3>Reviews [5]</h3>
          </div>
        </div>

        <div className="sp-body-para">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        <div className="sp-body-images">
          <div className="sp-body-img">
            <img src={single_product.description_img_1} alt="" />
          </div>
          <div className="sp-body-img">
            <img src={single_product.description_img_2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
