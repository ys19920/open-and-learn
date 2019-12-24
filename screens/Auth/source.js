module.exports = function() {
  return `<html>
  <body>
    <div id = 'amazon-root'></div>
    <a href id="LoginWithAmazon">
    <img
      border="0"
      alt="Login with Amazon"
      src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
      width="156"
      height="32"
    />
  </a>
  </body>
  <script type="text/javascript">
  window.onAmazonLoginReady = function() {
    amazon.Login.setClientId('amzn1.application-oa2-client.6dd34364fd8e4ff8ac906e9f13f687ad');
  };

  (function(d) {
    var a = d.createElement('script');
    a.type = 'text/javascript';
    a.async = true;
    a.id = 'amazon-login-sdk';
    a.src = 'https://assets.loginwithamazon.com/sdk/na/login1.js';
    console.log(a);
    d.getElementById('amazon-root').appendChild(a);
  })(document);

  document.getElementById('LoginWithAmazon').onclick = function() {
    options = {};
    options.scope = 'profile';
    options.scope_data = {
      profile: { essential: false }
    };
    amazon.Login.authorize(options, 'http://localhost:8080');
    window.alert("ajsdf")
    return false;
  };
  </script>
</html>`;
};
