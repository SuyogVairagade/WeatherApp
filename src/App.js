import logo from './logo.svg';
import './App.css';
import { Input } from './components/input';
import { Card } from './components/card';
import { Button } from './components/button';

function App() {
  return (
    <div className="App">
      <Input/>
      <Button value="Search Button"/>
      <Card/>
    </div>
  );
}

export default App;
