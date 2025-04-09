import { Card, Tabs, Divider, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import api from "../../api/axiosConfig";
const AccountHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  const tabItems = [
    { label: `TẤT CẢ (${orders.length})`, key: "all" },
    { label: "MỚI", key: "new" },
    { label: "ĐANG XỬ LÝ", key: "processing" },
    { label: "ĐANG VẬN CHUYỂN", key: "shipping" },
    { label: "HOÀN THÀNH", key: "completed" },
    { label: "HUỶ", key: "cancelled" },
  ];

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await api.get("/orders");
        if (response.status === 200) {
          const filteredOrders = response.data.filter(
            (order) => order.userPhone === user.phone
          );
          setOrders(filteredOrders);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    if (user?.phone) {
      getOrders();
    }
  }, [user?.phone]);

  console.log(orders)
  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
      <Tabs items={tabItems} defaultActiveKey="all" className="mb-6" />

      <Divider />

      <div className="mb-6">
        <div className="flex items-center mb-4">
          <h2 className="text-md font-semibold mr-2" style={{ fontSize: "18px" }}>
            Tìm kiếm theo mã đơn hàng
          </h2>
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Tìm đơn hàng"
            className="border rounded-l px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            type=""
            icon={<SearchOutlined />}
            className="bg-[#E3D0AC] rounded-l-none h-100 p-2 ms-2"
          >
            Tìm kiếm
          </Button>
        </div>
      </div>

      <div className="space-y-6 max-h-[400px] overflow-y-auto">
        {orders.map((order) => (
          <Card key={order.id} className="w-full border border-gray-200 rounded-lg shadow-sm p-2 mb-2">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">
                  Mã đơn hàng: {order.id}
                </h3>
                <span className="text-sm text-gray-500">
                  Ngày đặt: {new Date(order.orderDate).toLocaleDateString("vi-VN")}
                </span>
              </div>
              <div className="text-gray-600">
                {order.items.map((item, index) => (
                  <p key={index} className="text-sm">
                    {item.title} - Số lượng: {item.quantity}
                  </p>
                ))}
              </div>
              <p className="text-blue-500 cursor-pointer">
                Xem thêm {order.items.length - 1} sản phẩm
              </p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-gray-800">
                  Tổng tiền: {order.finalPrice}
                </p>
                <Button type="" className="bg-[#E3D0AC]">
                  Xem chi tiết
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AccountHistory;