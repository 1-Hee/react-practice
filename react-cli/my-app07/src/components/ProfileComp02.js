import { useLocation } from "react-router-dom";

const ProfileComp02 = () => {
  const location = useLocation();
  return (
    <>
      <div className="comp func-comp route-comp">
        <h1>쿼리스트링 예제</h1>
        <p>location 객체 정보</p>
        <p>path-name : {location.pathname}</p>
        <p>search : {location.search}</p>
        <p>hash : {location.hash}</p>
        <p>state : {location.state}</p>
        <p>key : {location.key}</p>
      </div>
    </>
  );
};

export default ProfileComp02;
