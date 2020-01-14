# A React application with data from the Star Wars API

This application has been built with React using data from the Star Wars API, SWAPI. When the site is loaded Star Wars films are fetched from the API. When clicking a film the characters of film are fetched and presented.

Only class-based components have been used.

The application was created for desktop with media queries for small screens.

The application is deployed @ [https://albertstjarne-starwarsapi.netlify.com/](https://albertstjarne-starwarsapi.netlify.com/)

## WIP - Next steps

As the project is work in progress, please find below next steps to dig into:

- Add spinner when data is fetched (Spinner component is added but not logic yet)
- Stop rerendering with help of PureComponent and by removing inline arrow function
- Get Close button to close the Characters component
- Transforming Characters component into a Modal

## API used

The Star Wars API can be found @ [https://swapi.co/](https://swapi.co/)
<br>
<br>

## Using create-react-app

The project was initialized with create-react-app, [Create React App](https://github.com/facebook/create-react-app)

# Instructions to run the application

Run these commands in the project directory:<br>
Installing dependencies<br>
`$ npm install`

Starting the application in development mode<br>
`$ npm start`

This should open the application in the browser, otherwise go to:<br>
[http://localhost:3000](http://localhost:3000)<br>
The page will reload if you make code edits.

# Screenshots

Filmlist desktop

<img src="filmlist_desktop.png" width=650>

Filmlist and Characters desktop

<img src="filmlist_and_characters_desktop.png" width=650>

Filmlist mobile

<img src="filmlist_mobile.png" width=300>

Filmlist and Characters mobile

<img src="filmlist_and_characters_mobile.png" width=300>

## Author

- Albert Stjärne (https://github.com/AlbertStjarne)
