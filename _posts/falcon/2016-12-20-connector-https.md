---
layout: connectors-tutorial-single_layout
title: Use HTTPS when sending data to Chart Studio
subtitle: Set up your Plotly Database Connector to use HTTPS protocol when transferring data to Chart Studio.
permalink: /database-connectors/https/
imageurl:  https://www.gorilla-cannabis-seeds.co.uk/__asset/securelogo
state: active
tags: advanced
section: Basics
meta_description: Follow these steps to Set up your Plotly Database Connector to use HTTPS protocol
popularity: featured
actioncall-url: https://github.com/plotly/electron-sql-connector/releases
#redirect_to: https://help.plot.ly/database-connectors/personal-login/#step-6-automatic-ssl

steps:
 - title: Create your keys
   sub-steps:
    - copy: "Note that setting an https connection currently only works for Mac and Linux operating systems."
    - copy: "If you are using Mac or Linux, your connector will display an *HTTPS* section at the bottom. Clicking on the title will display its contents."
      img: "![](/static/images/database-connectors/https/open.png)"
    - copy: "To get started we will create personal keys for the *connector.plot.ly* domain. Click on the first item as shown below."
      img: "![](/static/images/database-connectors/https/first.png)"
    - copy: "You will be notified that you are generating self-signed certificate and that your password is required."
      img: "![](/static/images/database-connectors/https/message.png)"
    - copy: "Enter your admin password to generate the keys."
      img: "![](/static/images/database-connectors/https/sudo.png)"
    - copy: "Once done, the first item will turn green. This may take a couple of seconds."
      img: "![](/static/images/database-connectors/https/first-done.png)"
    - copy: "Secondly, we will create a redirect for the *connector.plot.ly* domain. Click on the second item to do so."
      img: "![](/static/images/database-connectors/https/second.png)"
    - copy: "Once done, this item will turn green as well. This should be done almost instantly."
      img: "![](/static/images/database-connectors/https/second-done.png)"
 - title: Add certificate to your keychain
   sub-steps:
    - copy: "Having generated the self-signed keys we need to ask our browsers to accept them. This requires us to add the self-signed certificate to our keychain. Click on the third item to get started."
      img: "![](/static/images/database-connectors/https/third.png)"
    - copy: "Click on *View instructions* to see the steps required."
      img: "![](/static/images/database-connectors/https/click-instructions.png)"
    - copy: "Visit the domain of your connector by clicking on the link as shown below."
      img: "![](/static/images/database-connectors/https/third-1.png)"
    - copy: "The browser will notify you that the self-signed certificate is not recognized. Click on the warning sign in the search bar of your browser."
      img: "![](/static/images/database-connectors/https/third-2.png)"
    - copy: "Click on *Details*."
      img: "![](/static/images/database-connectors/https/third-3.png)"
    - copy: "Click on *View Certificate*."
      img: "![](/static/images/database-connectors/https/third-4.png)"
    - copy: "You will see a description of the certificate you have generated. Click on it and drag it on your desktop."
      img: "![](/static/images/database-connectors/https/third-5.png)"
    - copy: "Once the certificate item appears on your desktop, double-click on it."
      img: "![](/static/images/database-connectors/https/third-6.png)"
    - copy: "Your keychain app will open, the certificate will have been added and you may find it in the certificates tab."
      img: "![](/static/images/database-connectors/https/third-7.png)"
    - copy: "It should appear as so. Double click on the certificate item."
      img: "![](/static/images/database-connectors/https/third-8.png)"
    - copy: "Click on the *Trust* drop-down."
      img: "![](/static/images/database-connectors/https/third-9.png)"
    - copy: "Choose the option to *Always trust* this certificate."
      img: "![](/static/images/database-connectors/https/third-10.png)"
    - copy: "If you return back to your browser and refresh *https://connector.plot.ly:9495/status* you should see a page demonstrating that your HTTPS request was accepted wihtout a browser warning."
      img: "![](/static/images/database-connectors/https/third-11.png)"
 - title: Restart your Database Connector
   sub-steps:
    - copy: "Close the application and open it again. If you go back to the HTTPS section you shall see that the steps have disappeared and the domain of your connector shall be displayed."
      img: "![](/static/images/database-connectors/https/done.png)"


---
