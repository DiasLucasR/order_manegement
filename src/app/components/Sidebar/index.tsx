"use client"
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const menuItems = [
  { text: "Dashboard", link: "/dashboard" },
  { text: "Products", link: "/product" },
  { text: "Categories", link: "/category" },
  { text: "Orders", link: "/order" },
];

export default function Sidebar({ children }: {children : ReactNode}) {
  const router = useRouter()

  useEffect(() => {
    const path = window.location.pathname;
    if (path == '/') {
      router.push('/dashboard'); 
    }
  }, [router]);

  return (
    <Box display="flex" width="100%">
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Typography variant="h5" align="center" sx={{ padding: 2, fontWeight: "bold" }}>
          E-commerce
        </Typography>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component="a"
              href={item.link}
              sx={{ padding: 2, "&:hover": { backgroundColor: "#f4f4f4" } }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box flex={1} className="px-6 py-4">
        {children}
      </Box>
    </Box>
  );
}
