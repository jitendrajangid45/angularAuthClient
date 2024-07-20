# AngularAuth0

## Configure Auth0 - Get Your Application Keys
https://manage.auth0.com/

## Configure Callback URLs, Configure Logout URLs, Configure Allowed Web Origins
http://localhost:4200

## Install the Auth0 Angular SDK
> npm install @auth0/auth0-angular

## Register and configure the authentication module - app.module.ts
Import the AuthModule type from the @auth0/auth0-angular

## Add Login to Your Application
Import the AuthService type from the SDK, and to create a login button using the loginWithRedirect() method from the AuthService service class.

> implementation: header component

## Show User Profile Information
The Auth0 Angular SDK helps you retrieve the profile information associated with logged-in users quickly in whatever component you need, such as their name or profile picture, to personalize the user interface. The profile information is available through the user$ observable exposed by the AuthService service.

> implementation: homepage component

# Youtube Tutorial
https://youtu.be/TDaxfqcSroM