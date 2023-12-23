// import { useState } from "react";

// function DropdownHook() {
//   // 予約のstateを定義
//   const [meal, setMeal] = useState<string>("");
//   // mealsの型を定義
//   type Meals = {
//     value: string;
//     label: string;
//   };
//   // 予約の選択肢を定義
//   const meals: Meals[] = [
//     { value: "朝食", label: "朝食" },
//     { value: "ランチ", label: "ランチ" },
//     { value: "ディナー", label: "ディナー" },
//     { value: "ティータイム", label: "ティータイム" },
//   ];

//   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setMeal(event.target.value);
//   };

//   return (
//     <div>
//       <select value={meal} onChange={handleChange}>
//         <option value="">-- 予約を選択 --</option>
//         {meals.map((meal) => (
//           <option key={meal.value} value={meal.value}>
//             {meal.label}
//           </option>
//         ))}
//       </select>
//       {meal && <p>選択された予約: {meal}</p>}
//     </div>
//   );
// }

// export default DropdownHook;
import { useReducer, Reducer } from "react";

type State = {
  meal: string;
};

type Action = {
  type: "SET_MEAL";
  payload: string;
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "SET_MEAL":
      return { meal: action.payload };
    default:
      return state;
  }
};

function DropdownHook() {
  const [state, dispatch] = useReducer(reducer, { meal: "" });

  type Meals = {
    value: string;
    label: string;
  };

  const meals: Meals[] = [
    { value: "朝食", label: "朝食" },
    { value: "ランチ", label: "ランチ" },
    { value: "ディナー", label: "ディナー" },
    { value: "ティータイム", label: "ティータイム" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_MEAL", payload: event.target.value });
  };

  return (
    <div>
      <select value={state.meal} onChange={handleChange}>
        <option value="">-- 予約を選択 --</option>
        {meals.map((meal) => (
          <option key={meal.value} value={meal.value}>
            {meal.label}
          </option>
        ))}
      </select>
      {state.meal && <p>選択された予約: {state.meal}</p>}
    </div>
  );
}

export default DropdownHook;