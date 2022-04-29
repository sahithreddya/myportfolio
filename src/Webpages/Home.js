import React from 'react';
import './Home.css';

import HomePage from '../Components/HomePage';
import Work from '../Components/Work';
import Separator from '../Components/Separator';
import Footer from '../Components/Footer';
import { useRef } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const Home = () => {
  const ref = useRef();
  const scroll = () => ref?.current?.scrollIntoView({ behavior: "smooth" });
  // const test = () => {console.log("test func")};

  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqj6n7y9KPfz-yIuaI8-aasP7--dSSb8A",
  authDomain: "myportfolio-sahith.firebaseapp.com",
  projectId: "myportfolio-sahith",
  storageBucket: "myportfolio-sahith.appspot.com",
  messagingSenderId: "447178102220",
  appId: "1:447178102220:web:8318b45176bc7e4d807969",
  measurementId: "G-930QZSNLGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = getFirestore(app);

// async function getTestdata(db) {
//   const testCol = collection(db, 'test-collection');
//   const testData = await getDocs(testCol);
//   const cityList = testData.docs.map(doc => doc.data());
//   console.log(cityList);
// }

// getTestdata(db);
logEvent(analytics, 'app_initialized');

  return (
    <div className="Home">
      <div className="HeaderBar">
        <div className="HeaderLogo"/>
      </div>
      <HomePage scrollFunc={() => scroll()} test={() => test()}/>
      <Separator/>
      <Work ref={ref}/>
      <Footer/>
    </div>
  );
}


export default Home;
