import "./App.css";
import "./asset/Custom.css";
import "./asset/Router.css";

import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

// 컴포넌트 삽입
import HomeComp from "./components/HomeComp";
import AboutComp from "./components/AboutComp";
import ProfileComp01 from "./components/ProfileComp01";
import ProfileComp02 from "./components/ProfileComp02";
import UseSearchParamComp from "./components/UseSearchParamComp";
// 중첩 라우트용 리스트
import Article from "./components/pages/Article";
import Articles from "./components/Articles";

const App = () => {
  const [name] = useState("Router");
  const names = ["jo", "lee", "hey"];
  const linkList = names.map((name) => (
    <Link to={`/profiles/${name}`} element={ProfileComp01}>
      {name}
    </Link>
  ));
  return (
    <>
      <div className="main-header">
        <p>
          React의 <span>{name}</span> 에 대해 알아보기
        </p>
      </div>
      <div className="header-menu">
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        {linkList}
        <Link to="/profiles/comp02">쿼리스트링</Link>
        <Link to="/profiles/us-comp01">쿼리스트링-파싱</Link>
        <Link to="/articles">글목록</Link>
      </div>

      <Routes>
        {/* <Route path="/" element={<HomeComp />} /> */}
        <Route index element={<HomeComp />} /> {/* 위와 같은 의미! */}
        <Route path="/about" element={<AboutComp />} />
        {/* URL 파라미터로 링크 형성 */}
        <Route path="/profiles/:username" element={<ProfileComp01 />} />
        <Route path="/profiles/comp02" element={<ProfileComp02 />} />
        <Route path="/profiles/us-comp01" element={<UseSearchParamComp />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
