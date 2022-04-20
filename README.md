# meet

Meet is an application for users to find events based on their location. It will be a serverless progressive web application(PWA) using React and built using the test-driven development(TDD) technique. The app will be utilizing Google Calendar API.

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a user,
I should be able to expand or collapse an event,
So that I can see or hide the event´s details

Scenario 1: An event element is collapsed by default

-

Scenario 2: User can expand an event to see its details

Given an event element is collapsed by default,
When the user expands the element,
Then the user can see the event´s details

Scenario 3: User can collapse an event to hide its details

Given an event element is expanded,
When the user collapses the element,
Then the user can hide the event´s details


FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user,
I should be able to specify a number of events,
So that I can see the amount of events

Scenario 1: When user hasn’t specified a number, 32 is the default number

-

Scenario 2: User can change the number of events they want to see

Given the default number is 32,
When the user changes the default number,
Then the number of events set by the user will be displayed


FEATURE 4: USE THE APP WHEN OFFLINE

As a developer,
I should be able to show cached data when there´s no internet connection and show an error when user change settings,
So that the user can use the app when offline

Scenario 1: Show cached data when there’s no internet connection

Given there is no internet connection,
When the user uses the app,
Then cached data should be displayed

Scenario 2: Show error when user changes the settings (city, time range)

Given there is no internet connection,
When the user changes settings,
Then and error should be displayed

FEATURE 5: DATA VISUALIZATION

As a user, 
I should be able to see a chart showing the upcoming events in each city, 
So that I know what events are organized in which city

Scenario 1: Show a chart with the number of upcoming events in each city

Given there are events in a city,
When the user chooses that city,
Then the number of upcoming events in that city shall be shown
