## React User Display App

This React app fetches and displays user data from the https://reqres.in/api/users?page=1 API. The app consists of three components - App, Navbar, and User.

## Installation

## To run this app locally, you need to follow these steps:

Clone this repository to your local machine.
Open the terminal and navigate to the project folder.
Run npm install to install the necessary dependencies.
Run npm start to start the development server.
Open your browser and navigate to http://localhost:3000/ to view the app.
App Components

## App Component
The App component is the main component that renders the Navbar and User components. The component fetches user data from the API and passes it as a prop to the User component.

## Navbar Component
The Navbar component contains a simple header and a button. The button triggers the showUsers function, which is passed as a prop from the App component. This function fetches the user data from the API and updates the state of the App component.

##User Component
The User component is responsible for displaying the user data. The component receives two props - loading and user. The loading prop is a boolean value that indicates whether the data is still being fetched or not. The user prop is an array of user objects, each containing the user's ID, name, email, and avatar.

If the loading prop is true, the component displays a blank screen. If the loading prop is false, the component maps over the user prop and renders a card for each user. Each card displays the user's name, email, and avatar.

## Conclusion

This React app demonstrates how to fetch data from an API and display it in a user-friendly way. With the help of the fetch function and React's component-based architecture, it's easy to build powerful and dynamic applications that can communicate with external APIs.