
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const headers = {
  "Content-Type": "application/json",
};
export const fetchOrders = async () => {
    const response = await fetch(`${BASE_URL}/orders`);
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
    return response.json();
  };
  
  export const createOrUpdateOrder = async (order: any) => {
    const method = order.id ? "PUT" : "POST";
    const url = order.id ? `${BASE_URL}/orders/${order.id}` : `${BASE_URL}/orders`;
  
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(order),
    });
  
    if (!response.ok) {
      throw new Error(`Failed to ${order.id ? "update" : "create"} order`);
    }
  
    return response.json();
  };
  
  export const deleteOrder = async (id: number) => {
    const response = await fetch(`${BASE_URL}/orders/${id}`, {
      method: "DELETE",
    });
  
    if (!response.ok) {
      throw new Error("Failed to delete order");
    }
  
    return response.json();
  };