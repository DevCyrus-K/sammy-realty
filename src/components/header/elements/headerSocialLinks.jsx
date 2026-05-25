import Link from 'next/link';

import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
const HeaderSocialLinks = function () {
  return (
    <div className="ltn__social-media">
      <ul>
        <li>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" title="TikTok">
            <FaTiktok />
          </Link>
        </li>
        <li>
          <Link href="https://wa.me/2348148414913" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <FaWhatsapp />
          </Link>
        </li>
      </ul>
    </div>
  );
};


export default HeaderSocialLinks;
