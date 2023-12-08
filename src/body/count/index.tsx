"use client"
import React from 'react';
import { useEffect } from 'react';
import { count } from 'api/count';

const Index: React.FC<{}> = () => {
  useEffect(() => {
    count();
  }, []);
  return <></>
};

export default Index;
