import Header from './components/Layouts/Header.jsx';
import Input from './components/Layouts/Input.jsx';
import CardWrap from './components/WheatherCard/CardWrap.jsx';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import WheatherDetail from './components/WheatherDetail.jsx';



function App() {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Header/>
          <CardWrap/>
          <WheatherDetail/>
        </Suspense>
      </RecoilRoot>

    </>
  );
}

export default App;
