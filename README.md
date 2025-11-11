The project is written in TypeScript using tools such as Create React App, Material UI,
Redux, Redux-Saga, moment, and lodash.

To build the project, you need to update Node to 20 or higher.

To run on localhost, navigate to the project's root folder and install the packages using the command

npm install

Then run the command

npm start

The project will run on port 3000 (http://localhost:3000).

The second of the proposed options was chosen as the primary API for loading data:
https://api.fxratesapi.com/latest

Redux-Saga was used to process requests. The results are written to the Redux store as
{[currencyCode]: number}, where number is the exchange rate.
This data is subsequently used for calculations.

The list of currencies available for calculation is taken from the currencies.json file attached to the task.
After loading the data, the list is formatted as
{ [currencyCode: string]: currencyInfo}, where currencyInfo is the information available in the file.
Data is updated from the server every 5 minutes in the background without displaying a loading indicator.
If necessary, the user can click the forced refresh button, in which case they will see a preloader.

When the user selects a specific currency for conversion, the currency code is stored using the
useState hook. This information is also duplicated in the browser's LocalStorage. This allows the user's selected calculation settings to be preserved across page refreshes.

To limit the user's character selection in the Amount numeric field, the
react-number-format library was used.

To enable currency selection using the keyboard, an event is attached to the modal window containing the currency list using addEventListener ("onKeyPress"). When selecting currencies using the keyboard, the scroll bar is also adjusted to ensure the highlighted element remains visible.
When components are destroyed, all attached events are removed to prevent memory leaks.

Also, to optimize application performance, all functions and frequently changing components were wrapped in the useCallback and memo hooks.
