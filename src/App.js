import React, { useEffect, useState } from "react";

const App = () => {
  const [lis, setLis] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  const onAdd = (s) => {
    if (s.trim() !== "") {
      const n = { active: true, text: s };
      setLis([...lis, n]);
      setInputText("");
    }
  };
  const handleDelete = (index) => {
    const toDoList = lis;
    toDoList[index].active = false;

    setLis(
      lis.map((el) => (el.id === index ? { ...el, ["active"]: false } : el))
    );
  };
  const countTask = () => {
    var ans = 0;
    for (i in lis) {
      if (lis[i].active) ans++;
    }
    return ans;
  };
  return (
    <div>
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          onAdd(inputText);
        }}
      >
        Add
      </button>
      <br />
      {countTask()} remainging out of {lis.length} tasks.
      <ul>
        {lis?.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                textDecoration: item && !item.active ? "line-through" : "none"
              }}
              onClick={() => {
                handleDelete(index);
              }}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
