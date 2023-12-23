import { useState } from "react";

function AllergyCheckbox() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        アレルギーあり
      </label>
      <p>アレルギーは{isChecked ? "あり" : "なし"}</p>
    </div>
  );
}

export default AllergyCheckbox;