'use client'
import HeaderSection from "@/app/components/HeaderSection";
import { ModalComponent } from "@/app/components/Modal";
import ProductForm from "@/app/components/ProductForm";
import ProductList from "@/app/components/ProductList";
import { fetchProducts } from "@/services/ProductsService";
import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";


const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [openForm, setOpenForm] = useState(false);


  useEffect(() => {
    fetchProducts().then(res => {setProducts(res.data)})
  }, []);

  return (
    <div>
<HeaderSection title="Products" buttonLabel="New Product" onButtonClick={() => setOpenForm(true)} />
    <ProductList products={products} />
    <ModalComponent open={openForm} onClose={() => setOpenForm(false)}>
      <ProductForm />
    </ModalComponent>
  </div>
  );
};

export default ProductsPage;
