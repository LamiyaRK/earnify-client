import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router"; // ✅ useRouter should be from react-router-dom

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { token, logout } = useContext(AuthContext); // ✅ useContext, not use
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ REQUEST INTERCEPTOR
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // ✅ RESPONSE INTERCEPTOR
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      (error) => {
        const status = error?.response?.status;
        if (status === 403) {
          navigate("/unauthorized");
        } else if (status === 401) {
          logout()
            .then(() => {
              navigate("/login");
            })
            .catch(() => {});
        }
        return Promise.reject(error);
      }
    );

    // ✅ Cleanup interceptors on unmount
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [token, logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
