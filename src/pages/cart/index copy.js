import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
} from "@/store/slices/cart-slice";
import { getDiscountPrice, cartItemStock, productSlug } from "@/lib/product";
import Link from "next/link";

const Cart = () => {
  const [quantityCount] = useState(1);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;

  
  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}
        <ShopBreadCrumb title="Cart" sectionPace="" currentSlug="Cart" />
        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- SHOPING CART AREA START --> */}
        {/* <div className="liton__shoping-cart-area mb-120">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-12">
                  <div className="shoping-cart-inner">
                    <div className="shoping-cart-table table-responsive">
                      <table className="table">
                        <tbody>
                          {cartItems.map((product, key) => {
                            let imageCount = key + 1;
                            const slug = productSlug(product.title);
                            const discountedPrice = getDiscountPrice(
                              product.price,
                              product.discount
                            ).toFixed(2);

                            cartTotalPrice +=
                              discountedPrice * product.quantity;
                            return (
                              <tr key={key}>
                                <td className="cart-product-remove">
                                  <span
                                    onClick={() =>
                                      dispatch(
                                        deleteFromCart(product.cartItemId)
                                      )
                                    }
                                  >
                                    x
                                  </span>
                                </td>
                                <td className="cart-product-image">
                                  <Link href={`/shop/${slug}`}>
                                    <img
                                      src={`/img/product/${imageCount}.png`}
                                      alt="#"
                                    />
                                  </Link>
                                </td>
                                <td className="cart-product-info">
                                  <h4>
                                    <Link href={`/shop/${slug}`}>
                                      {product.title}
                                    </Link>
                                  </h4>
                                </td>
                                <td className="cart-product-price">
                                  ${discountedPrice}
                                </td>
                                <td className="cart-product-quantity">
                                  <div className="cart-plus-minus">
                                    <button
                                      onClick={() =>
                                        dispatch(decreaseQuantity(product))
                                      }
                                      className="qtybutton"
                                    >
                                      -
                                    </button>
                                    <input
                                      value={product.quantity}
                                      readOnly
                                      name="qtybutton"
                                      className="cart-plus-minus-box"
                                    />
                                    <button
                                      onClick={() =>
                                        dispatch(
                                          addToCart({
                                            ...product,
                                            quantity: quantityCount,
                                          })
                                        )
                                      }
                                      className="qtybutton"
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className="cart-product-subtotal">
                                  $
                                  {(discountedPrice * product.quantity).toFixed(
                                    2
                                  )}
                                </td>
                              </tr>
                            );
                          })}

                          <tr className="cart-coupon-row">
                            <td colSpan="6">
                              <div className="cart-coupon">
                                <input
                                  type="text"
                                  name="cart-coupon"
                                  placeholder="Coupon code"
                                />
                                <button
                                  type="submit"
                                  className="btn theme-btn-2 btn-effect-2"
                                >
                                  Apply Coupon
                                </button>
                              </div>
                            </td>
                            <td>
                              <button
                                type="submit"
                                onClick={() => dispatch(deleteAllFromCart())}
                                className="btn theme-btn-2 btn-effect-2"
                              >
                                Clear
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="shoping-cart-total mt-50">
                      <h4>Cart Totals</h4>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Cart Subtotal</td>
                            <td>${cartTotalPrice.toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>Shipping and Handing</td>
                            <td>${cartTotalPrice.toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>Vat</td>
                            <td> ${cartTotalPrice.toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Order Total</strong>
                            </td>
                            <td>
                              <strong>${cartTotalPrice.toFixed(2)}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="btn-wrapper text-right">
                        <Link
                          href="/checkout"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          Proceed to checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p>No items found in cart</p>
                <Link
                  href="/shop"
                  className="theme-btn-1 btn btn-effect-1"
                >
                  Shop Now
                </Link>
              </div>
            )}
          </div>
        </div> */}


<div className="cart-content space-pt--r100 space-pb--r100">
        <Container>
        <>
              <Row>
                <Col lg={12}>
                  <div className="table-responsive shop-cart-table">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">&nbsp;</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove text-center">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((product, key) => {
                          const discountedPrice = getDiscountPrice(
                            product.price,
                            product.discount
                          ).toFixed(2);

                          cartTotalPrice += discountedPrice * product.quantity;
                          return (
                            <tr key={key}>
                              <td className="product-thumbnail">
                                {/* <Link href={"/shop/product-basic/" + product.slug}>
                                  <img
                                    src={product.thumbImage[0]}
                                    alt="product1"
                                  />
                                </Link> */}
                              </td>
                              <td className="product-name" data-title="Product">
                                {/* <Link href={"/shop/product-basic/" + product.slug}>
                                  {product.name}
                                </Link>
                                {product.selectedProductColor &&
                                product.selectedProductSize ? (
                                  <div className="cart-variation">
                                    <p>Color: {product.selectedProductColor}</p>
                                    <p>Size: {product.selectedProductSize}</p>
                                  </div>
                                ) : (
                                  ""
                                )} */}
                              </td>
                              <td className="product-price" data-title="Price">
                                ${discountedPrice}
                              </td>
                              <td
                                className="product-quantity"
                                data-title="Quantity"
                              >
                                <div className="cart-plus-minus">
                                  <button
                                    onClick={() =>
                                      dispatch(decreaseQuantity(product))
                                    }
                                    className="qtybutton"
                                  >
                                    -
                                  </button>
                                  <input
                                    className="cart-plus-minus-box"
                                    type="text"
                                    value={product.quantity}
                                    readOnly
                                  />
                                  <button
                                    onClick={() =>
                                      dispatch(addToCart({
                                        ...product,
                                        quantity: quantityCount
                                      }))
                                    }
                                    // disabled={
                                    //   product !== undefined &&
                                    //   product.quantity &&
                                    //   product.quantity >=
                                    //     cartItemStock(
                                    //       product,
                                    //       product.selectedProductColor,
                                    //       product.selectedProductSize
                                    //     )
                                    // }
                                    className="qtybutton"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td
                                className="product-subtotal"
                                data-title="Total"
                              >
                                $
                                {(discountedPrice * product.quantity).toFixed(
                                  2
                                )}
                              </td>
                              <td className="product-remove">
                                <button
                                  onClick={() =>
                                    dispatch(deleteFromCart(product.cartItemId))
                                  }
                                >
                                  {/* <IoIosClose /> */}
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="6" className="px-0 pb-0">
                            <Row className="gx-0 align-items-center">
                              <Col lg={4} md={6} className="mb-3 mb-md-0">
                                <div className="coupon field-form input-group">
                                  <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Enter Coupon Code.."
                                  />
                                  <button
                                    className="input-group-text btn btn-fill-out btn-sm"
                                    type="submit"
                                  >
                                    Apply Coupon
                                  </button>
                                </div>
                              </Col>
                              <Col
                                lg={8}
                                md={6}
                                className="text-start text-md-end"
                              >
                                <button
                                  className="btn btn-line-fill btn-sm"
                                  type="submit"
                                  onClick={() => dispatch(deleteAllFromCart())}
                                >
                                  Clear Cart
                                </button>
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="divider center-icon space-mt--30 space-mb--30">
                    <i className="icon-basket-loaded" />
                  </div>
                </Col>
              </Row>
             
            </>
        </Container>
      </div>




        {/* <!-- SHOPING CART AREA END --> */}

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
    </>
  );
};

export default Cart;
