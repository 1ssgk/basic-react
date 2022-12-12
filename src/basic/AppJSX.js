import logo from './logo.svg';
import './App.css';

function App() {
  const name ='test';
  const list = ['우유','딸기','바나나'];

  return (
    <>
      <h2 className='orange'>{`Hello! ${name}`}</h2>
      <h2>Hello2</h2>
      <ul>
        {list.map((item)=>(
            <li>{item}</li>
          ))}
      </ul>
      
    </>
  );
}

export default App;
