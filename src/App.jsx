import Header from './components/Layouts/Header/Header.tsx';
import Footer from './components/Layouts/Footer/Footer.tsx';
import WheatherCard from './components/WeatherCard/WeatherCard.jsx';
import WheatherDetail from './components/WheatherDetail.jsx';
import { Suspense } from 'react'

import { UseWeather } from './hooks/UseWeather.js'

function App() {

  const { data, isLoading, isSuccess, isError, error } = UseWeather()
  console.log(data)
  const testFunc = () => { 
    if (isLoading) {
      return <div>Loading</div>
    } 
    else{
      return(
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
      )
    }
  }
  return (
    <>
      {testFunc()}
    </>
  );
}
export default App;
