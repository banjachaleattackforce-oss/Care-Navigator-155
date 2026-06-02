import Script from "next/script";

export function NetlifyIdentityWidget() {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="afterInteractive" />
      <Script id="netlify-identity-redirect" strategy="afterInteractive">
        {`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", function(user) {
              if (!user) {
                window.netlifyIdentity.on("login", function() {
                  if (window.location.pathname !== "/admin/") {
                    window.location.href = "/admin/";
                  }
                });
              }
            });
          }
        `}
      </Script>
    </>
  );
}
