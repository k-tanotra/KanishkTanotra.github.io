"use client"
import LeftRightAnchor from "./Components/LeftRightAnchors"
import "./globals.css"
import MainContent from "./Components/MainContent"
import DATA from './Components/WebsiteData'
import Navigation from './Components/Navigation'
import React, { useState, useEffect } from 'react';
import Loading from './Components/Loading'


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [isPending, setIsPending] = useState(true);
  const [isContent , setIsContent] = useState(true);
  let duration = 4000;
  let delay = 1000;
  let showContent = 1000;

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, duration);
  
    const pendingTimer = setTimeout(() => {
      setIsPending(false);
    }, duration+delay);

    const contentTimer = setTimeout(() => {
      setIsContent(false);
    }, duration+delay+showContent);
  
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(pendingTimer);
      clearTimeout(contentTimer);
    };
  }, [duration, delay]);
  
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-cyan-900 to-gray-900">
       {isPending ? <div className={`transition-opacity ease-in-out duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}><Loading duration={duration}/></div> : (
        <main className={`scrollbar-hide md:scrollbar-default transition-opacity ease-in-out duration-500 ${isContent? 'opacity-0' : 'opacity-100'}`}>
          <Navigation data={DATA.NAVIGATION}/>
          <LeftRightAnchor ANCHORS={DATA.ANCHORS}/>
          <MainContent DATA={DATA}/>
      </main>)}
    </div>
  );
}


{/*bg-gradient-to-br from-slate-900 via-teal-700 to-slate-900*/}