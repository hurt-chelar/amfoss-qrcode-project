# QRCode Badge Generator App
## Description 
This is a QR Code Generator App used for collection the information of people through a form and generating the Badge with QR equivalent. 

### Application Case 
At some point in your career you will probably find yourself involved helping to coordinate a company-sponsored event or a local technical Meetup. It's not uncommon in these types of gatherings for attendees to want to exchange contact information between themselves.

But how to do that? Attendees could always exchange business cards or write down each others email or social media account names, but that can be slow and error prone. Wouldn't it be nice to be able to scan a each others badges to capture this type of information quickly and more dependably?

If you answered 'Yes!" to this question then QRCode Badge Generator is an app you will be interested in creating. The objective of this application is to collect a meeting attendee's name, email address, Twitter, and GitHub account names and print a name badge with a QRcode that can be scanned using a smartphone.

## Sources 
+ For this app we have used NPM package QRCode Generator to encode the information we collect from the attendee in a QR code.
+ We have used fonts from Google Fonts in CSS. 


## Features 
+  User can see an input panel containing input fields for the attendee name, email address, Twitter account name, GitHub account name, and 'Cancel' and 'Create' buttons.
+  User can enter data into these input fields. Note that attendee name and email address are required, but the Twitter and GitHub account names are optional fields.
+  User can click the 'Cancel' button to clear all input fields as well as the badge panel if it has been created.
+  User can click the 'Create' button to generated an image of the attendees name badge. 
+  User can see an error messages if :
  + Required fields are empty. 
  + A first name and last name have not been entered. 
  + Email input field isn't properly fromatted email address. 
  + Twitter account name dosen't start with @. 
+  User can see an badge panel displayed on screen containing this infromation, plus a QR code encoded with this information. 
+   User can make corrections to the input fields and click 'Create' to update the contents of the badge panel.
+   
