import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
import Section from './Components/component/Section';
import preloader from './Components/component/Images/perloadercircle.gif'
function App() {
  const [show, setShow] = useState(false);
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), 5 * 1000);
      return () => {
        clearTimeout(timer1);
      };
    },[]);
  return (
    <>
      {show ? <Section/> : 
      <>
        <div className='per-container bg-light'>
           <div>
            <img src={preloader} alt="..." width={100} height={200} className={'img-fluid'} />
           </div>
        </div>
      </>

      }
    </>
  );
}

export default App;