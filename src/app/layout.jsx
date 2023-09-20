import Script from 'next/script'

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Vuong Nguyen - Sr. Frontend Developer - Sydney, NSW, Australia</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* <!-- Favicons --> */}
        <link href="assets/img/code-square.svg" rel="icon" />
        <link href="assets/img/code-square.svg" rel="apple-touch-icon" />

        {/* <!-- Google Fonts --> */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=optional" rel="stylesheet" />

        {/* <!-- Vendor CSS Files --> */}
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* <!-- Template Main CSS File --> */}
        <link href="assets/css/style.css" rel="stylesheet" />

        {/* <!-- =======================================================
          * Template Name: Personal
          * Updated: Aug 30 2023 with Bootstrap v5.3.1
          * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
          * Author: BootstrapMade.com
          * License: https://bootstrapmade.com/license/
          ======================================================== --> */}
      </head>
      <body>
        {children}
        <Script src="assets/vendor/purecounter/purecounter_vanilla.js" />
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
        <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
        <Script src="assets/vendor/waypoints/noframework.waypoints.js" />
        <Script src="assets/vendor/php-email-form/validate.js" />

        <Script src="assets/js/main.js" />
      </body>
    </html >
  );
};

export default Layout;
