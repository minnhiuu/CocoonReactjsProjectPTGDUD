import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Drawer } from "antd";
import { Link, useNavigate } from "react-router";
import { fetchApi } from "../../api/fecthAPI";
import Loading from "../Loading/Loading";
import { FaArrowRightLong } from "react-icons/fa6";

function Search() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsSearch, setProductsSearch] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await fetchApi("/products");
      if (data) setProducts(data);
    };

    getProducts();
  }, []);

  const searchProducts = (searchTerm) => {
    if (!searchTerm) {
      setProductsSearch([]);
      setTotalItems(0);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Lấy 5 sản phẩm đầu tiên
    const limitedResults = filtered.slice(0, 5);

    setProductsSearch(limitedResults);
    setTotalItems(filtered.length);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      searchProducts(value);
    }, 300); // debounce 300ms

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  const navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
    inputRef.current.focus();
  };
  const onClose = () => {
    setOpen(false);
    setValue("");
    inputRef.current.value = "";
  };
  const handleSearch = (e) => {
    setValue(e.target.value);
  };
  const handleNavigate = (id) => {
    onClose();
    navigate(`/cocoon/san-pham/${id}`);
  };
  const handleNavigateToSearchPage = () => {
    navigate(
      `/cocoon/search?filter=title:${inputRef.current.value}&_page=1&_limit=10`
    );
    onClose();
  };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <button className="flex justify-center items-center" onClick={showDrawer}>
        <BsSearch className="text-[20px]" />
      </button>

      <Drawer
        placement={"top"}
        onClose={onClose}
        open={open}
        key={"top"}
        height={"auto"}
        styles={{
          header: { display: "none" },
        }}
      >
        <div className="w-[1024px] mx-auto flex relative">
          <Link to={"/"} className="py-[10px]">
            <img
              src="/images/logoCocoon.svg"
              alt="logo"
              className="w-[200px] object-cover"
            />
          </Link>
          <div className="flex flex-col ml-[50px]">
            <div className="mb-[20px] relative">
              <button
                className="text-gray-300 absolute top-4 left-4"
                onClick={handleNavigateToSearchPage}
              >
                <BsSearch className="text-[20px]" />
              </button>
              <input
                ref={inputRef}
                onInput={handleSearch}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleNavigateToSearchPage();
                  }
                }}
                required
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="!text-[14px] !w-[600px] !py-[10px] !pr-[10px] !pl-[50px] !border-[1px] !border-gray-400 !rounded-s-[22px] !rounded-e-[22px]"
              />
            </div>
            {productsSearch && productsSearch.length > 0 ? (
              productsSearch.map((item, index) => (
                <div
                  onClick={() => handleNavigate(item.id)}
                  key={index}
                  className="flex items-center justify-between border-b-[1px] border-gray-300 py-[10px] cursor-pointer"
                >
                  <div>
                    <h3 className="!text-[14px] !font-[500] !text-[#080808] !mb-[5px]">
                      {item.title}
                    </h3>
                    <h3 className="!font-[700] !text-[#252A2B] !text-[14px]">
                      {item.price.toLocaleString("en-US")}
                    </h3>
                  </div>
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-[60px] h-[60px]  object-cover"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center">
                <h4 className="!text-md text-center font-normal">
                  Không có sản phẩm nào...
                </h4>
                <button
                  className="!rounded-md border-1 border-[#c3a15c] bg-white text-[#c3a15c] 
                  !w-40 !mt-4 !px-4 !py-2 hover:!bg-[#e4c090] hover:text-white transition-all duration-300
                  flex items-center justify-center gap-4"
                  onClick={() => {
                    navigate("/cocoon/san-pham");
                    onClose();
                  }}
                >
                  Xem tất cả
                  <FaArrowRightLong />
                </button>
              </div>
            )}
            {productsSearch && totalItems > 5 && (
              <div
                onClick={handleNavigateToSearchPage}
                className="mt-[16px] hover:text-gray-500 text-center cursor-pointer"
              >
                Xem thêm {totalItems - 5} sản phẩm
              </div>
            )}
          </div>
          <button
            className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-full flex items-center justify-center absolute right-[-120px]"
            onClick={onClose}
          >
            <span>
              <svg fill="#111" height="12px" width="12px" viewBox="0 0 24 24">
                <path d="M15.04 12L24 2.96 21.04 0 12 8.96 3.04 0 0 2.96 9.04 12 0 20.96 3.04 24 12 14.96 21.04 24 24 20.96z"></path>
              </svg>
            </span>
          </button>
        </div>
      </Drawer>
    </>
  );
}

export default Search;
