import React from "react";
import { List, ListItem, ListItemText, Button, Divider } from "@mui/material";

const CategoryList = ({ categories }) => {
  const handleDelete = async (id) => {
    await fetch(`/api/categories/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())  // Converte a resposta para JSON
      .then((data) => {
        console.log('Order deleted:', data);
      })
      .catch((error) => {
        console.error('Error deleting order:', error);
      });
  };

  return (
    <List>
      {categories?.map((category) => (
        <span>
        <ListItem key={category.id}>
          <ListItemText primary={category.name} />
          <Button onClick={() => handleDelete(category.id)} color="error" variant="contained">
            Delete
          </Button>
        </ListItem>
        <Divider />
        </span>
      ))}
    </List>
  );
};

export default CategoryList;
