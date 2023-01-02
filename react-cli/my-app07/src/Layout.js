import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  // 뒬 ㅗ돌아가기
  const goBack = () => {
    navigate(-1);
  };

  const goArticles = () => {
    // artilces 경로로 이동
    navigate("/articles");
    // 두번째 인자로 객체로 {replace:true} 를 줄 수 있음.
    // 이동하기 직전 페이지를 기록에 남기지 않음.
  };

  return (
    <>
      <div>
        <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
          <p>REACT HEADER</p>
          <button onClick={goBack}>뒤로가기</button>
          <button onClick={goArticles}>글목록가기</button>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
