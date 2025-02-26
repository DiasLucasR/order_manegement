const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const headers = {
  "Content-Type": "application/json",
};

export const fetchCategories = async () => {
    
  const response = await fetch(`${BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};

export const createOrUpdateCategory = async (category: any) => {
  const method = category.id ? "PUT" : "POST";
  const url = category.id ? `${BASE_URL}/categories/${category.id}` : `${BASE_URL}/categories`;

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(category),
  });

  if (!response.ok) {
    throw new Error(`Failed to ${category.id ? "update" : "create"} category`);
  }

  return response.json();
};

export const deleteCategory = async (id: number) => {
  const response = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete category");
  }

  return response.json();
};