import { useState } from "react";

function AgeRadioButtons() {
  const [ageGroup, setAgeGroup] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeGroup(event.target.value);
  };

  return (
    <div>
      <label>
        <input type="radio" value="成人" checked={ageGroup === "成人"} onChange={handleChange} />
        成人
      </label>
      <label>
        <input type="radio" value="未成年" checked={ageGroup === "未成年"} onChange={handleChange} />
        未成年
      </label>
      <label>
        <input type="radio" value="老人" checked={ageGroup === "老人"} onChange={handleChange} />
        老人
      </label>
      <label>
        <input type="radio" value="子供" checked={ageGroup === "子供"} onChange={handleChange} />
        子供
      </label>
      {ageGroup && <p>選択された年齢層: {ageGroup}</p>}
    </div>
  );
}

export default AgeRadioButtons;
