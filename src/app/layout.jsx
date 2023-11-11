"use client"
import Link from 'next/link';
import Script from 'next/script';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import data from 'data';

const queryClient = new QueryClient();
const Layout = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <title>Vuong Nguyen - Sr. Frontend Developer - Sydney, NSW, Australia</title>
      <meta name="description" content="Vuong Nguyen Quoc - Sr. Frontend Dev - Sydney, NSW" />
      <meta name="keywords" content="Vuong Nguyen Quoc, Sr. Frontend Dev, Sydney, vuong.qnguyen10@gmail.com, React, Nextjs, html/css" />

      {/* <!-- Favicons --> */}
      <link href="assets/img/code-square.svg" rel="icon" />
      <link href="assets/img/code-square.svg" rel="apple-touch-icon" />

      {/* <!-- Google Fonts --> */}
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=optional" rel="stylesheet" />

      {/* <!-- Vendor CSS Files --> */}
      <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
      <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
      {/* <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" /> */}
      <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />

      {/* <!-- Template Main CSS File --> */}
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
          {/* <ul>
              <li><div className="nav-link active" data-ref="#header">Home</div></li>
              <li><a className="nav-link" href="/nft">NFT</a></li>
              <li><div className="nav-link" data-ref="#about">About</div></li>
              <li><div className="nav-link" data-ref="#resume">Resume</div></li>
              <li><div className="nav-link" data-ref="#contact">Contact</div></li>
            </ul> */}
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

      </header >
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </QueryClientProvider>
      {/* <Script src="assets/vendor/purecounter/purecounter_vanilla.js" />
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
        <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
        <Script src="assets/vendor/waypoints/noframework.waypoints.js" />
        <Script src="assets/vendor/php-email-form/validate.js" /> */}
      <Script src="assets/js/main.js" />
    </body>
  </html >
);

export default Layout;
