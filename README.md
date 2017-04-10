# Aerial Grace

This project is a webpage for the Aerial acrobatics and dance company "Aerial Grace", where you can find all the company members and details. The admin section is for updating or editing company member information by the company director.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

# Website Link

To browse a live version of this project, navigate in your browser (Chrome recommended) to: https://aerial-grace.firebaseapp.com/

## Behaviors

|Behavior|Output|
|--------|------|
|Browse all members of Aerial Grace company|Homepage displays full list of all company members|
|Viewer browses homepage and clicks on company member|Dynamic page displays with details on that individual company member|
|User selects to view aerial silks performers only|Page only displays members who perform aerial silks|
|Administrator enters new company member "Shersten Finley, Aerial straps"|Page displays list of members with "Shersten Finley" added, member is added to database|
|Administrator selects to edit member and makes changes|Page and database is updated with new values|
|Administrator selects to delete a member who has left the company|Member is removed from full list and database|

## Installation Instructions

* `git clone https://github.com/ericaw21/aerial-grace>` https://github.com/ericaw21/aerial-grace
* `cd aerial-grace`
* Set up your Firebase API Key by creating a file to paste your API keys called `api-keys.ts` at this directory: `src/app/api-keys.ts`
* Paste your Firebase-provided keys into that document as follows:
`export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };`
* `npm install`
* `bower install`
* `npm install --save @ng-bootstrap/ng-bootstrap`
* `npm install angularfire2 firebase --save`
* `npm install angular2-materialize`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Copyright (c) 2017 Erica Wright All Rights Reserved.
