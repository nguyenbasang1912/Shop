import axiosInstance from '../axiosInstance';

const fetchChildrenCategories = async () => {
  try {
    const response = await axiosInstance.get('/api/category/child-categories');
    if (response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    throw error;
  }
};

const fetchProducts = async (page = 1, type = '', payload) => {
  try {
    const response = await axiosInstance.get(
      `/api/product?page=${page}&type=${type}&payload=${payload}`,
    );
    if (response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    throw error;
  }
};

const fetchDetailProduct = async productId => {
  try {
    const response = await axiosInstance.get(
      `/api/product/detail/${productId}`,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export {fetchChildrenCategories, fetchProducts, fetchDetailProduct};
