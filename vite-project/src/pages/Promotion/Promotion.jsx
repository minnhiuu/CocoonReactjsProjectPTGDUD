import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Form,
  Pagination,
  Carousel,
} from "react-bootstrap";
import { IoFilter } from "react-icons/io5";
import { fetchApi } from "../../api/fecthAPI";
import Product from "../../components/Product/Product";
import "./Promotion.css";
import Countdown from "react-countdown";

export default function Promotion() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Tất Cả");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const filteredDiscountedProducts = (products) => {
    return products.filter((product) => product.discount != "0%");
  };

  useEffect(() => {
    const getData = async () => {
      const startTime = Date.now();
      setLoading(true);
      const [categoryRes, productRes] = await Promise.all([
        fetchApi("/categories"),
        fetchApi("/products"),
      ]);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 700 - elapsedTime);

      setTimeout(() => {
        if (categoryRes.data) {
          setCategories(categoryRes.data);
        }
        if (productRes.data) {
          setProducts(filteredDiscountedProducts(productRes.data));
          setFilteredProducts(filteredDiscountedProducts(productRes.data));
        }
        setLoading(false);
      }, remainingTime);
    };

    getData();
  }, []);

  useEffect(() => {
    let filtered = [...products];
    if (selectedCategory !== "Tất Cả") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }
    filtered = filtered.filter((product) => {
      const price = parseFloat(
        product.price.replace(".", "").replace(" đ", "")
      );
      return price >= priceRange[0] && price <= priceRange[1];
    });
    if (sortOption === "price-asc") {
      filtered.sort(
        (a, b) =>
          parseFloat(calculateDiscountedPrice(a.price, a.discount)) -
          parseFloat(calculateDiscountedPrice(b.price, b.discount))
      );
    } else if (sortOption === "price-desc") {
      filtered.sort(
        (a, b) =>
          parseFloat(calculateDiscountedPrice(b.price, b.discount)) -
          parseFloat(calculateDiscountedPrice(a.price, a.discount))
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, priceRange, sortOption, products]);

  const calculateDiscountedPrice = (price, discount) => {
    if (!discount || discount === "0%") return price;
    const priceNum = parseInt(price.replace(/\D/g, ""));
    const discountPercent = parseInt(discount.replace("%", "")) / 100;
    const discountedPrice = priceNum * (1 - discountPercent);
    const roundedPrice = Math.ceil(discountedPrice / 1000) * 1000;
    return roundedPrice;
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const countdownRenderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) return <span>Ưu đãi đã kết thúc!</span>;
    return (
      <span className="text-xl">
        Kết thúc trong: {hours} giờ {minutes} phút {seconds} giây
      </span>
    );
  };

  return (
    <div className="promotional-page pt-2">
      <div className="marquee-container !mt-4">
        <div className="marquee-text">
          🚀 ƯU ĐÃI CỰC LỚN 🔥 - GIẢM GIÁ ĐẾN 50% 💥 - MUA NGAY KẺO LỠ 🛒 – CHỈ
          TỚI 30/4/2025 🎉 🚀 NHẬP MÃ COCOON304 - GIẢM NGAY 10% TỐI ĐA 80K
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="promo-banner relative overflow-hidden !mt-4">
        <img
          src="https://image.cocoonvietnam.com/uploads/Parallax_Desktop_Layer_2_3feb79b3f0.png"
          alt="left decoration"
          className="absolute top-0 left-0 w-[500px]  z-10"
        />
        <img
          src="https://image.cocoonvietnam.com/uploads/Parallax_Desktop_Layer_3_32197ab445.png"
          alt="buoi"
          className="absolute top-10 left-14 w-[450px] z-9"
        />
        <img
          src="https://image.cocoonvietnam.com/uploads/Parallax_Desktop_Layer_4_59f4a45c1b.png"
          alt="la"
          className="absolute top-0 left-2 w-[400px] z-8"
        />
        <img
          src="https://image.cocoonvietnam.com/uploads/Parallax_Desktop_Layer_1_bbf0cadf7f.png"
          alt="buoi2"
          className="absolute top-5 left-5 w-[500px] z-7"
        />

        <img
          src="https://image.cocoonvietnam.com/uploads/San_Pham_6c8d021d63.png"
          alt="right decoration"
          className="absolute bottom-0 right-15 w-[300px]  z-10"
        />
        <img
          src="https://image.cocoonvietnam.com/uploads/Bo_Ket_Trai_113f8d9833.png"
          alt="bokettrai"
          className="absolute bottom-0 right-20 w-[300px] z-9"
        />
        <img
          src="https://image.cocoonvietnam.com/uploads/Chanh_Day_293ff496c0.png"
          alt="chanh day"
          className="absolute bottom-0 right-3 w-[300px] z-8"
        />
        <img
          src="https://image.cocoonvietnam.com/uploads/Bo_Ket_Phai_cc60e7569a.png"
          alt="boketphai"
          className="absolute bottom-0 right-3 w-[300px] z-7"
        />

        <div className="banner-content text-center py-20 text-white z-20 relative">
          <h1 className="text-4xl font-bold">SUMMER SALE</h1>
          <h2 className="text-2xl mt-2">Giảm giá lên đến 50%</h2>
          <p className="mt-2 text-lg">
            Ưu đãi đặc biệt kéo dài đến hết tháng 4, 2025
          </p>
        </div>
      </div>

      <Container className="text-center my-4 px-2">
        <h2 className="text-uppercase fw-bold text-danger mb-3">
          Ưu đãi cực sốc - Mua ngay kẻo lỡ!
        </h2>
        <div className="flex gap-4">
          <p className="text-muted">
            Khám phá hàng trăm sản phẩm với mức giá ưu đãi lên đến{" "}
            <strong>50%</strong>. Chỉ áp dụng trong thời gian có hạn. Hãy nhanh
            tay lựa chọn những món đồ yêu thích với mức giá không thể tốt hơn!
            <br />
            <br />
            <i>
              Tặng bộ sản phẩm trị giá lên đến hàng trăm nghìn đồng khi mua
              combo sản phẩm mới từ Cocoon!
            </i>
          </p>
          <img
            src="/images/sale-product-sample.png"
            alt="sale product"
            width={"300px"}
          />
          <img
            src="/images/sale-product-sample2.png"
            alt="sale product2"
            width={"300px"}
          />
        </div>
      </Container>

      <div className="flex items-center gap-3 text-center mt-3 mb-4 countdown-box">
        <img src="/images/flash-deal.webp" alt="flash-deal" />
        <div className="separator"></div>
        <Countdown
          date={new Date("2025-04-30T23:59:59")}
          renderer={countdownRenderer}
        />
      </div>
      {/* carousel */}
      <div className="">
        <div
          id="productListCarousel"
          className="carousel slide product-list-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {Array.from({ length: Math.ceil(products.length / 4) }).map(
              (_, index) => (
                <div
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  } product-list-carousel-item`}
                  key={index}
                >
                  <div className="flex justify-center gap-3">
                    {products.slice(index * 4, index * 4 + 4).map((product) => (
                      <Product product={product} key={product.id} />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
          <button
            className="carousel-control-prev product-list-control-prev"
            type="button"
            data-bs-target="#productListCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon product-list-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next product-list-control-next"
            type="button"
            data-bs-target="#productListCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon product-list-control-next-icon"></span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center p-4">
        <div className="flex items-center gap-2">
          <img src="/images/fire.webp" alt="fire" />
          <span className="text-3xl font-bold">30/4 DEAL SIÊU NÓNG</span>
          <img src="/images/fire.webp" alt="fire" />
        </div>
        <div className="text-xl font-semibold">
          BẬT CHẾ ĐỘ "GIẢI PHÓNG" GIỎ HÀNG
        </div>
      </div>

      <div className="">
        <div
          id="productListCarousel2"
          className="carousel slide product-list-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {Array.from({ length: Math.ceil(products.length / 4) }).map(
              (_, index) => (
                <div
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  } product-list-carousel-item`}
                  key={index}
                >
                  <div className="flex justify-center gap-3">
                    {products.slice(index * 4, index * 4 + 4).map((product) => (
                      <Product product={product} key={product.id} />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
          <button
            className="carousel-control-prev product-list-control-prev"
            type="button"
            data-bs-target="#productListCarousel2"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon product-list-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next product-list-control-next"
            type="button"
            data-bs-target="#productListCarousel2"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon product-list-control-next-icon"></span>
          </button>
        </div>
      </div>

      <Container className="my-2 p-1">
        <h2
          className="text-center text-lg font-semibold text-gray-700 mb-4 "
          style={{ fontFamily: "vollkorn" }}
        >
          Danh sách tất cả sản phẩm khuyến mãi
        </h2>

        {loading ? (
          <div className="loading-overlay">
            <div className="loading-logo">
              <img
                src="/images/cocoon1.png"
                alt="Loading"
                className="logo-image"
              />
              <div className="progress-circle"></div>
            </div>
          </div>
        ) : (
          <>
            {Array.from({ length: Math.ceil(categories.length / 5) }).map(
              (_, rowIndex) => (
                <Row key={rowIndex} className="justify-content-center">
                  {categories
                    .slice(rowIndex * 5, rowIndex * 5 + 5)
                    .map((category) => (
                      <Col
                        key={category.id}
                        xs={6}
                        sm={4}
                        md={2}
                        className="mb-4 text-center"
                      >
                        <Card
                          className={`border shadow-sm p-1 category-card ${
                            selectedCategory === category.name ? "active" : ""
                          }`}
                          onClick={() => setSelectedCategory(category.name)}
                          style={{ cursor: "pointer" }}
                        >
                          <Card.Img
                            variant="top"
                            src={category.icon}
                            alt={category.name}
                            className="category-image"
                          />
                          <Card.Body>
                            <Card.Text className="text-center category-text">
                              {category.name}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                </Row>
              )
            )}
          </>
        )}
      </Container>

      <Container className="p-1">
        <Row>
          <Col xs={12} md={3} className="mb-4 h-100">
            <div className="filter-section p-3 border rounded shadow-sm">
              <h3 className="fs-5 mb-3 flex align-items-base gap-1">
                <IoFilter />
                Bộ Lọc
              </h3>
              <div className="mb-4">
                <h5 className="fs-6 mb-2">Danh Mục</h5>
                <Form.Select
                  className="custom-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="mb-4">
                <h5 className="fs-6 mb-2">Khoảng Giá</h5>
                <Form.Range
                  className="custom-range"
                  min={0}
                  max={500000}
                  step={10000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                />
                <div className="d-flex justify-content-between">
                  <span>0 đ</span>
                  <span>{priceRange[1].toLocaleString("vi-VN")} đ</span>
                </div>
              </div>
              <div>
                <h5 className="fs-6 mb-2">Sắp Xếp</h5>
                <Form.Select
                  className="custom-select"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Mặc định</option>
                  <option value="price-asc">Giá: Thấp đến Cao</option>
                  <option value="price-desc">Giá: Cao đến Thấp</option>
                </Form.Select>
              </div>
            </div>
          </Col>

          <Col xs={12} md={9}>
            {loading ? (
              <Row>
                {Array.from({ length: 6 }).map((_, index) => (
                  <Col key={index} xs={6} sm={4} md={4} className="mb-4">
                    <Card className="border shadow-sm">
                      <div className="skeleton-image-product" />
                      <Card.Body>
                        <div className="skeleton-text mb-2"></div>
                        <div className="skeleton-text"></div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <>
                <Row>
                  {currentProducts.length === 0 ? (
                    <Col className="alert alert-light">
                      <div className="text-center box-img">
                        <img
                          className="no-product"
                          src="/images/no-products.png"
                          alt=""
                        />
                      </div>
                    </Col>
                  ) : (
                    currentProducts.map((product) => (
                      <Col
                        key={product.id}
                        xs={6}
                        sm={4}
                        md={4}
                        className="mb-4"
                      >
                        <Product product={product} />
                      </Col>
                    ))
                  )}
                </Row>

                {totalPages > 1 && (
                  <Pagination className="justify-content-center pag pagination">
                    <Pagination.Prev
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    />
                    {Array.from({ length: totalPages }, (_, index) => (
                      <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    />
                  </Pagination>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
      <style>
        {`
          .category-image {
            width: 80px;
            height: 80px;
            object-fit: contain;
            margin: 0 auto;
            border-radius: 10px;
          }

          .category-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .category-card:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            border-color: #007bff;
          }

          .category-text {
            font-size: 14px;
            font-weight: bold;
            color: #333;
          }

          .border {
            border: 1px solid #ddd !important;
          }

          .shadow-sm {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
          }

          .skeleton-image {
            width: 80px;
            height: 80px;
            background: #e0e0e0;
            margin: 0 auto;
            border-radius: 10px;
          }

          .skeleton-image-product {
            width: 100%;
            height: 200px;
            background: #e0e0e0;
            border-radius: 10px;
          }

          .skeleton-text {
            width: 60%;
            height: 14px;
            background: #e0e0e0;
            margin: 10px auto;
            border-radius: 5px;
          }

          .filter-section {
            background-color: #fff;
            border-radius: 8px;
          }

          .product-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
}
