import { useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaSearch, FaExclamationCircle, FaHome, FaDoorOpen, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { productSlug } from "@/lib/product";
import { formatPrice } from "@/lib/utils";
import { getPropertyImageSrc } from "@/lib/listing-format";

function PropertySearchBar() {
  const router = useRouter();
  const { products } = useSelector((state) => state.product);
  const propertyTypeDropdownRef = useRef(null);
  const [searchType, setSearchType] = useState("buy");
  const [propertyType, setPropertyType] = useState("all");
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const propertyTypes = useMemo(() => {
    const types = products.flatMap((product) => product.propertyTypes || []);
    return [...new Set(types)].sort();
  }, [products]);

  const propertyTypeOptions = useMemo(
    () => [
      { label: "Property Type", value: "all" },
      ...propertyTypes.map((type) => ({
        label: type,
        value: type.toLowerCase(),
      })),
    ],
    [propertyTypes]
  );

  const selectedPropertyType =
    propertyTypeOptions.find((option) => option.value === propertyType) ||
    propertyTypeOptions[0];

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      setSearchResults([]);
      setShowResults(false);
      setIsLoading(false);
      return undefined;
    }

    setIsLoading(true);
    setShowResults(true);

    const timeout = setTimeout(() => {
      const filtered = products.filter((product) => {
        const matchesStatus = searchType === "rent" ? product.rent : !product.rent;
        const matchesType =
          propertyType === "all" ||
          (product.propertyTypes || []).some(
            (type) => type.toLowerCase() === propertyType
          );
        const matchesSearch = [
          product.title,
          product.locantion,
          product.district,
          ...(product.propertyTypes || []),
        ]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(search));

        return matchesStatus && matchesType && matchesSearch;
      });

      setSearchResults(filtered.slice(0, 3));
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, [products, propertyType, query, searchType]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        propertyTypeDropdownRef.current &&
        !propertyTypeDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handlePropertyTypeSelect = (value) => {
    setPropertyType(value);
    setDropdownOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const search = query.trim();
    const pathname =
      searchType === "rent" ? "/properties/for-rent" : "/properties/for-sale";

    router.push({
      pathname,
      query: search ? { search } : {},
    });

    setShowResults(false);
  };

  const SkeletonLoader = () => (
    <div style={{ padding: '12px 16px', borderBottom: '1px solid #eee', display: 'flex', gap: '12px' }}>
      <div style={{ width: '80px', height: '80px', backgroundColor: '#e0e0e0', borderRadius: '4px', animation: 'pulse 1.5s infinite' }}></div>
      <div style={{ flex: 1 }}>
        <div style={{ height: '12px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '8px', animation: 'pulse 1.5s infinite' }}></div>
        <div style={{ height: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px', width: '60%', animation: 'pulse 1.5s infinite' }}></div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        .property-search-wrapper {
          background: transparent;
          position: relative;
          margin-top: -72px;
          margin-bottom: -64px;
          padding: 0;
          z-index: 100;
        }
        .property-search-card {
          max-width: 980px;
          margin: 0 auto;
          padding: 26px;
          background: #fff;
          border: 1px solid rgba(11, 93, 59, 0.16);
          border-top: 4px solid #0B5D3B;
          box-shadow: 0 18px 45px rgba(15, 38, 28, 0.16);
          position: relative;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .search-results-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #ddd;
          border-top: none;
          max-height: 500px;
          overflow-y: auto;
          z-index: 2000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .search-result-item {
          padding: 12px 16px;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: background-color 0.2s;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .search-result-item:hover {
          background-color: #f9f9f9;
        }
        .search-result-image {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
          flex-shrink: 0;
        }
        .search-result-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .search-result-title {
          font-weight: 600;
          color: #333;
          margin-bottom: 4px;
          font-size: 14px;
          order: 1;
        }
        .search-result-location {
          font-size: 12px;
          color: #666;
          order: 2;
          margin-bottom: 4px;
        }
        .search-result-price {
          font-size: 13px;
          color: #0B5D3B;
          font-weight: 600;
          order: 3;
        }
        .search-result-button {
          padding: 8px 16px;
          background-color: #0B5D3B;
          color: white;
          border: none;
          border-radius: 0px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
          font-weight: 600;
        }
        .search-result-button:hover {
          background-color: #084630;
          text-decoration: none;
          color: white;
        }
        .no-results-message {
          padding: 40px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .no-results-icon {
          font-size: 48px;
          color: #ddd;
        }
        .no-results-text {
          color: #666;
          font-size: 14px;
        }
        .search-bar-buttons {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
          justify-content: flex-start;
        }
        .search-bar-button {
          padding: 10px 18px;
          border: 1px solid rgba(11, 93, 59, 0.35);
          background-color: transparent;
          color: #0B5D3B;
          font-weight: 600;
          cursor: pointer;
          border-radius: 0px;
          transition: all 0.3s;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
        }
        .search-bar-button:hover {
          background-color: transparent;
          border-color: #0B5D3B;
          color: #0B5D3B;
        }
        .search-bar-button.active {
          background-color: transparent;
          color: #0B5D3B;
          border-color: #0B5D3B;
          box-shadow: inset 0 -3px 0 #0B5D3B;
        }
        .search-form-wrapper {
          display: flex;
          gap: 0;
          align-items: stretch;
        }
        .search-form-wrapper .form-item {
          flex: 1;
          margin-bottom: 0;
        }
        .search-form-wrapper .search-location-item {
          flex: 2.5;
        }
        .search-location-item {
          position: relative;
        }
        .search-location-field {
          position: relative;
        }
        .search-location-field svg {
          position: absolute;
          top: 50%;
          left: 20px;
          transform: translateY(-50%);
          color: #0B5D3B;
          z-index: 2;
        }
        .search-location-field input,
        .property-type-button {
          width: 100%;
          height: 60px;
          margin-bottom: 0;
          border-radius: 0;
          border: 1px solid #ddd;
          background-color: #f8f8f8;
          color: #333;
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          line-height: 1;
        }
        .search-location-field input {
          padding: 0 18px 0 50px;
        }
        .property-type-wrapper {
          position: relative;
          padding: 0;
        }
        .property-type-button {
          border-left: 0;
          padding: 0 16px 0 18px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          text-align: left;
          transition: border-color 0.2s, background-color 0.2s, color 0.2s;
        }
        .property-type-button:hover,
        .property-type-button.open {
          background-color: #fff;
          border-color: rgba(11, 93, 59, 0.45);
          color: #0B5D3B;
        }
        .property-type-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }
        .property-type-label svg {
          color: #0B5D3B;
          flex-shrink: 0;
        }
        .property-type-label span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .property-type-icon {
          color: #0B5D3B;
          font-size: 14px;
          display: inline-flex;
          flex-shrink: 0;
        }
        .property-type-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          padding: 8px;
          background: #fff;
          border: 1px solid rgba(11, 93, 59, 0.18);
          box-shadow: 0 16px 30px rgba(15, 38, 28, 0.14);
          z-index: 2200;
          max-height: 260px;
          overflow-y: auto;
        }
        .property-type-option {
          width: 100%;
          min-height: 44px;
          padding: 0 12px;
          border: 0;
          background: transparent;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
          transition: background-color 0.2s, color 0.2s;
        }
        .property-type-option:hover {
          background: rgba(11, 93, 59, 0.08);
          color: #0B5D3B;
        }
        .property-type-option.selected {
          background: #0B5D3B;
          color: #fff;
        }
        .property-type-option-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          flex-shrink: 0;
        }
        .search-form .btn {
          width: 100%;
          height: 60px;
          border-radius: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .search-form .search-results-dropdown {
          top: 60px;
          border-top: 1px solid #ddd;
        }
        .search-results-view-all {
          padding: 12px 16px;
          border-top: 1px solid #eee;
          text-align: center;
        }
        .search-results-view-all a {
          color: #0B5D3B;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s;
        }
        .search-results-view-all a:hover {
          text-decoration: underline;
        }
        @media (max-width: 767px) {
          .property-search-wrapper {
            margin-top: -44px;
            margin-bottom: -34px;
          }
          .property-search-card {
            padding: 18px;
          }
          .search-bar-buttons {
            margin-bottom: 8px;
          }
          .search-bar-button {
            padding: 10px 16px;
            font-size: 13px;
          }
          .search-location-field input,
          .property-type-button,
          .search-form .btn {
            height: 52px;
            font-size: 14px;
          }
          .search-form-wrapper {
            flex-direction: column;
          }
          .property-type-button {
            border-left: 1px solid #ddd;
            border-top: 0;
          }
          .property-type-menu {
            top: calc(100% + 6px);
          }
          .search-form .search-results-dropdown {
            top: 52px;
          }
        }
      `}</style>

      <section className="property-search-wrapper" aria-label="Property search">
        <Container>
          <Row>
            <Col xs={12} className="align-self-center">
              <div className="property-search-card">
                <div className="search-bar-buttons">
                  <button
                    type="button"
                    className={`search-bar-button ${searchType === "buy" ? "active" : ""}`}
                    onClick={() => setSearchType("buy")}
                  >
                    <FaHome />
                    Buy Property
                  </button>
                  <button
                    type="button"
                    className={`search-bar-button ${searchType === "rent" ? "active" : ""}`}
                    onClick={() => setSearchType("rent")}
                  >
                    <FaDoorOpen />
                    Rent Property
                  </button>
                </div>

                <div>
                  <form
                    action="#"
                    className="search-form-wrapper search-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-item search-location-item">
                      <div className="search-location-field">
                        <FaMapMarkerAlt />
                        <input
                          type="text"
                          value={query}
                          onChange={handleSearchChange}
                          placeholder="Search properties, location or type"
                        />
                      </div>

                      {showResults && (
                        <div className="search-results-dropdown">
                          {isLoading ? (
                            <>
                              <SkeletonLoader />
                              <SkeletonLoader />
                              <SkeletonLoader />
                            </>
                          ) : searchResults.length > 0 ? (
                            <>
                              {searchResults.map((result) => {
                                const slug = result.slug || productSlug(result.title);
                                const priceLabel = result.rent ? "per month" : "";
                                return (
                                  <div key={result.id} className="search-result-item">
                                    <img
                                      src={getPropertyImageSrc(result.image || result.productImg)}
                                      alt={result.title}
                                      className="search-result-image"
                                      onError={(event) => {
                                        event.currentTarget.src = "/img/product-3/1.jpg";
                                      }}
                                    />
                                    <div className="search-result-content">
                                      <div className="search-result-title">{result.title}</div>
                                      <div className="search-result-location">{result.locantion || result.district || "Lagos"}</div>
                                      <div className="search-result-price">{formatPrice(Number(result.price || 0))} {priceLabel}</div>
                                    </div>
                                    <Link href={`/properties/${slug}`} className="search-result-button">
                                      View Details
                                    </Link>
                                  </div>
                                );
                              })}
                              <div className="search-results-view-all">
                                <Link href={searchType === "rent" ? "/properties/for-rent" : "/properties/for-sale"}>
                                  View All Properties
                                </Link>
                              </div>
                            </>
                          ) : (
                            <div className="no-results-message">
                              <FaExclamationCircle className="no-results-icon" />
                              <div className="no-results-text">No properties found</div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div
                      className="form-item property-type-wrapper"
                      ref={propertyTypeDropdownRef}
                    >
                      <button
                        type="button"
                        className={`property-type-button ${dropdownOpen ? "open" : ""}`}
                        aria-haspopup="listbox"
                        aria-expanded={dropdownOpen}
                        onClick={() => setDropdownOpen((isOpen) => !isOpen)}
                      >
                        <span className="property-type-label">
                          <FaHome />
                          <span>{selectedPropertyType.label}</span>
                        </span>
                        <span className="property-type-icon">
                          {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      </button>

                      {dropdownOpen && (
                        <div className="property-type-menu" role="listbox">
                          {propertyTypeOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              className={`property-type-option ${
                                propertyType === option.value ? "selected" : ""
                              }`}
                              role="option"
                              aria-selected={propertyType === option.value}
                              onClick={() => handlePropertyTypeSelect(option.value)}
                            >
                              <span>{option.label}</span>
                              <span className="property-type-option-dot" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="form-item">
                      <div className="btn-wrapper text-center mt-0">
                        <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">
                          <FaSearch />
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PropertySearchBar;
