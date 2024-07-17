import { useMemo, useState } from "react";

const complexCalulation = (numberValue: number) => {
  console.log("some complex stuff");

  let longNumber = 0;
  for (let i = 0; i < 20000000; i++) {
    longNumber += i;
  }

  return longNumber * numberValue;
};

export const UseMemoExample = () => {
  const [number, setNumber] = useState(2);
  const [text, setText] = useState("");

  const handleSetNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10);

    setNumber(randomNumber);
  };

  const handleChangeText = (value: string) => {
    setText(value);
  };
  // WITHOUT useMemo
  const result = useMemo(() => complexCalulation(number), [number]);
  console.log("result of complex calculation:", result);

  return (
    <div>
      <h2>Use Memo Example</h2>
      <p>{text}</p>
      <button onClick={handleSetNumber}>Change Number</button>

      <input type="text" onChange={e => handleChangeText(e.target.value)} />
    </div>
  );
};

// useCallback is used to memoize functions
// useMemo is used to memoize values
