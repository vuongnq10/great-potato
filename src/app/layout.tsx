"use client"
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import data from 'data';
import Count from 'body/count';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <title>Vuong Nguyen - Sr. Frontend Developer - Sydney, NSW, Australia</title>
      <meta name="description" content="Vuong Nguyen Quoc - Sr. Frontend Dev - Sydney, NSW" />
      <meta name="keywords" content="Vuong Nguyen Quoc, Sr. Frontend Dev, Sydney, vuong.qnguyen10@gmail.com, React, Nextjs, html/css" />
      <meta property="og:title" content="Vuong Nguyen Quoc - Sr. Frontend Dev - Sydney, NSW" />
      <meta property="og:description" content="Vuong Nguyen Quoc, Sr. Frontend Dev, Sydney, vuong.qnguyen10@gmail.com, React, Nextjs, html/css" />
      <meta property="og:image" content="assets/img/me.jpeg" />
      <meta property="og:url" content="https://vuongnq.netlify.app/" />
      <meta property="og:site_name" content="vuongnq.netlify.app/" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://vuongnq.netlify.app/" />

      <link href="assets/img/code-square.svg" rel="icon" />
      <link href="assets/img/code-square.svg" rel="apple-touch-icon" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=optional" rel="stylesheet" />
      <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
      <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
      <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />
    </head>
    <body>

      <header id="header" className="header-top" style={{ padding: '0 24px', zIndex: 999999 }}>
        <h1>{data.name}</h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link active" href="/">Home</Link></li>
            <li><Link className="nav-link" href="/nft">NFT</Link></li>
            <li><Link className="nav-link" href="/about">About</Link></li>
            <li><Link className="nav-link" href="/resume">Resume</Link></li>
            <li><Link className="nav-link" href="/contact">Contact</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

      </header >
      <QueryClientProvider client={queryClient}>
        {children}
        <Count />
      </QueryClientProvider>
      <Script src="assets/js/main.js" />
    </body>
  </html >
);

export default Layout;
