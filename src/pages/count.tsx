// import { useState } from "react";

// function CountHooks() {
//   const [count, setCount] = useState<number>(0);

//   function increment(): void {
//     setCount(count + 1);
//   }

//   function decrement(): void {
//     setCount(count - 1);

//   }

//   return (
//     <div>
//       <p>{count}</p>
//       {/* ボタンを押してsetCountを実行する */}
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }

// export default CountHooks;
import { useReducer, Reducer } from "react";
// useReducerのStateの型を定義
type State = {
  count: number;
};
// useReducerのActionの型を定義
type Action = {
  type: "increment" | "decrement";// Actionのtypeはincrementかdecrementのみ
};
// useReducerのReducerの型を定義
const reducer: Reducer<State, Action> = (state, action) => {
  // Actionのtypeによってstateを変更
  switch (action.type) {
    // Actionのtypeがincrementの場合数値を+1
    case "increment":
      return { count: state.count + 1 };
    // Actionのtypeがdecrementの場合数値を-1
    case "decrement":
      return { count: state.count - 1 };
    // 上記以外の場合はstateをそのまま返す
    default:
      return state;
  }
};
// useReducerを使ってカウントアップ・ダウンを実装
function CountHooks() {
  // useReducerを使ってstateとdispatchを定義
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // カウントアップ・ダウンの関数を定義
  function increment(): void {
    dispatch({ type: "increment" });
    console.log(state.count);
  }
  // カウントアップ・ダウンの関数を定義
  function decrement(): void {
    dispatch({ type: "decrement" });
    console.log(state.count);
  }

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CountHooks;