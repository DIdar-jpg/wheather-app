import Header from './components/Layouts/Header/Header.jsx';
import Footer from './components/Layouts/Footer/Footer.jsx';
import WheatherCard from './components/WeatherCard/WeatherCard.jsx';
import WheatherDetail from './components/WheatherDetail.jsx';

import { UseWeather } from './hooks/UseWeather.js'

function App() {

  const { data } = UseWeather()

  return (
    <>
      <Header/>
      {
        data ? 
          <main className='container'>
            <WheatherCard weather={data}/>
            <WheatherDetail/>
          </main>
        : null 
      }
      <Footer/>
    </>
  );
}
export default App;
