import {FaArrowUp} from "react-icons/fa";
import "./Footer.css";

function Footer({handleScrollToTop}) {
  return (
    <div className="footer">
      <p className="copyright">Copyright {new Date().getFullYear()}</p>
      <button className="return-to-top-arrow" onClick={handleScrollToTop}>
        <FaArrowUp size={25} />
      </button>
    </div>
  );
}

export default Footer;
