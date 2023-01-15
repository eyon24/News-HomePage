import pic from "../images/image-web-3-mobile.jpg";
import "../css/CoverArticle.css";
import data from "../data/data.json";

const article = data.Cover;

const CoverArticle = () => {
  return (
    <div className="ca__container">
      <div className="ca__img__container">
        <img src={pic} alt="" />
      </div>
      <h1>{article.Title}</h1>
      <p>{article.Preview}</p>
      <div className="ca__button">
        <button>Read More</button>
      </div>
    </div>
  );
};

export default CoverArticle;
