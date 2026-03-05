---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## Basic Configuration of an Application

Every application created in Netuno has specific settings that define how it should connect to databases, access keys, and other fundamental parameters.

Netuno uses an intelligent system that organizes these settings according to the environment in which the application is running, whether locally, on an official server, or anywhere else.

Your application's settings are centralized in the **config** folder, located in the root of your project.

**Default path:** `my-app/config`

### Execution Environments

Within the config folder, files are named according to the environment for which they were created. Netuno automatically loads only the files that correspond to the environment in which it is currently running:

- **Development**: Files named `_development` are only read when the Netuno environment is set to development.

- **Production**: Files named `_production` are only read when the Netuno environment is set to production.

### Configuration File Types

For each environment, you can use two types of files that work together:

### JSON

- `_development.json`
- `_production.json`

**Function:** Store static definitions and parameters.

**Example:** Store database credentials, external API URLs, and fixed configurations.

### JS

- `_development.js`
- `_production.js`

**Function:** Execute logic when the configuration is loaded.

**Example:** Dynamically change configurations or perform initial tasks and processing necessary before the application runs completely.

### Defining the General Environment

To ensure your applications know which configuration to use, you need to inform the Netuno server which "mode" it is operating in. This global configuration is defined in a single file in the Netuno root directory.

1. **Locate the global configuration file:** Go to the root folder where Netuno was installed. Find and open the file called `config.js`.

2. **Find the environment variable:** Inside the file, look for the `config.env` property.

3. **Define the desired environment:** Change the value of the variable according to the environment you want to activate.

#### Development Environment

Used while you are programming and testing on your own machine.

```javascript
// In the ./config.js file in the Netuno root directory
config.env = 'development'
```
#### Production Environment
Used when your project is finished and running on the official server for users.

```javascript
// In the ./config.js file in the Netuno root directory
config.env = 'production'
```
#### Other Environments (Custom)

Netuno is flexible and allows you to create custom environment names, for example: `test`, `homologation` or `staging`.

```javascript
// In the ./config.js file in the Netuno root directory
config.env = 'test'
```

> The application configuration must start with `_`, have the `.json` extension and also a file with the `.js` extension, both from the same environment.

## GIT Repository

When using Git to version your application's code, it's crucial to ensure the security of your data.

Configuration files often contain sensitive information, such as database passwords, private API keys, etc. Therefore, **you should never send the actual configuration files to the repository**.

To ensure your passwords don't leak and, at the same time, keep the project documented for other developers, follow these two steps:

### 1. Hide the Actual Files

In the root of your application, open (or create) a file called `.gitignore`. Add the paths to your `.json` configuration files so that Git completely ignores them.

**Example of what to add to `.gitignore`:**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. Sample Configuration File

Create a sample file with the necessary data so that new developers can easily configure the project.

- Go to the config/ folder of your application.
- Create a file called `sample.json`.
- Copy the structure of your `_development.json` into it, leaving only the field names.

Here's how your **config/sample.json** should look:

```json
{
  "database": {
    "host": "PUT_HOST_HERE",
    "user": "YOUR_USERNAME",
    "password": "YOUR_PASSWORD"
  }
}
```

#### How to Access Settings in Code

After defining your variables and keys in configuration files (such as `_development.json`), you will need to use them in your application logic — for example, when creating a service that connects to an API and needs a saved access token.

In Netuno, these settings can be accessed through the native `_app` resource.

#### How to Retrieve Data

Within any code executed by the server (such as in the `server/services/` folder), you will use the `_app.config()` function to retrieve the values ​​from your active configuration file.

To understand how the connection is made, imagine that in your configuration file (`config/_development.json`) you have defined the following:

```json
{
  "name": "My Application",
  "version": 2
}
```

To get the value of the "name" key and print it to the server's console (log), you would use the following code in your .js service:

```javascript
// 1. Netuno goes to the JSON file, looks for the "name" key and gets its value.
// 2. Then, it stores this value in the JavaScript variable that we call 'nameApp'.
let nameApp = _app.config().getString("name");

// 3. Prints the contents of our variable in the Netuno terminal: "My Application"
_log.info(nameApp);
```
## Custom Settings

In addition to the standard database and server settings, you can create your own configuration variables.

This is very useful for defining business rules, such as "maximum number of items per page" or "email sending interval," without having to change the application code every time these rules change.

These variables are stored within the `"settings"` block in your JSON configuration files, such as `_development.json` or `_production.json`.

### JSON Structure and Visibility (Public vs. Private)

When creating your settings, it is essential to separate what the User Interface (Frontend) can see and what should be protected only on the Server (Backend).

* **Private Variables:** These are located within the `"settings"` block. Only the server has access.

* **Public Variables:** These are located within the `"public"` sub-block. They are sent to the user interface (folder `ui`), in the administrative area, as in dashboard development.

**Example of how to structure your `.json` file:**

```json
{
  ...
  "settings": {
    "public": {
      "itemsPerPage": 10
    },
    "emailInterval": 10
  }
  ...
}
```

### How to Access Settings in Code
The way to retrieve this data changes depending on where you are programming:

**1. On the Server / Backend (Services)**

To access general or private settings, use the `_app.settings()` function in your server code (the .js files in the server folder).

```javascript
// Accesses the private variable "emailInterval"
const emailInterval = _app.settings().getInt("emailInterval");

_log.info("The defined interval is: " + emailInterval);
```
**2. On the Interface / Frontend (UI)**

In the interface development (files in the ui folder), you can access everything defined within the "public" block. To do this, use the global object `netuno.config.app.settings`.

```javascript
// Accesses the public variable "itemsPerPage" in the frontend
const itemsPerPage = netuno.config.app.settings.itemsPerPage; console.log("Displaying " + itemsPerPage + " items in the table.");
```
## Conclusion

The Netuno configuration system offers flexibility and structural security for your application. Through it, it is possible to:

* **Manage Multiple Environments:** Create and support different execution contexts (development, production, etc.) with independent parameterizations.

* **Customize Variables:** Use the `settings` block to add specific configurations for your business.

* **Separate Responsibilities:** Isolate and protect configurations restricted to the backend from those that should be accessible on the frontend.