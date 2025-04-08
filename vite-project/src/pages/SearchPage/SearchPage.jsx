import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BsSearch } from "react-icons/bs";
import { Pagination } from "antd";
import { fetchApi } from "../../api/fecthAPI";
import Product from "../../components/Product/Product";
import Loading from "../../components/Loading/Loading";

function SearchPage() {
  const inputRef = useRef();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [productsSearch, setProductsSearch] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const pathName = location.pathname;
  const searchParams = new URLSearchParams(location.search);
  const itemsPerPage = 10;

  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await fetchApi("/products");
      if (data) setProducts(data);
    };

    getProducts();
  }, []);

  const searchProducts = (searchTerm, page = 1) => {
    if (!searchTerm) {
      setProductsSearch([]);
      setTotalItems(0);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Xử lý phân trang
    const totalItem = filtered.length;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedResults = filtered.slice(startIndex, endIndex);

    setProductsSearch(paginatedResults);
    setTotalItems(totalItem);
  };

  useEffect(() => {
    const filterField = searchParams.get("filter");
    const page = parseInt(searchParams.get("_page")) || 1;
    setCurrentPage(page);

    const searchTerm = filterField ? filterField.split(":")[1] : "";
    searchProducts(searchTerm, page);
  }, [location.search, products]);

  const handleChange = (page) => {
    setCurrentPage(page);
    searchParams.set("_page", page);
    searchParams.set("_limit", itemsPerPage);
    const url = `${pathName}?${searchParams.toString()}`;
    navigate(url);
  };

  const handleSearch = () => {
    const value = inputRef.current.value;
    searchParams.set("filter", `title:${value}`);
    searchParams.set("_page", 1);
    searchParams.set("_limit", itemsPerPage);
    const url = `${pathName}?${searchParams.toString()}`;
    navigate(url);
  };

  //   if (loading) {
  //     return <Loading />;
  //   }

  return (
    <>
      <div
        className={`py-[30px] text-center text-[#080808] ${
          productsSearch.length > 0 ? "" : "h-[80vh]"
        }`}
      >
        <h1 className="text-[30px] font-[600]">Tìm kiếm</h1>
        {productsSearch.length > 0 && (
          <h4 className="text-[14px]">
            Có <b>{totalItems} sản phẩm</b> kết quả tìm kiếm
          </h4>
        )}
        <div className="w-[60px] h-[4px] bg-[#080808] mx-auto mb-[30px] mt-[15px]"></div>
        {productsSearch.length === 0 && (
          <>
            {!searchParams.get("filter") && (
              <>
                <p className="text-[14px] mb-[8px]">
                  Rất tiếc, chúng tôi không tìm thấy kết quả cho từ khóa của bạn
                </p>
                <p className="text-[14px]">
                  Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và
                  thử lại!
                </p>
              </>
            )}
            {searchParams.get("filter") && totalItems === 0 && (
              <>
                <p className="text-[20px] font-[700] mb-[8px]">
                  Không tìm thấy nội dung bạn yêu cầu
                </p>
                <p className="text-[14px]">
                  Không tìm thấy{" "}
                  <b>"{searchParams.get("filter").split(":")[1]}"</b>. Vui lòng
                  kiểm tra chính tả, sử dụng các từ tổng quát hơn và thử lại!
                </p>
              </>
            )}
            <div className="flex items-center justify-center mt-[40px]">
              <input
                ref={inputRef}
                type="text"
                placeholder="Tìm kiếm"
                className="text-[14px] bg-[#EDEDED] outline-none px-[20px] py-[12px] !w-[45%] !mt-0"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <button
                onClick={handleSearch}
                className="bg-[#c3a15c] w-[55px] h-[45px] flex justify-center items-center"
              >
                <BsSearch className="text-[24px] text-white" />
              </button>
            </div>
          </>
        )}
        {productsSearch.length > 0 && (
          <>
            <h4 className="ml-4 text-start text-[14px] mb-[20px]">
              Kết quả tìm kiếm cho{" "}
              <b>"{searchParams.get("filter").split(":")[1]}"</b>
            </h4>
            <div className="p-4 grid grid-cols-5 gap-4">
              {productsSearch.map((item, index) => (
                <Product key={index} product={item} />
              ))}
            </div>
            <Pagination
              align="center"
              current={currentPage}
              defaultCurrent={1}
              total={totalItems}
              pageSize={itemsPerPage}
              showSizeChanger={false}
              style={{
                marginTop: 20,
                marginBottom: 30,
              }}
              onChange={handleChange}
            />
          </>
        )}
      </div>
    </>
  );
}

export default SearchPage;
