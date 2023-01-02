import { useSearchParams } from "react-router-dom";

const UseSearchParamComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = mode == null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <>
      <div className="comp func-comp route-comp">
        <h1>useSearchParam 테스트</h1>
        <p> detail : {detail}</p>
        <p> mode : {mode}</p>
        <button onClick={onToggleDetail}> onToggleDetail</button>
        <button onClick={onIncreaseMode}> mode +1 </button>
      </div>
    </>
  );
};

export default UseSearchParamComp;
