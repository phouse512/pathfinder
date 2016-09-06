import React from 'react';

var MailSignupForm = React.createClass({
  render: function() {
    return (
      <div dangerouslySetInnerHTML={{__html: '<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"><style type="text/css">#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}</style><div id="mc_embed_signup"><form action="//facebook.us8.list-manage.com/subscribe/post?u=8477f370dac8cdd2ae0240db6&amp;id=3c03b0ae7b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><label for="mce-EMAIL">Subscribe to New Updates</label><input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8477f370dac8cdd2ae0240db6_3c03b0ae7b" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div></div></form></div>'}} />

    );
  }
});

export default MailSignupForm;
