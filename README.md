AgeGate
--------

**AgeGate** is a set of code snippets that enable Bigcommerce store owners with age restricted content to intercept visitors and verify their age before enabling them to view content on the store.

How it Works
--------

1. We intercept them before they view your website, present a disclaimer and ask for their age.
2. If they are over the configured age, we save a cookie on their browser that enables them browse through your website. If they are under the configured age, we redirect them to a page or website you specify.
*Fun Fact: The cookie is named "Bouncer". If you inspect your cookies and see "Bouncer", say hi.*

Things you can Configure
-
1. The disclaimer
2. The intercepting page (a.k.a. 'gate')
3. The minimum age allowed to view the website
4. Age of the appended browser cookie (How long they can view your website without verifying their age after they have verified it the first time)
5. The page or website they are redirected to if they are underage (a.k.a. 'enforcer') - Redirects to http://imgflip.com/i/4nmp0 by default

How to Install
-
1. Upload all the files in this repo to your /content directory via WebDAV (https://support.bigcommerce.com/questions/1513/How+do+I+connect+to+WebDAV%3F)
2. Edit 1-gate.js and 2-enforcer.js with your own details. The code is decently commented.
2. Append `<script type="text/javascript" src="/content/1-gate.js"></script>` right before `</head>` in the HTMLHead.html panel
3. Append `<script type="text/javascript" src="/content/2-enforcer.js"></script>` to the end of the Footer.html panel

F.A.Q.
-
1. Does this work if Javascript is disabled? - Yes! We use a `<noscript>` tag to block them off and tell them to enable Javascript.
2. Does this affect my SEO? - No! We overlay the content, we don't block it off. You might need to set your meta description on all pages so that search engines don't pick the disclaimer up as an excerpt instead.
3. And does this work on the Bigcommerce mobile theme? - Not by default. Repeat the same steps on the Mobile theme. More details on how to customize that here- https://support.bigcommerce.com/questions/1725/How+do+I+customize+my+mobile+theme%3F
4. How awesome are you guys? - Very awesome!
5. Can I see how it looks first? - Certainly! Here goes - http://screencast.com/t/absSvh399c

####Need help installing, customizing design or troubleshooting?

Contact us at Rotesource (https://rotesource.com). We'll help out for a little fee.

We hope you like it. Please, feel free to contact us if you have any questions/suggestions or find an issue.
