import Header from './components/Layouts/Header/Header.jsx';
import Footer from './components/Layouts/Footer/Footer.jsx';
import WheatherCard from './components/WheatherCard.jsx';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import WheatherDetail from './components/WheatherDetail.jsx';



function App() {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Header/>
          <main className='container'>
            <WheatherCard/>
            <WheatherDetail/>
          </main>
          <Footer/>
        </Suspense>
      </RecoilRoot>

    </>
  );
}

export default App;
