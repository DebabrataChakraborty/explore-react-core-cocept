import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {

  function handleClick() {
    alert('button Clicked');
  }
  const addToFive = (num) => {
    alert(num + 5);
  }


  return (
    <>
      <h3>React Core concept 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addToFive(3)}>Add</button>

    </>
  )
}

export default App
