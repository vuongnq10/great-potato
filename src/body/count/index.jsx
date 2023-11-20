"use client"
import { useEffect } from 'react';
import { count } from 'api/count';

const Index = () => {
  useEffect(() => {
    count({
      referrer: document?.referrer,
      timeZone: new Date(),
      screenWidth: screen?.width,
      screenHeight: screen?.height,
      userAgent: navigator?.userAgent,
      lang: navigator?.language,
      platform: navigator?.platform,
    });
  }, []);
  return <></>
};

export default Index;
