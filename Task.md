# Angular Frontend Developer
* Please make sure to read this WHOLE file before you start

## The setup
* Please provide an Angular 8(latest) application
* The app will be built using node:11
* The application needs to support i18n and should be provided in 2 languages of your choice
  * You do not need to translate, just prepare tech wise
* The application is supposed to be a SPA
* It's your decision how the app is being served, feel free to include any Docker file or npm command you want
  * If you are not able to provide this step please describe exactly what is needed

## Documents to provide
* Your sourceode(.ts, assets, configs, ...)
* A Readme.md file that holds the following information
  * How to build your project
  * How to serve your project
  * Changes needed in case of branching out a car brand
    * 4-5 sentences should be enough, just make sure your idea is clear, not too many details needed
  * Changes to add brand specfic content pages
* ~ Number of hours this task took you, preferably per step/part

## The actual task
* The following app is supposed to be a car dealer's website
* The root page(/) should redirect to the default locale

### On the main page /:locale
* Please provide a layout according to Screenshot1.jpg, feel free to improve the design, just include the given components at the spots mentioned
  * Top left - navigation
  * Top right - language selector
  * Bottom - footer
  * Center - text
  * Bottom right - InfoBox

### Mercedes sub page /:locale/mercedes
* The layout stays the same, please just adjust the text to
  * Headline: Mercedes
  * Subline: The best or nothing

### Mercedes sub page /:locale/bmw
* The layout stays the same, please just adjust the text to
  * Headline: BWM
  * Subline: The ultimate driving machine

### Cookie Disclaimer
* On the bottom right is a floating box that is displayed until it's closed via the red "X"
  * Once closed the box will not reopen for the user
* Further more the box holds the users IP
  * Use https://api.ipify.org?format=json to determine it, the result shall be cached for the session

## Important notes
* The company may at some point branch out all their Mercedes/BMW cars
  * therefor they will need a new website that only holds the subjected part of the application, consider that in your app design
    * Please describe what would needed to be done
* The brands may get additional pages that are brand specific, the navi would in that case need to adjust
  * Please describe what would needed to be done
