import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useOutletContext } from "react-router-dom";
import AccountAddressItem from "../AccountAddressItem/AccountAddressItem";
import { AccountAddressModal } from "../AccountAddressModal/AccountAddressModal";
import api from "../../api/axiosConfig";

export function AccountAddress() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [addressData, setAddressData] = useState(null);
  const { user } = useOutletContext();

  console.log(user);

  const showAddModal = () => {
    setIsAdd(true);
    setAddressData(null);
    setIsModalOpen(true);
  };

  const showEditModal = (address) => {
    setIsAdd(false);
    setAddressData(address);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddAddress = (address) => {
    const userClone = { ...user };
    userClone.address = [...userClone.address, address];
    handleUpdateUser(userClone);
  };

  const handleUpdateAddress = (updatedAddress) => {
    const userClone = { ...user };
    userClone.address = updatedAddress;
    console.log(userClone);
    handleUpdateUser(userClone);
  };

  const handleUpdateUser = async (data) => {
    
    // await api.patch(`users/${data.id}`, data);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white py-8 px-5 shadow-md rounded-lg h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg !font-semibold text-left pb-4">
          Thông tin tài khoản
        </h2>
        <Button
          className="!bg-blue-border !text-black !font-semibold border-blue-border"
          onClick={showAddModal}
        >
          + Thêm địa chỉ mới
        </Button>
      </div>

      <div>
        <AccountAddressItem
          isDefault={true}
          addressData={user}
          handleDeleteAddress={(data) => console.log("Xóa:", data)}
          showEditModal={() => showEditModal(user)}
        />
      </div>

      <Modal
        width={500}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <AccountAddressModal
          isAdd={isAdd}
          addressData={user}
          handleAddAddress={(data) => {
            console.log("Added:", data);
            setIsModalOpen(false);
          }}
          handleUpdateAddress={(data) => {
            handleUpdateAddress(data);
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}
