import React, { useState, useEffect, useContext, use } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchApi } from "../../api/fecthAPI";
import "./ProductInfo.css";
import { Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../../context/cart";
import Product from "../Product/Product";

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [viewedProducts, setViewedProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const startTime = Date.now();
      const { data, error } = await fetchApi(`/products/${id}`);
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 700 - elapsedTime);
      setTimeout(() => {
        if (data) {
          setProduct(data);
        } else {
          setError(error);
        }
        setLoading(false);
      }, remainingTime);
    };

    getProduct();
  }, [id]);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const { data, error } = await fetchApi("/products");
      if (data) setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  function calculateDiscountedPrice(price, discount) {
    if (!discount || discount == "0%") return price;
    const priceNum = parseInt(price.replace(/\D/g, ""));
    const discountPercent = parseInt(discount) / 100;
    const discountedPrice = priceNum * (1 - discountPercent);
    const roundedPrice = Math.ceil(discountedPrice / 1000) * 1000;
    return roundedPrice.toLocaleString("vi-VN") + "đ";
  }

  const calculateAverageRating = () => {
    if (product.reviews.length === 0) return 0;
    const totalStars = product.reviews.reduce(
      (sum, review) => sum + review.stars,
      0
    );
    return (totalStars / product.reviews.length).toFixed(1);
  };

  const ratingStats = () => {
    const stats = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    product.reviews.forEach((review) => {
      stats[review.stars] += 1;
    });
    return stats;
  };

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
  };

  const findRelatedProducts = () => {
    const relatedProducts = [];
    const category = product.category;
    products.forEach((item) => {
      if (item.category === category && item.id !== product.id) {
        relatedProducts.push(item);
      }
    });
    return relatedProducts.slice(0, 4);
  };

  useEffect(() => {
    if (!product) return;

    const jsonData = localStorage.getItem("viewedProducts");
    let stored = jsonData ? JSON.parse(jsonData) : [];

    const isAlreadyViewed = stored.some((p) => p.id === product.id);
    if (!isAlreadyViewed) {
      const newViewed = [product, ...stored].slice(0, 10);
      setViewedProducts(newViewed);
      localStorage.setItem("viewedProducts", JSON.stringify(newViewed));
    } else {
      setViewedProducts(stored);
    }
  }, [product]);

  useEffect(() => {
    const jsonData = localStorage.getItem("viewedProducts");
    if (jsonData) {
      setViewedProducts(JSON.parse(jsonData));
    }
  }, []);

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-logo">
          <img src="/images/cocoon1.png" alt="Loading" className="logo-image" />
          <div className="progress-circle"></div>
        </div>
      </div>
    );
  }

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product)
    return (
      <p className="text-center text-gray-500">Không tìm thấy sản phẩm.</p>
    );

  const averageRating = calculateAverageRating();
  const stats = ratingStats();

  return (
    <Container className="product-info py-8">
      <Row className="mb-8">
        <Col md={6} className="box-img mb-4">
          <div className="image-wrapper">
            <img
              src={product.img}
              alt={product.title}
              className="product-image"
            />
          </div>
        </Col>
        <Col md={6} className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="category text-gray-500 mb-2">{product.category}</p>
          <div className="price-section flex items-center gap-3 mb-4">
            {product.discount != "0%" ? (
              <>
                <span className="text-2xl font-bold text-red-600">
                  {calculateDiscountedPrice(product.price, product.discount)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {product.price}
                </span>
                <span className="text-sm text-red-500 font-semibold">
                  (Tiết kiệm {product.discount})
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-green-600">
                {product.price}
              </span>
            )}
          </div>
          <p className="description text-gray-600 mb-4">
            {product.description}
          </p>
          <div className="quantity flex items-center gap-3 mb-4">
            <label className="text-gray-700 font-medium">Số lượng:</label>
            <div className="quantity-control">
              <button
                type="button"
                className="quantity-btn"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                −
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="quantity-input"
              />
              <button
                type="button"
                className="quantity-btn"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="buttons flex gap-4 mb-4">
            <button
              onClick={() => handleAddToCart(quantity)}
              className="add-to-cart-btn m-0"
            >
              THÊM VÀO GIỎ
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="buy-now-btn"
            >
              MUA NGAY
            </button>
          </div>
          <div className="additional-info text-sm text-gray-600">
            <p>Miễn phí vận chuyển cho đơn hàng từ 500.000đ</p>
            <p>Đổi trả dễ dàng trong 30 ngày</p>
          </div>
        </Col>
      </Row>
      <Container className="p-3">
        <Row className="product-details-section mb-8 ">
          <Col md={6}>
            <h2 className="section-title">MÔ TẢ SẢN PHẨM</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="list-disc pl-5 text-gray-600">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <h2 className="section-title">THÀNH PHẦN</h2>
            <p className="text-gray-600">{product.ingredients.join(", ")}</p>
            <h2 className="section-title">CÁCH SỬ DỤNG</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {product.usage.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <h2 className="section-title">PHÙ HỢP VỚI</h2>
            <p className="text-gray-600">{product.suitableFor.join(", ")}</p>
            <h2 className="section-title">THÔNG TIN BỔ SUNG</h2>
            <p className="text-gray-600">
              <strong>Kết cấu:</strong> {product.texture}
            </p>
            <p className="text-gray-600">
              <strong>Mùi hương:</strong> {product.fragrance}
            </p>
            <p className="text-gray-600">
              <strong>Liều lượng:</strong> {product.dosage}
            </p>
            <p className="text-gray-600">
              <strong>Lưu ý:</strong> {product.caution}
            </p>
            <p className="text-gray-600">
              <strong>Xuất xứ:</strong> {product.origin}
            </p>
          </Col>
          <Col md={6} className="">
            <h2 className="section-title text-uppercase">
              Đánh giá từ khách hàng
            </h2>
            <div className="rating-stats mb-6">
              <div className="rating-summary flex items-center gap-4 mb-4">
                <div className="average-rating text-5xl font-bold text-gray-800">
                  {averageRating}
                </div>
                <div>
                  <div className="hearts flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={
                          index < averageRating ? "heart-filled" : "heart-empty"
                        }
                      >
                        ♥
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    ({product.reviews.length} Đánh giá)
                  </p>
                </div>
              </div>
              <div className="rating-bars">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div
                    key={star}
                    className="rating-bar flex items-center gap-2 mb-2"
                  >
                    <div className="hearts flex gap-1">
                      {[...Array(star)].map((_, index) => (
                        <span key={index} className="heart-filled">
                          ♥
                        </span>
                      ))}
                      {[...Array(5 - star)].map((_, index) => (
                        <span key={index} className="heart-empty">
                          ♥
                        </span>
                      ))}
                    </div>
                    <div className="bar bg-gray-200 h-2 flex-1 rounded-full overflow-hidden">
                      <div
                        className="fill bg-gray-400 h-full"
                        style={{
                          width: `${
                            (stats[star] / product.reviews.length) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="count text-gray-600">{stats[star]}</span>
                  </div>
                ))}
              </div>
            </div>
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="review border-b py-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="hearts flex gap-1">
                      {[...Array(review.stars)].map((_, i) => (
                        <span key={i} className="heart-filled">
                          ♥
                        </span>
                      ))}
                      {[...Array(5 - review.stars)].map((_, i) => (
                        <span key={i} className="heart-empty">
                          ♥
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-gray-500 text-sm mt-1">- {review.user}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Chưa có đánh giá nào.</p>
            )}
          </Col>
        </Row>
      </Container>

      {/* danh sách sản phẩm liên quan */}
      <Container className="related-products">
        <h2 className="section-title">SẢN PHẨM LIÊN QUAN</h2>
        <Row>
          {findRelatedProducts().map((relatedProduct) => (
            <Col key={relatedProduct.id}>
              <Product product={relatedProduct} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* danh sách sản phẩm đã xem */}
      {viewedProducts.length > 0 && (
        <Container className="viewed-products-section mt-5">
          <h2 className="section-title">SẢN PHẨM BẠN ĐÃ XEM</h2>
          <Row>
            {viewedProducts.map((item) => (
              <Col key={item.id} md={3} className="mb-4">
                <Product product={item} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default ProductInfo;
