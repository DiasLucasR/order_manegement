"use client"
import CategoryForm from "@/app/components/CategoryForm";
import CategoryList from "@/app/components/CategoryList/indes";
import HeaderSection from "@/app/components/HeaderSection";
import { ModalComponent } from "@/app/components/Modal";
import { fetchCategories } from "@/services/CategoriesService";
import React, { useState, useEffect } from "react";


const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [openForm, setOpenForm] = useState(false);


  useEffect(() => {
    fetchCategories().then(res => setCategories(res.data))
  }, []);

  return (
    <div>
      <HeaderSection title="Categories" buttonLabel="New Category" onButtonClick={() => setOpenForm(true)} />

      <CategoryList categories={categories} />

      <ModalComponent open={openForm} onClose={() => setOpenForm(false)}>
      <CategoryForm />
    </ModalComponent>
    </div>
  );
};

export default CategoriesPage;
