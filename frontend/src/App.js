import './App.css';

function App() {
  return (
    <nav className='uk-navbar-container' data-uk-navbar>
      <div className='uk-navbar-left'>
        <a href='#!' className='uk-navbar-item'>To-Done</a>
      </div>

      <div className='uk-navbar-right'>
        <div>
          <a href='#!' className='uk-navbar-toggle' data-uk-search-icon></a>
          <div className='uk-drop' data-uk-drop='mode: click; pos: left-center; offset: 0'>
            <form className='uk-search-navbar uk-width-1-1'>
              <input type="search" className="uk-search-input" placeholder="search..." autoFocus />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
