import { useState, useEffect } from "react";

function Hello() {
  /*function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("hi :)");
    return byFn;
  }
  useEffect(hiFn, []); 원리*/

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []); /*return 이후 쓰면 컴포넌트가 사라질 때 실행*/
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;