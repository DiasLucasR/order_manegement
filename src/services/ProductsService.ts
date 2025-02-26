

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const headers = {
  "Content-Type": "application/json",
};

export const fetchProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  };
  
  export const createOrUpdateProduct = async (product: any) => {
    const method = product.id ? "PUT" : "POST";
    const url = product.id ? `${BASE_URL}/products/${product.id}` : `${BASE_URL}/products`;
  
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(product),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to submit product");
    }
  
    return response.json();
  };
  
  export const deleteProduct = async (id: number) => {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
  
    if (!response.ok) {
      throw new Error("Failed to delete product");
    }
  
    return response.json();
  };