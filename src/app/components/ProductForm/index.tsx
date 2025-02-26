import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { createOrUpdateProduct } from "@/services/ProductsService";

interface Category {
  id: number;
  name: string;
}

interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  categoryIds: number[];
  imageUrl: string;
}

interface ProductFormProps {
  product?: Product | null;
  categories?: Category[];
}

const ProductForm: React.FC<ProductFormProps> = ({ product = {}, categories = [] }) => {
  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || 0);
  const [categoryIds, setCategoryIds] = useState<number[]>(product?.categoryIds || []);
  const [imageUrl, setImageUrl] = useState(product?.imageUrl || "");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error state

    if (!name || !price) {
      setError("Name and price are required.");
      return;
    }

    const payload = { name, description, price, categoryIds, imageUrl };

    try {
      createOrUpdateProduct(payload).then(res => {
        //
      }).catch(err => {
        //
      })
    } catch (error) {
      //
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <FormHelperText error>{error}</FormHelperText>}
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        fullWidth
        margin="normal"
        type="number"
        required
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Categories</InputLabel>
        <Select
          multiple
          value={categoryIds}
          onChange={(e) => setCategoryIds(e.target.value as number[])}
          renderValue={(selected) => selected.join(", ")}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select product categories</FormHelperText>
      </FormControl>
      <TextField
        label="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {product.id ? "Update Product" : "Create Product"}
      </Button>
    </form>
  );
};

export default ProductForm;
