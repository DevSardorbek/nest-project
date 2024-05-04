import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiSolidShoppingBag } from "react-icons/bi";
import "./singleRoute.css";
import axios from "../../api";
import star from "../../assets/star.png";
import liked from "../../assets/liked.png";
import lins from "../../assets/lins.png";
import singleCategory1 from "../../assets/singleCategoty1.png";
import singleCategory2 from "../../assets/singleCategoty2.png";
import singleCategory3 from "../../assets/singleCategoty3.png";
import singleCategory4 from "../../assets/singleCategoty4.png";
import singleCategory5 from "../../assets/singleCategoty5.png";
import line from "../../assets/line.png";
import fillLine from "../../assets/fillLine.png";
import fillbtn from "../../assets/fillbtn.png";
import prImg1 from "../../assets/prImg.png";
import prImg2 from "../../assets/prImg2.png";
import prImg3 from "../../assets/prImg3.png";
import Daily from "../../components/daily/Daily";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";

const SingleRoute = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }, [id]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  if (!product) {
    return <Loading />;
  }

  return (
    <>
      <div className="single_route">
        <div className="container">
          <div className="single_wrapper">
            <div className="single__card-items">
              <div className="single_card">
                <img
                  src={selectedImage || (product?.image && product.image)}
                  alt=""
                />

                <div className="single_card_info">
                  <button className="btn1">Sale Off</button>
                  <h1>{product?.category}</h1>
                  <div className="rating">
                    <img src={star} alt="" />
                    <p>({product?.rating?.rate}reviews)</p>
                  </div>
                  <div className="price">
                    <h2>${product?.price}</h2>
                    <div>
                      <article>26% Off</article>
                      <del>${product?.price + 100}</del>
                    </div>
                  </div>
                  {/* <h2>{product?.title}</h2> */}
                  <p>{product?.description}</p>
                  <div className="size">
                    <h3>Size / Weight:</h3>
                    <button>50g</button>
                    <button>60g</button>
                    <button>80g</button>
                    <button>100g</button>
                    <button>150g</button>
                  </div>
                  <div className="buy">
                    <input type="number" placeholder="1" />
                    <button>
                      <BiSolidShoppingBag />
                      <p>Add to cart</p>
                    </button>
                    <img src={liked} alt="" />
                    <img src={lins} alt="" />
                  </div>
                </div>
              </div>
              <div className="single__card-info">
                <div className="single__card-btn">
                  <button>Description</button>
                  <button>Additional info</button>
                  <button>Vendor</button>
                  <button>Reviews (3)</button>
                </div>
                <p>
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced Spluttered narrowly yikes left moth in yikes
                  bowed this that grizzly much hello on spoon-fed that alas
                  rethought much decently richly and wow against the frequent
                  fluidly at formidable acceptably flapped besides and much
                  circa far over the bucolically hey precarious goldfinch
                  mastodon goodness gnashed a jellyfish and one however because.
                </p>
                <div className="product_infoo">
                  <ul>
                    <li>Type Of Packing</li>
                    <li>Color</li>
                    <li>Quantity Per Case</li>
                    <li>Ethyl Alcohol</li>
                    <li>Piece In One</li>
                  </ul>
                  <div>
                    <p>Bottle</p>
                    <p>Green, Pink, Powder Blue, Purple</p>
                    <p>100ml</p>
                    <p>70%</p>
                    <p>Carton</p>
                  </div>
                </div>
                <p>
                  Laconic overheard dear woodchuck wow this outrageously taut
                  beaver hey hello far meadowlark imitatively egregiously hugged
                  that yikes minimally unanimous pouted flirtatiously as beaver
                  beheld above forward energetic across this jeepers
                  beneficently cockily less a the raucously that magic upheld
                  far so the this where crud then below after jeez enchanting
                  drunkenly more much wow callously irrespective limpet.
                </p>
                <div className="packaging">
                  <h2>Packaging & Delivery</h2>
                  <p>
                    Less lion goodness that euphemistically robin expeditiously
                    bluebird smugly scratched far while thus cackled sheepishly
                    rigid after due one assenting regarding censorious while
                    occasional or this more crane went more as this less much
                    amid overhung anathematic because much held one exuberantly
                    sheep goodness so where rat wry well concomitantly.
                  </p>
                  <p>
                    Scallop or far crud plain remarkably far by thus far iguana
                    lewd precociously and and less rattlesnake contrary caustic
                    wow this near alas and next and pled the yikes articulate
                    about as less cackled dalmatian in much less well jeering
                    for the thanks blindly sentimental whimpered less across
                    objectively fanciful grimaced wildly some wow and rose
                    jeepers outgrew lugubrious luridly irrationally attractively
                    dachshund.
                  </p>
                </div>
                <div className="suggested">
                  <h2>Suggested Use</h2>
                  <p>Refrigeration not necessary.</p>
                  <p>Stir before serving</p>
                </div>
                <div className="other">
                  <h2>Other Ingredients</h2>
                  <p>Organic raw pecans, organic raw cashews.</p>
                  <p>
                    This butter was produced using a LTG (Low Temperature
                    Grinding) process
                  </p>
                  <p>
                    Made in machinery that processes tree nuts but does not
                    process peanuts, gluten, dairy or soy
                  </p>
                </div>
                <div className="warnings">
                  <h2>Warnings</h2>
                  <p>
                    Oil sepssaration occurs naturally. May contain pieces of
                    shell.
                  </p>
                </div>
              </div>
            </div>
            <div className="single_categorys">
              <div className="single_category">
                <h2>Category</h2>
                <div className="lins">
                  <img src={line} alt="" />
                </div>
                <div className="single__category-card">
                  <div>
                    <img src={singleCategory1} alt="" />
                    <h3>Milks & Dairies</h3>
                  </div>
                  <span>5</span>
                </div>
                <div className="single__category-card">
                  <div>
                    <img src={singleCategory2} alt="" />
                    <h3>Clothing</h3>
                  </div>
                  <span>5</span>
                </div>
                <div className="single__category-card">
                  <div>
                    <img src={singleCategory3} alt="" />
                    <h3>Pet Foods</h3>
                  </div>
                  <span>7</span>
                </div>
                <div className="single__category-card">
                  <div>
                    <img src={singleCategory4} alt="" />
                    <h3>Baking material</h3>
                  </div>
                  <span>12</span>
                </div>
                <div className="single__category-card">
                  <div>
                    <img src={singleCategory5} alt="" />
                    <h3>Fresh Fruit</h3>
                  </div>
                  <span>16</span>
                </div>
              </div>
              <div className="fill_card">
                <h3>Fill by price</h3>
                <img src={line} alt="" />
                <div className="lins"></div>
                <img src={fillLine} alt="" />
                <div className="fill_price">
                  <p>
                    from: <span>$500</span>
                  </p>
                  <p>
                    To: <span>$1000</span>
                  </p>
                </div>
                <div className="fill_color">
                  <h4>Color</h4>
                  <label>
                    <input type="checkbox" />
                    Red(56)
                  </label>
                  <label>
                    <input type="checkbox" />
                    Green(78)
                  </label>
                  <label>
                    <input type="checkbox" />
                    Blue(54 )
                  </label>
                </div>
                <div className="fill_item">
                  <h4>Item Condition</h4>
                  <label>
                    <input type="checkbox" />
                    New (1506)
                  </label>
                  <label>
                    <input type="checkbox" />
                    Refurbished (27)
                  </label>
                  <label>
                    <input type="checkbox" />
                    Used (45)
                  </label>
                </div>
                <button>
                  <img src={fillbtn} alt="" />
                  Fillter
                </button>
              </div>
              <div className="new_products">
                <h3>New products</h3>
                <div className="new_line">
                  <img src={line} alt="" />
                </div>
                <div className="product">
                  <img src={prImg1} alt="" />
                  <div>
                    <h4>Chen Cardigan</h4>
                    <p>$99.50</p>
                    <img src={star} alt="" />
                  </div>
                </div>
                <div className="product">
                  <img src={prImg2} alt="" />
                  <div>
                    <h4>Chen Sweater</h4>
                    <p>$89.50</p>
                    <img src={star} alt="" />
                  </div>
                </div>
                <div className="product">
                  <img src={prImg3} alt="" />
                  <div>
                    <h4>Colorful Jacket</h4>
                    <p>$25</p>
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Daily />
      <Footer />
    </>
  );
};

export default SingleRoute;
