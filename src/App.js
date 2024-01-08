import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);