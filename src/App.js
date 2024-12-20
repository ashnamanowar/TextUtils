import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes, 
//   Route, 
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (cls) => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#02011e';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    // <Router>
    <>
      <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
      {alert && <Alert alert={alert} />}
      <div className="container my-3">
        {/* <Routes> */}
          {/* Updated Route syntax */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" */}
            {/* element={ */}
            <TextForm showAlert={showAlert} heading="Try TextUtils- Word counter, Character counter, Remove Extra spaces " mode={mode} />
            {/* } */}
          {/* /> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
