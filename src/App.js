import './App.css';
import Posts from './components/posts';
import SearchTodos from './components/todos';
import SearchUsers from './components/users';
function App() {
  return (
    <div className='App'>
      <div className='main'>
        <div className='wrapper'>
          <div className='items'>
            <Posts />
          </div>
          <div className='items'>
            <SearchTodos />
          </div>
          <div className='items'>
            <SearchUsers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
