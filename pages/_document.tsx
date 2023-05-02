import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html>
      <Head>
         {/* Required meta tags */}
         <meta charSet="utf-8" />
       
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* <link rel="stylesheet" href="css/bootstrap4.css"> */}
        <link href="/css/bootstrap5.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/carousel.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
     
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <!-- J query --> */}
     <script src="/js/jquery3.6.js"></script>

     {/* <!-- <script src="js/bootstrap4.js"></script> --> */}
     <script src="/js/bootstrap5.js"></script>
     {/* <script src="/js/script.js"></script> */}
      </body>  
    </Html>
  );
}