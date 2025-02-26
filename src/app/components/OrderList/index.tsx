'use client'
import React, { useState } from "react";
import { Button, Divider, List, ListItem, ListItemText } from "@mui/material";
import { ModalComponent } from "../Modal";
import OrderForm from "../OrderForm";
import { deleteOrder } from "@/services/OrdersService";

const OrderList = ({ orders }) => {
  const [openOrder, setOpenOrder] = useState(false)
  const [orderSelected, setOrderSelected] = useState({})


  const handleDelete = async (id) => {
    deleteOrder(id).then(res => {
      //
    }).catch(err => {
      //
    })
  };

  const handleSeeMore = (order) => {
    setOrderSelected(order)
    setOpenOrder(true)
  }

  return (
    <div>
    <List>
      {orders?.map((order) => (
        <span>
        <ListItem key={order.id}>
          <ListItemText
            primary={`Order ${order.id}`}
            secondary={`Total: $${order.total}`}
          />
          <Button onClick={() => handleDelete(order.id)} color="error" variant="contained" className="mx-1">
            Delete
          </Button>
          <Button onClick={() => handleSeeMore(order)} color="primary" variant="contained">
            More
          </Button>
        </ListItem>
        <Divider />
        </span>
      ))}
    </List>
    <ModalComponent  open={openOrder} onClose={() => setOpenOrder(false)}>
      <OrderForm order={orderSelected} />
    </ModalComponent>
    </div>
  );
};

export default OrderList;
