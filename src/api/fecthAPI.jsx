import api from "../api/axiosConfig";

export const fetchApi = async (url) => {
  try {

    const response = await api.get(url);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: "Không thể tải danh sách" };
  }
};