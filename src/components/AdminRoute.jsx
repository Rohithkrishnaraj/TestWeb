import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const AdminRoute = ({
  children,
}) => {

  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {

    return <Navigate to="/" />;

  }

if (user.role_type !== "ADMIN") {

    return <Navigate to="/" />;

  }

  return children;
};

export default AdminRoute;