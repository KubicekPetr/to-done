import './App.css';

import Navbar from './components/navbar';
import Group from './components/group';
import FloatingAction from './components/floating-action';
import Modal from './components/modal';

function App() {
  return (<>
    <Navbar />
    <Group />
    <FloatingAction />
    <Modal />
  </>);
}

export default App;
