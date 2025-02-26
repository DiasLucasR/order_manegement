"use client"
import HeaderSection from "@/app/components/HeaderSection";
import { ModalComponent } from "@/app/components/Modal";
import OrderForm from "@/app/components/OrderForm";
import OrderList from "@/app/components/OrderList";
import { fetchOrders } from "@/services/OrdersService";
import React, { useState, useEffect } from "react";


const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    fetchOrders().then(res => {
      setOrders(res.data)
    })

  }, []);

  return (
    <div>
      <HeaderSection title="Orders" buttonLabel="New Order" onButtonClick={() => setOpenForm(true)} />

     
      <OrderList orders={orders} />
      <ModalComponent open={openForm} onClose={() => setOpenForm(false)}>
      <OrderForm />
    </ModalComponent>
    </div>
  );
};

export default OrdersPage;
