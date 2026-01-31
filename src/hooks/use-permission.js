import { jwtDecode } from "jwt-decode";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const usePermission = () => {
  const { token } = useSelector((state) => state.auth);

  const permissions = useMemo(() => {
    if (!token) return [];

    try {
      const decoded = jwtDecode(token);

      return Array.isArray(decoded?.permissions) ? decoded.permissions : [];
    } catch (err) {
      console.error("Invalid JWT:", err);
      return [];
    }
  }, [token]);

  return { permissions };
};
