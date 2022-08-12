# :seedling: Meet

Meet is an application for users to find events based on their location. It is a serverless progressive web application ("PWA") using React and built using test-driven development ("TDD") technique. The application uses the Google Calendar API to fetch upcoming events.

## :speech_balloon: User Stories

- As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

- As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

- As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

- As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

- As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

- As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

## :key: Key Features 

- Filter events by city.

- Show/hide event details.

- Specify number of events.

- Use the app when offline.

- Add an app shortcut to the home screen.

- View a chart showing the number of upcoming events by city.

## :hammer_and_wrench: Built With 

- HTML

- CSS

- JavaScript
 
- [React](https://reactjs.org/)

- [Jest](https://jestjs.io/), [Cucumber](https://cucumber.io/) and [Puppeteer](https://github.com/puppeteer/puppeteer) for Testing

- [Google Calendar API](https://developers.google.com/calendar/api) and [OAuth2](https://oauth.net/2/)

- [AWS Lambda](https://aws.amazon.com/lambda/)

- [Recharts](https://recharts.org/)

## :page_with_curl: Technical Requirements

- The app must be a React application. 

- The app must be built using the TDD technique.

- The app must use the Google Calendar API and OAuth2 authentication flow.

- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.

- The app’s code must be hosted in a Git repository on GitHub.

- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.

- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.

- The app must pass Lighthouse’s PWA checklist.

- The app must work offline or in slow network conditions with the help of a service worker.

- Users may be able to install the app on desktop and add the app to their home screen on mobile.

- The app must be deployed on GitHub Pages.

- The API call must use React axios and async/await.

- The app must implement an alert system using an OOP approach to show information to the user.

- The app must make use of data visualization (recharts preferred).

- The app must be covered by tests with a coverage rate >= 90%.

- The app must be monitored using an online monitoring tool.

## :man_technologist: Get Started

Download the repository on your machine 
```
https://github.com/Popol2411/meet.git
```

## :rocket: <a href="https://myflix-popol2411.netlify.app/">Live Demo</a> 





## Scenarios

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a user,
I should be able to expand or collapse an event,
So that I can see or hide the event´s details

#### Scenario 1: An event element is collapsed by default

Given the user has not selected a location or specified a number,
Then the event element is collapsed by default

#### Scenario 2: User can expand an event to see its details

Given an event element is collapsed by default,
When the user expands the element,
Then the user can see the event´s details

#### Scenario 3: User can collapse an event to hide its details

Given an event element is expanded,
When the user collapses the element,
Then the user can hide the event´s details


### FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user,
I should be able to specify a number of events,
So that I can see the amount of events

#### Scenario 1: When user hasn’t specified a number, 32 is the default number

Given the user hasn´t specified a number,
And the default number is displayed,
Then the number 32 shall be displayed

#### Scenario 2: User can change the number of events they want to see

Given the default number is 32,
When the user changes the default number,
Then the number of events set by the user will be displayed


### FEATURE 4: USE THE APP WHEN OFFLINE

As a developer,
I should be able to show cached data when there´s no internet connection and show an error when user change settings,
So that the user can use the app when offline

#### Scenario 1: Show cached data when there’s no internet connection

Given there is no internet connection,
When the user uses the app,
Then cached data should be displayed

#### Scenario 2: Show error when user changes the settings (city, time range)

Given there is no internet connection,
When the user changes settings,
Then and error should be displayed

### FEATURE 5: DATA VISUALIZATION

As a user, 
I should be able to see a chart showing the upcoming events in each city, 
So that I know what events are organized in which city

#### Scenario 1: Show a chart with the number of upcoming events in each city

Given there are events in a city,
When the user chooses that city,
Then the number of upcoming events in that city shall be shown
