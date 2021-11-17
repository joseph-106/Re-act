import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log('i run all the time'); /*아무 state가 변할 때마다 실행*/
  useEffect( () => {
    console.log('call the api'); /*처음 1번만 실행*/
  }, []);
  useEffect( () => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); /*keyword가 변화할 때만 실행*/
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]); /*keyword나 counter가 변화할 때만 실행*/
  
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here" 
      />
      <h1>count: {counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;