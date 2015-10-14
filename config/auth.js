// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '300403907220-a9cl0s84q7uc5hsve808jktoi632anlm.apps.googleusercontent.com',
        'clientSecret'  : '9jERb0vGaNMXBgoKvtpShWvB',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
