 <link rel="icon" sizes="192x192" href="%PUBLIC_URL%/static/images/icon-192.png" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/static/images/app-icon.png" />
    <title>Braytech</title>
    <script>
      try {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistration('/').then(function(registration) {
            if (registration) {
              registration.unregister();

              setTimeout(() => {
                window.location.reload();
              }, 250);
            }
          });
        }
      } catch (e) {

      }
    </script>
  </head>
  <body>
    <noscript>You need to enable JavaScript in order to use Braytech.</noscript>
