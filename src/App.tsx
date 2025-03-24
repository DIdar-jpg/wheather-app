import React from 'react'
import Header from './components/Layouts/Header/Header.tsx';
import Footer from './components/Layouts/Footer/Footer.tsx';
import WeatherCard from './components/WeatherCard/WeatherCard.tsx';
import WeatherDetail from './components/WeatherDetail.tsx';
import { UseWeather } from './hooks/UseWeather.ts';

const App: React.FC = () => {
  const { data, isLoading, isSuccess, isError, error } = UseWeather();

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Header />
          {data && (
            <main className="container">
              <WeatherCard weather={data} />
              <WeatherDetail />
            </main>
          )}
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
