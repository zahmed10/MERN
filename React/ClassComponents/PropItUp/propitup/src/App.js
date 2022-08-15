import './App.css';
import MyNewComponent from './components';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard first="Jane" last="Doe" age={45} color="Black"/>
      <PersonCard first="John" last="Smith" age={88} color="Brown"/>
      <PersonCard first="Millard" last="Fillmore" age={50} color="Brown"/>
      <PersonCard first="Maria" last="Smith" age={62} color="Brown"/>
    </div>
  );
}

export default App;
