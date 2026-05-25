import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul>
          <li>
            <Link href="mailto:info@sammyrealty.com">
              <FaEnvelope />
              <i></i> info@sammyrealty.com
            </Link>
          </li>
          <li>
            <Link href="/map/all">
              <FaMapMarkerAlt />
              Greenville Estate, Ajah, Lagos, Nigeria
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderTopInfo;
