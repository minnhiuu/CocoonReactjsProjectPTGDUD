import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

export function AccountAddressModal(props) {
  const { isAdd, addressData, handleAddAddress, handleUpdateAddress } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    if (!isAdd && addressData) {
      form.setFieldsValue(addressData);
    } else {
      form.resetFields();
    }
  }, [isAdd, addressData, form]);

  const onFinish = (values) => {
    const newAddress = { ...values };
    if (isAdd) {
      newAddress.id = new Date().getTime().toString(); 
      handleAddAddress(newAddress);
    } else {
      handleUpdateAddress(newAddress);
    }
  };

  return (
    <div>
      <div className="py-2">
        <div className="text-lg font-semibold">
          {isAdd ? "ĐỊA CHỈ MỚI" : "CẬP NHẬT ĐỊA CHỈ"}
        </div>
      </div>
      <div className="border-b border-line-border my-2"></div>
      <Form
        form={form}
        name="simple-address-form"
        onFinish={onFinish}
        layout="vertical"
        className="[&_.ant-form-item]:!mb-3"
      >
        <Form.Item name="id" hidden>
          <Input />
        </Form.Item>

        <Form.Item
          name="name"
          label="Họ tên"
          rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
        >
          <Input placeholder="Nhập họ tên" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
        >
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>

        <Form.Item
          name="address"
          label="Địa chỉ"
          rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
        >
          <Input placeholder="Ví dụ: 789 Trần Hưng Đạo, Quận 5, TP.HCM" />
        </Form.Item>

        <div className="flex justify-between mt-4">
          <Button
            type="primary"
            htmlType="submit"
            className="!bg-primary w-full hover:!bg-red-600 !font-semibold text-white !py-2"
          >
            HOÀN THÀNH
          </Button>
        </div>
      </Form>
    </div>
  );
}
