import { NavLink, Link, Outlet } from "react-router-dom";

const Articles = () => {
  const articleStyle = {
    color: "green",
    fontSize: 24,
  };

  const numbers = [1, 2, 3];
  const LinkList = numbers.map((number) => (
    <li>
      <Link to={`/articles/${number}`}>게시글 {number}</Link>
    </li>
  ));
  const NavLinkList = numbers.map((number) => (
    <li>
      <NavLink to={`/articles/${number}`} style={({ isActive }) => (isActive ? articleStyle : undefined)}>
        게시글 {number}
      </NavLink>
    </li>
  ));

  return (
    <>
      <div className="comp func-comp route-comp">
        <Outlet />
        {/*<ul>{LinkList}</ul> */}
        <ul>{NavLinkList}</ul>
      </div>
    </>
  );
};

export default Articles;
