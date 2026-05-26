import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaSortAmountDownAlt,
  FaThLarge,
  FaThList,
} from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import RelatedProduct from "@/components/product/related-product";
import ProductList from "@/components/product/list";
import Search from "@/components/search";
import CallToAction from "@/components/callToAction";
import { productSlug } from "@/lib/product";
import { toStorefrontProduct } from "@/lib/listing-format";

const filters = {
  all: (product) => product,
  sale: (product) => !product.rent && product.propertyType !== "Land",
  rent: (product) => product.rent,
  land: (product) => product.propertyType === "Land",
};

const statusFilters = {
  all: (product) => product,
  sale: (product) => !product.rent,
  rent: (product) => product.rent,
  featured: (product) => product.featured,
};

const pageLimit = 6;

const normalizeFilterValue = (value) => String(value).toLowerCase();
const formatFilterLabel = (value) =>
  String(value).replace(/\b\w/g, (letter) => letter.toUpperCase());

const buildFacetOptions = (products, getValues) => {
  const counts = products.reduce((accumulator, product) => {
    getValues(product).forEach((value) => {
      if (!value) {
        return;
      }

      const optionValue = normalizeFilterValue(value);
      const current = accumulator.get(optionValue) || {
        label: formatFilterLabel(value),
        value: optionValue,
        count: 0,
      };

      accumulator.set(optionValue, {
        ...current,
        count: current.count + 1,
      });
    });

    return accumulator;
  }, new Map());

  return [...counts.values()].sort((a, b) => a.label.localeCompare(b.label));
};

const SidebarFilterGroup = ({ title, options, selectedValue, onSelect }) => (
  <>
    <h4 className="ltn__widget-title">{title}</h4>
    <ul className="property-listing-check-list">
      {options.map((option) => (
        <li key={option.value} className={option.disabled ? "is-disabled" : ""}>
          <label className="checkbox-item">
            {option.label}
            <input
              type="checkbox"
              checked={selectedValue === option.value}
              disabled={option.disabled}
              onChange={() =>
                onSelect(
                  selectedValue === option.value && option.value !== "all"
                    ? "all"
                    : option.value
                )
              }
            />
            <span className="checkmark"></span>
          </label>
          <span className="categorey-no">{option.count}</span>
        </li>
      ))}
    </ul>
  </>
);

