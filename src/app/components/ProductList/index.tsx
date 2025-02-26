"use client";

import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ProductForm from "../ProductForm";
import { ModalComponent } from "../Modal";
import { deleteProduct } from "@/services/ProductsService";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface ProductListProps {
  products: Product[];
}


const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openEdit, setOpenEdit] = useState(false);

  const handleDelete = async (id: number) => {
    try {
      deleteProduct(id).then(res => {
        //  
      }).catch(err => {
        //
      })
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setOpenEdit(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setOpenEdit(false);
  };


  return (
    <div className="w-full space-y-4">
      <div className="w-full space-y-4">
        <List>
          {products?.map((product) => (
            <span key={product.id}>
              <ListItem>
                <ListItemText
                  primary={product.name}
                  secondary={`Price: $${product.price.toFixed(2)} | Category: ${product.category}`}
                />
                <Button
                  onClick={() => handleEdit(product)}
                  color="secondary"
                  variant="contained"
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(product.id)}
                  color="error"
                  variant="contained"
                  size="small"
                  className="ml-2"
                >
                  Delete
                </Button>
              </ListItem>
              <Divider />
            </span>
          ))}
        </List>
      </div>

      {/* Modal for Editing Product */}
      <ModalComponent open={openEdit} onClose={() => setOpenEdit(false)}>
        <ProductForm
          product={selectedProduct}
        />
      </ModalComponent>
    </div>
  );
};

export default ProductList;
