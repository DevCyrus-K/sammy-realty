import { IoArrowDownOutline } from "react-icons/io5";

const LanguageDropDown = function () {
  return (
    <>
      <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
        <ul>
          <li>
            <a href="/contact" className="dropdown-toggle">
              <span className="active-currency">English</span>
              <span>
                <IoArrowDownOutline />
              </span>
            </a>
            <ul>
              <li>
                <a href="/contact">Arabic</a>
              </li>
              <li>
                <a href="/contact">Bengali</a>
              </li>
              <li>
                <a href="/contact">Chinese</a>
              </li>
              <li>
                <a href="/contact">English</a>
              </li>
              <li>
                <a href="/contact">French</a>
              </li>
              <li>
                <a href="/contact">Hindi</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LanguageDropDown;
