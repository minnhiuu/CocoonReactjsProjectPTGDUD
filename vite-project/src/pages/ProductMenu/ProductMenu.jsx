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
import "./ProductMenu.css";
import Product from "../../components/Product/Product";
import CarouselProduct from "../../components/CarouselProduct/Carousel";

export default function ProductMenu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Tất Cả");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

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
          setProducts(productRes.data);
          setFilteredProducts(productRes.data);
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

  return (
    <>
      <div className="p-0.5"></div>

      <CarouselProduct />
      <div className="section-2 mb-3 mt-3">
        <div className="section-2-content text-center">
          <h1 className="mb-4 mt-2 text-font">Triết lý THƯƠNG HIỆU</h1>
          <p className="text-gray-500">
            "Là những người yêu thiên nhiên và đam mê khám phá các nguồn nguyên
            liệu đặc hữu của Việt Nam, chúng tôi luôn kiên định với những triết
            lý trên hành trình tìm vẻ đẹp thật sự của làn da."
          </p>
        </div>
      </div>
      <Container className="my-2 p-1">
        <h2
          className="text-uppercase text-muted mb-3 mt-4 text-center text-dark"
          style={{ fontSize: 20 }}
        ></h2>

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
                <IoFilter /> Bộ Lọc
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
                  <Pagination className="justify-content-center">
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
    </>
  );
}
