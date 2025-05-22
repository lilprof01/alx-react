import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <div className='App-body'>
          <Login />
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}
