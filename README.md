###The task:

Use Redux to initialize your state container and to dispatch actions, and render the data using react.
Request the endpoint asynchronously and store this in Redux.
Nice to haves are Sagas and the use of immutable data.
You can use `create-react-app` as your starting point.
The goal is to show a gallery of apartments with their images and some other data that's available from the API (title, price, etc.).
You can use any CSS solution you're familiar with.
The API endpoint is: https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien

### Setup
This application is created with `create-react-app`

To run it locally you need to:
1. Clone repository `git clone git@github.com:ZorianaPro/apartments_gallery_holidu.git`
2. Run command `npm install`.
3. Run command `npm start`. It runs the app in the development mode.
4. Open http://localhost:3000 to view it in the browser.

Application testing:
1. To run tests use the command `npm test`
2. To check test coverage run `npm test -- --ci --coverage`