const PropertyListingPage = ({ title, currentSlug, filter = "all" }) => {
  const router = useRouter();
  const { products } = useSelector((state) => state.product);
  const [listingProducts, setListingProducts] = useState(products || []);
  const [isLoadingListings, setIsLoadingListings] = useState(false);
  const [listingError, setListingError] = useState("");
  const [query, setQuery] = useState("");
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [sort, setSort] = useState("default");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priceRangeFilter, setPriceRangeFilter] = useState("all");
  const [bedroomFilter, setBedroomFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [offset, setOffset] = useState(0);
  const routeSearch =
    typeof router.query.search === "string" ? router.query.search : "";

  const handleSearchQuery = useCallback((value) => {
    setOffset(0);
    setQuery(value);
  }, []);

  useEffect(() => {
    if (products?.length) {
      setListingProducts(products);
    }
  }, [products]);

  useEffect(() => {
    let active = true;

    async function loadListings() {
      setIsLoadingListings(true);
      setListingError("");

      try {
        const response = await fetch("/api/v1/listings?limit=100&status=active");
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Failed to load listings");
        }

        const liveListings = Array.isArray(payload.data)
          ? payload.data.map(toStorefrontProduct)
          : [];

        if (active) {
          setListingProducts(liveListings);
        }
      } catch (error) {
        console.error("Property listings fetch failed:", error);
        if (active) {
          setListingError("Listings could not load. Please call or WhatsApp Sammy Realty for current availability.");
          setListingProducts([]);
        }
      } finally {
        if (active) {
          setIsLoadingListings(false);
        }
      }
    }

    loadListings();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    setOffset(0);
    setQuery(routeSearch);
    setSearchFieldValue(routeSearch);
  }, [router.isReady, routeSearch]);

  const scopedProducts = useMemo(
    () => listingProducts.filter(filters[filter] || filters.all),
    [filter, listingProducts]
  );

  const typeOptions = useMemo(
    () => [
      {
        label: "All Types",
        value: "all",
        count: scopedProducts.length,
      },
      ...buildFacetOptions(scopedProducts, (product) => product.propertyTypes || []),
    ],
    [scopedProducts]
  );

  const priceRangeOptions = useMemo(
    () => [
      {
        label: "Any Budget",
        value: "all",
        count: scopedProducts.length,
      },
      ...buildFacetOptions(scopedProducts, (product) => product.priceRange || []),
    ],
    [scopedProducts]
  );

  const categoryOptions = useMemo(
    () => [
      {
        label: "All Categories",
        value: "all",
        count: scopedProducts.length,
      },
      ...buildFacetOptions(scopedProducts, (product) => product.category || []),
    ],
    [scopedProducts]
  );

  const statusOptions = useMemo(
    () =>
      [
        {
          label: "Any Status",
          value: "all",
          count: scopedProducts.length,
        },
        {
          label: "For Sale",
          value: "sale",
          count: scopedProducts.filter((product) => !product.rent).length,
        },
        {
          label: "For Rent",
          value: "rent",
          count: scopedProducts.filter((product) => product.rent).length,
        },
        {
          label: "Featured",
          value: "featured",
          count: scopedProducts.filter((product) => product.featured).length,
        },
      ].map((option) => ({
        ...option,
        disabled: option.value !== "all" && option.count === 0,
      })),
    [scopedProducts]
  );

  const bedroomOptions = useMemo(
    () =>
      [
        {
          label: "Any Bedrooms",
          value: "all",
          count: scopedProducts.length,
        },
        ...[1, 2, 3, 4].map((bedrooms) => ({
          label: `${bedrooms}+ ${bedrooms === 1 ? "Bedroom" : "Bedrooms"}`,
          value: String(bedrooms),
          count: scopedProducts.filter(
            (product) =>
              Number(product.propertyDetails?.bedrooms || 0) >= bedrooms
          ).length,
        })),
      ].map((option) => ({
        ...option,
        disabled: option.value !== "all" && option.count === 0,
      })),
    [scopedProducts]
  );

  const filteredProducts = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase();
    const searchedProducts = scopedProducts.filter((product) => {
      const matchesQuery = normalisedQuery
        ? [product.title, product.locantion, product.district]
            .filter(Boolean)
            .some((value) => value.toLowerCase().includes(normalisedQuery))
        : true;
      const matchesType =
        typeFilter === "all" ||
        (product.propertyTypes || []).some(
          (type) => normalizeFilterValue(type) === typeFilter
        );
      const matchesStatus = (statusFilters[statusFilter] || statusFilters.all)(
        product
      );
      const matchesPriceRange =
        priceRangeFilter === "all" ||
        (product.priceRange || []).some(
          (priceRange) => normalizeFilterValue(priceRange) === priceRangeFilter
        );
      const matchesBedrooms =
        bedroomFilter === "all" ||
        Number(product.propertyDetails?.bedrooms || 0) >= Number(bedroomFilter);
      const matchesCategory =
        categoryFilter === "all" ||
        (product.category || []).some(
          (category) => normalizeFilterValue(category) === categoryFilter
        );

      return (
        matchesQuery &&
        matchesType &&
        matchesStatus &&
        matchesPriceRange &&
        matchesBedrooms &&
        matchesCategory
      );
    });

    if (sort === "priceHighToLow") {
      return [...searchedProducts].sort((a, b) => b.price - a.price);
    }

    if (sort === "priceLowToHigh") {
      return [...searchedProducts].sort((a, b) => a.price - b.price);
    }

    return searchedProducts;
  }, [
    bedroomFilter,
    categoryFilter,
    priceRangeFilter,
    query,
    scopedProducts,
    sort,
    statusFilter,
    typeFilter,
  ]);

  const currentItems = filteredProducts.slice(offset, offset + pageLimit);
  const pageCount = Math.ceil(filteredProducts.length / pageLimit);

  useEffect(() => {
    if (offset >= filteredProducts.length) {
      setOffset(0);
    }
  }, [filteredProducts.length, offset]);

  const handlePageClick = (event) => {
    if (!filteredProducts.length) return;
    const nextOffset = (event.selected * pageLimit) % filteredProducts.length;
    setOffset(nextOffset);
  };

  const renderGrid = (baseUrl) => (
    <Row>
      {currentItems.map((product) => {
        const slug = product.slug || productSlug(product.title);

        return (
          <Col key={product.id} xs={12} sm={6} lg={6}>
            <RelatedProduct slug={slug} baseUrl={baseUrl} productData={product} />
          </Col>
        );
      })}
    </Row>
  );

  const renderList = (baseUrl) => (
    <Row>
      {currentItems.map((product) => {
        const slug = product.slug || productSlug(product.title);

        return (
          <Col key={product.id} xs={12}>
            <ProductList slug={slug} baseUrl={baseUrl} productData={product} />
          </Col>
        );
      })}
    </Row>
  );

  const baseUrl = filter === "land" ? "lands" : "properties";
  const resetFilters = () => {
    setOffset(0);
    setTypeFilter("all");
    setStatusFilter("all");
    setPriceRangeFilter("all");
    setBedroomFilter("all");
    setCategoryFilter("all");
    setQuery("");
    setSearchFieldValue("");
  };

  const updateSidebarFilter = (setter) => (value) => {
    setOffset(0);
    setter(value);
  };

  return (
    <LayoutOne topbar={false}>
      <ShopBreadCrumb title={title} sectionPace="" currentSlug={currentSlug} />

      <div className="ltn__product-area ltn__product-gutter mb-120">
        <Container>
          <Row className="g-4">
            <Col xs={12} lg={8} className="order-lg-2 mb-100">
              <Tab.Container defaultActiveKey="first">
                <div className="ltn__shop-options">
                  <ul className="property-listing-options justify-content-start">
                    <li>
                      <div className="ltn__grid-list-tab-menu">
                        <Nav className="nav">
                          <Nav.Link eventKey="first">
                            <FaThLarge />
                          </Nav.Link>
                          <Nav.Link eventKey="second">
                            <FaThList />
                          </Nav.Link>
                        </Nav>
                      </div>
                    </li>
                    <li>
                      <div className="showing-product-number text-right">
                        <span>{`Showing ${currentItems.length} of ${filteredProducts.length} listings`}</span>
                      </div>
                    </li>
                    <li className="property-listing-toolbar-actions">
                      <label className="property-listing-control">
                        <FaSortAmountDownAlt />
                        <span>Sort By</span>
                        <Form.Select
                          className="form-control nice-select"
                          value={sort}
                          onChange={(event) => {
                            setOffset(0);
                            setSort(event.target.value);
                          }}
                        >
                          <option value="default">Default</option>
                          <option value="priceHighToLow">Price - High to Low</option>
                          <option value="priceLowToHigh">Price - Low to High</option>
                        </Form.Select>
                      </label>
                    </li>
                  </ul>
                </div>

                {listingError ? (
                  <div className="alert alert-warning" role="alert">
                    {listingError}
                  </div>
                ) : null}

                {isLoadingListings ? (
                  <div className="alert alert-light" role="status">
                    Loading latest properties...
                  </div>
                ) : null}

                {!isLoadingListings && !filteredProducts.length ? (
                  <div className="alert alert-info" role="status">
                    No matching listings are available right now.{" "}
                    <a href="tel:+2348148414913">Call</a> or{" "}
                    <a href="https://wa.me/2348148414913" target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>{" "}
                    Sammy Realty for current options.
                  </div>
                ) : (
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                        {renderGrid(baseUrl)}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="ltn__product-tab-content-inner ltn__product-list-view">
                        {renderList(baseUrl)}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                )}
              </Tab.Container>

              {pageCount > 1 ? (
                <div className="ltn__pagination-area text-center">
                  <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    nextLabel={<FaAngleDoubleRight />}
                    previousLabel={<FaAngleDoubleLeft />}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination ltn__pagination justify-content-center"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                  />
                </div>
              ) : null}
            </Col>

            <Col xs={12} lg={4} className="mb-100">
              <aside className="sidebar ltn__shop-sidebar property-listing-sidebar">
                <h3 className="mb-10">Advance Information</h3>
                <label className="mb-30">
                  <small>{`About ${filteredProducts.length} matching listings`}</small>
                </label>

                <div className="widget ltn__menu-widget">
                  <h4 className="ltn__widget-title">Search</h4>
                  <Search
                    spaceBottom="mb-30"
                    initialValue={searchFieldValue}
                    setQuery={handleSearchQuery}
                  />

                  <SidebarFilterGroup
                    title="Property Type"
                    options={typeOptions}
                    selectedValue={typeFilter}
                    onSelect={updateSidebarFilter(setTypeFilter)}
                  />

                  <hr />

                  <SidebarFilterGroup
                    title="Property Status"
                    options={statusOptions}
                    selectedValue={statusFilter}
                    onSelect={updateSidebarFilter(setStatusFilter)}
                  />

                  <hr />

                  <SidebarFilterGroup
                    title="Price Range"
                    options={priceRangeOptions}
                    selectedValue={priceRangeFilter}
                    onSelect={updateSidebarFilter(setPriceRangeFilter)}
                  />

                  <hr />

                  <SidebarFilterGroup
                    title="Bed/bath"
                    options={bedroomOptions}
                    selectedValue={bedroomFilter}
                    onSelect={updateSidebarFilter(setBedroomFilter)}
                  />

                  <hr />

                  <SidebarFilterGroup
                    title="Category"
                    options={categoryOptions}
                    selectedValue={categoryFilter}
                    onSelect={updateSidebarFilter(setCategoryFilter)}
                  />

                  <button
                    className="btn btn-effect-3 btn-white text-uppercase property-listing-sidebar-reset"
                    type="button"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </button>
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default PropertyListingPage;
