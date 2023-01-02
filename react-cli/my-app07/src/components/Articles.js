import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  const numbers = [1, 2, 3];
  const artilceList = numbers.map((number) => (
    <li>
      <Link to={`/articles/${number}`}>게시글 {number}</Link>
    </li>
  ));
  return (
    <>
      <div className="comp func-comp route-comp">
        <Outlet />
        <ul>{artilceList}</ul>
      </div>
    </>
  );
};

export default Articles;
