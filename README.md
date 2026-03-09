## Project Overview

Tap'nPay mobile-first fintech app built with React + Tailwind + Typescript

## Pages implemented

- All Auth screens
- Home, History, Transaction details, More, Settings pages

## Features implemented

- Dark mode
- Form validation (phone, email and password validation)
- Show/hide password toggle icon
- Remember me checkbox on login
- Loading state during authentication
- Display wallet balance with animated number counter
- Transaction list with mock data (more than 10)
- Filter transactions by type
- Search functionality for transactions
- Bottom navbar

## Setup and installation instruction

- Clone the public repo from github `https://github.com/popsam22/eazipay`
- run npm install to install all project dependencies
- run npm run dev to start the application

## Framework

I chose React for this project because of its massive ecosystem, flexibility and ease of maintenance

## Design decisions and trade-offs

- I used React + Typescript for type safety.
- Tailwind for custom design tokens because its utility-first.
- React router for simple client-side navigation.
- Context API for dark mode.

## Porting to another framework

Vue 3

- JSX → .vue SFCs
- useState → ref/reactive
- React Context → Pinia
- React Router → Vue Router

Angular

- components become .ts + .html + .css files
- Hooks → Angular lifecycle hooks + RxJS
- React Router → Angular Router

## Challenges faced and solution

The one challenge i faced was implementing dark mode. After going through Tailwind's documentation, i found the solution to the problem which was to use the darkMode class which is manually controlled by the DarkModeContext.

## Screenshots of application

![Screenshot 1](src/assets/Screenshot%202026-03-09%20at%2010.41.56.png)
![Screenshot 2](src/assets/Screenshot%202026-03-09%20at%2010.42.17.png)
![Screenshot 3](src/assets/Screenshot%202026-03-09%20at%2010.42.30.png)
![Screenshot 4](src/assets/Screenshot%202026-03-09%20at%2010.42.48.png)
![Screenshot 5](src/assets/Screenshot%202026-03-09%20at%2010.43.10.png)
