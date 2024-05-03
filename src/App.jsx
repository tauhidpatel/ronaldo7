import { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Vote from './components/Vote';

function App() {
  const [votes, setVotes] = useState({});

  return (
    <>
    <div className="App">
    <div className="mx-auto max-w-screen-md font-custom">
        <Header />
        <Card votes={votes} />
        <Vote setVotes={setVotes} />
      </div>
    </div>
    </>
  )
}

export default App