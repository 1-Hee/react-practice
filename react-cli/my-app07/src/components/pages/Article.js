import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <>
      <h1>게시글 {id}</h1>
    </>
  );
};

export default Article;
