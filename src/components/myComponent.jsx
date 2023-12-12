import React, { useState } from "react";

const MyComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  console.log(isChecked);
  return (
    <div className={"w-80 h-80 border border-red-800"} onClick={toggleChecked}>
      <input
        type="checkbox"
        id="myCheckbox"
        checked={isChecked}
        onChange={() => {}}
      />
      <label htmlFor="myCheckbox">Click me</label>
    </div>
  );
};

export default MyComponent;
