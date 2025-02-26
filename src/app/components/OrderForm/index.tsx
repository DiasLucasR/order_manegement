import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
} from '@mui/material';
import { createOrUpdateOrder } from '@/services/OrdersService';



const OrderForm = ({ order, products }) => {
  const [productIds, setProductIds] = useState(order.productIds || []);
  const [total, setTotal] = useState(order.total || 0);

  useEffect(() => {
    const totalAmount = productIds.reduce((sum, productId) => {
      const product = products.find((p) => p.id === productId);
      return sum + (product ? product.price : 0);
    }, 0);
    setTotal(totalAmount);
  }, [productIds, products]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { productIds, total };

    createOrUpdateOrder(payload).then(res => {
      //
    }).catch(err => {
      //
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Products</InputLabel>
        <Select
          multiple
          value={productIds}
          onChange={(e) => setProductIds(e.target.value)}
          renderValue={(selected) => selected.map((id) => products.find((p) => p.id === id)?.name).join(', ')}
        >
          {products.map((product) => (
            <MenuItem key={product.id} value={product.id}>
              {product.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select products for the order</FormHelperText>
      </FormControl>
      <TextField label="Total" value={`$${total.toFixed(2)}`} fullWidth margin="normal" disabled />
      <Button type="submit" variant="contained" color="primary">
        {order.id ? "Update Order" : "Create Order"}
      </Button>
    </form>
  );
};

export default OrderForm;
