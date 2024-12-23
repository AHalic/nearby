# Nearby

This project is a mobile app benefits club application that provides users with coupons to redeem at nearby establishments. Developed as a portfolio project, it was built to explore and learn React Native development.

## Features

- View establishments with available coupons.
- Redeem coupons through the app by scanning the QR code.

The project is divided in two parts:
- Mobile App
- Api

The database is seeded with sample data, featuring establishments located in São Paulo.


Below is a screen recording of the app in action, showcasing its features and functionality:

<p align="center">
  <img alt="App Demo" src="/docs/test.gif" width="40%">
</p>


## Setup

To set up the project, first clone the repository. Then follow the steps below to configure the API and mobile servers.


#### Api
Navigate to the `api` directory and install the dependencies using

```bash
npm install
```

Then run the server with
```bash
npm start
```

The api will not be running locally.


#### Mobile

Navigate to the `mobile` directory and install the dependencies using

```bash
npm install
```

Then in the `mobile` directory, create a file called `.env`. 
Add the following variable to it, replacing the string with the URL of your API server.

```bash
EXPO_PUBLIC_API_HOST=http://IP:PORT
```

Finally start the app with:
```bash
npx expo start
```

Follow the [Expo Go documentation](https://docs.expo.dev/get-started/set-up-your-environment/) and use either an emulator on your computer, or your physical phone to run the app.

## Technologies
- [**React Native**](https://reactnative.dev/): `0.76.5`
- [**Expo**](https://expo.dev/): `~52.0.18`
- [**Axios**](https://axios-http.com/docs/intro): `^1.7.9`
- [**React Native Maps**](https://docs.expo.dev/versions/latest/sdk/map-view/): `1.18.0`
- [**Expo Camera**](https://docs.expo.dev/versions/latest/sdk/camera/): `~16.0.10`
- [**TypeScript**](https://www.typescriptlang.org/): `~5.3.3`
