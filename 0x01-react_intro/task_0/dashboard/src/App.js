import './App.css';

export default function App() {
  return (
    <div className='container'>
      <div className='App-header'>
        <img src={require('./ALX_logo.jpg')} alt='ALX logo' />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>
          <em>Copyright 2020 - ALX</em>
        </p>
      </div>
    </div>
  );
}
