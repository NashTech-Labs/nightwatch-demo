module.exports = {
    'First Test': function (browser) {
      browser
        .url('https://www.google.co.in/')
        .waitForElementVisible('#APjFqb')
        .assert.title('Google')
        .end();
    },

    'This test should search for nightwatch': function (browser) {
      browser
        .url('https://www.google.co.in/')
        .waitForElementVisible('#APjFqb')
        .setValue('#APjFqb', 'nightwatch js')
        .assert.title('Google')
        .end();
    }
  };

