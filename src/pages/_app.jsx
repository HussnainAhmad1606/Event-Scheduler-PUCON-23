"use client";

import Script from "next/script";

function MyApp({ Component, pageProps }) {

  return (
    <>

<Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
<Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
    
      
     
        <>
        <Component {...pageProps} />
        
        </>
    
    </>
  );
}

export default MyApp;