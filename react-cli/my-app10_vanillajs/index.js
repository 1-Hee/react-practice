// 스토어 만들기
import { createStore } from "redux";
// https://velog.io/@201_steve/redux-createStore-deprecated

console.log("hello parcel");

// DOM 을 담은 객체 생성
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0,
};

// state가 undefined일 때는 initialState를 기본 값으로 사용
function reducer(state = initialState, action) {
  // action.type에 따라 작업 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성을 유지해 주어야 함.
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState(); // 현재 상태를 불러 옵니다.
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

// 구독하기

render();
store.subscribe(render);

divToggle.addEventListener("click", () => {
  store.dispatch(toggleSwitch());
});

btnIncrease.addEventListener("click", () => {
  store.dispatch(increase(1));
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(decrease());
});
