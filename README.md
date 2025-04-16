# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


## general notes
### commit "databaseservice.js read"
The databaseservice.js file provides a service layer for database operations in your notes app. Let me break down what it currently does:

It imports the database instance from your Appwrite configuration (appwrite.js)

It defines a service object with a single method:

ListDocuments(dbId, colId):
This is an async function that retrieves documents from a specified database collection
Takes two parameters:
dbId: Database ID
colId: Collection ID
Returns:
An array of documents if successful
An error object if the operation fails
The function includes error handling using try-catch:

If successful, returns the documents array
If it fails, logs the error and returns an error message
This is a basic setup for database operations, currently only implementing the read functionality (listing documents). It's designed to work with Appwrite's database service, abstracting the database interaction details from the rest of your application.

You'll likely want to add more methods to this service later for:

Creating new notes
Updating existing notes
Deleting notes
Fetching single notes