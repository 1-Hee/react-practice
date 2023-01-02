import { Navigate } from "react-router-dom";

const MyPageComp = ({ log }) => {
  if (!log) {
    return <Navigate to="/login" replace={true} />;
  }
  return <div>마이페이지</div>;
};

export default MyPageComp;
