import Link from "next/link";
import { FaPlus } from "react-icons/fa";
const MenuList = ({ addListing }) => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li className="menu-icon">
        <Link href="/about">
          Company <FaPlus />
        </Link>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
        </ul>
      </li>
      <li className="menu-icon">
        <Link href="/service">
          Services <FaPlus />
        </Link>
        <ul>
          <li>
            <Link href="/service/property-sales">Property Sales</Link>
          </li>
          <li>
            <Link href="/service/property-management">Property Management</Link>
          </li>
          <li>
            <Link href="/service/real-estate-consulting">Real Estate Consulting</Link>
          </li>
          <li>
            <Link href="/service/rental-and-shortlets">Rental & Shortlets</Link>
          </li>
        </ul>
      </li>
      <li className="menu-icon">
        <Link href="/properties/all">
          Properties <FaPlus />
        </Link>
        <ul>
          <li>
            <Link href="/properties/all">All Properties</Link>
          </li>
          <li>
            <Link href="/properties/for-sale">For Sale</Link>
          </li>
          <li>
            <Link href="/properties/for-rent">For Rent</Link>
          </li>
          <li>
            <Link href="/lands/for-sale">Lands</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/faq">FAQs</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>

      {addListing ? (
        <li className="special-link">
          <Link href="/add-listing">Sell Your Property</Link>
        </li>
      ) : null}
    </ul>
  );
};

export default MenuList;
