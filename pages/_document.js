import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '1885228362366345');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Quora Pixel */}
        <Script
          id="quora-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(q,e,v,n,t,s){
                if(q.qp) return;
                n=q.qp=function(){
                  n.qp ? n.qp.apply(n,arguments) : n.queue.push(arguments);
                };
                n.queue=[];
                t=document.createElement(e);t.async=!0;t.src=v;
                s=document.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s);
              }(window,'script','https://a.quora.com/qevents.js');

              qp('init','fad7cbedecc143a0bc7e833f12774f9b');
              qp('track','ViewContent');
            `,
          }}
        />

        {/* Existing Scripts */}
        <script src="https://accounts.google.com/gsi/client" async defer></script>

        {/* Fonts & Styles */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* (all your existing font + CSS links stay exactly the same) */}
      </Head>

      <body>
        {/* Meta Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1881713682562408&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Quora Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://q.quora.com/_/ad/fad7cbedecc143a0bc7e833f12774f9b/pixel?tag=ViewContent&noscript=1"
          />
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
