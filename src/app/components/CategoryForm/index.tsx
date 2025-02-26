import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";

const CategoryForm = ({ category = {} }) => {
  const [name, setName] = useState(category.name || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name };

    if (category.id) {
      // Atualizar categoria
      await fetch(`/api/categories/${category.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),  // Envia o payload como JSON
      })
        .then((response) => response.json())  // Converte a resposta para JSON
        .then((data) => {
          console.log('Category updated:', data);
        })
        .catch((error) => {
          console.error('Error updating category:', error);
        });
    } else {
      // Criar nova categoria
      await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),  // Envia o payload como JSON
      })
        .then((response) => response.json())  // Converte a resposta para JSON
        .then((data) => {
          console.log('Category created:', data);
        })
        .catch((error) => {
          console.error('Error creating category:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {category.id ? "Update Category" : "Create Category"}
      </Button>
    </form>
  );
};

export default CategoryForm;
