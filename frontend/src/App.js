import './App.css';

import Navbar from './components/navbar';
import TodoCard from './components/todo-card';

function App() {
  return (<>
    <Navbar />
    <div className="uk-child-width-1-3@s" data-uk-grid>
      <div>
        <h4 className="uk-text-center">Group 1</h4>
        <div id="group1" data-uk-sortable="group: sortable-group">
          <TodoCard />
        </div>
      </div>
      <div>
        <h4 className="uk-text-center">Group 2</h4>
        <div id="group2" data-uk-sortable="group: sortable-group">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard /> 
        </div>
      </div>
      <div>
        <h4 className="uk-text-center">Group 3</h4>
        <div id="group3" data-uk-sortable="group: sortable-group">
          <TodoCard />
        </div>
      </div>
    </div>
  </>);
}

export default App;
