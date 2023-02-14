import React, { useContext, } from 'react';
import './App.css';
import { RootStoreContext } from './components/store/rootStore';
import AppWebParallax from './components/AppWebParallax';
import MobileHome from './components/mobile/MobileHome';
import { observer } from 'mobx-react';
import ResponsiveComponent from './components/ResponsiveComponent';
import MobileApp from './components/mobile/MobileApp';


function App() {

  const rootStore = useContext(RootStoreContext);

  const { isMobileMediaQuery, setIsMobileMediaQuery } = rootStore.responsiveStore;



  return (
    <>
          <ResponsiveComponent></ResponsiveComponent>

      {!isMobileMediaQuery ?
        <AppWebParallax />
        : 
        <MobileApp/>
      }
    </>

  );
}

export default observer(App);
