"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import { Modal } from "antd";

const LogoutButton: FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userRole");
    router.replace("/"); // Navigates to home
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center">
      <button
        className="flex items-center justify-center gap-4 p-4 text-slate-400 text-xl"
        onClick={() => setIsModalOpen(true)}
      >
        <BiLogOut />
        <p className="hidden md:block">Log Out</p>
      </button>

      <Modal
        title="Logout"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </div>
  );
};

export default LogoutButton;
