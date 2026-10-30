---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## Basic Application Settings

Every application created in Netuno has specific settings that define how it should connect to databases, access keys, and other fundamental parameters.

Netuno uses an intelligent system that organizes these settings according to the environment in which the application is running, whether locally, on an official server, or anywhere else.

Your application's settings are centralized in the **config** folder, located at the root of your project.

**Default path:** `my-app/config`

### Execution Environments

Inside the config folder, files are named according to the environment for which they were created. Netuno automatically loads only the files that correspond to the environment in which it is running at that moment:

- **Development**: Files named `_development` are read only when the Netuno environment is set to development.

- **Production**: Files named `_production` are read only when the Netuno environment is set to production.


### Types of Configuration Files

For each environment, you can use two types of files that work together:

### JSON

- `_development.json` 
- `_production.json`

**Purpose:** Store static definitions and parameterizations.

**Example:** Place database credentials, external API URLs, and fixed settings.

### JS

- `_development.js` 
- `_production.js`

**Purpose:** Execute logic when the configuration is loaded.

**Example:** Dynamically change settings or perform initial tasks and processing required before the application runs fully.


### Defining the General Environment

For your applications to know which configuration they should use, you need to tell the Netuno server which "mode" it is operating in. This global configuration is defined in a single file at the root of Netuno.

1. **Locate the global configuration file:** Go to the root folder where Netuno was installed. Find and open the file named `config.js`.
2. **Find the environment variable:** Inside the file, look for the `config.env` property.
3. **Set the desired environment:** Change the variable's value according to the environment you want to activate.


#### Development Environment
Used while you are programming and testing on your own machine.

```javascript
// In the ./config.js file at the root of Netuno
config.env = 'development'
```

#### Production Environment
Used when your project is finished and running on the official server for users.

```javascript
// In the ./config.js file at the root of Netuno
config.env = 'production'
```

#### Other (Custom) Environments

Netuno is flexible and allows you to create custom environment names, for example: `test`, `staging`, or `pre-production`.

```javascript
// In the ./config.js file at the root of Netuno
config.env = 'test'
```

> The application configuration must start with `_`, have the `.json` extension, and also have a file with the `.js` extension, both for the same environment.

## Git Repository

When using Git to version your application's code, it is essential to ensure the security of your data.

Configuration files generally contain sensitive information, such as database passwords, private API keys, etc. Therefore, **you should never send the real configuration files to the repository**.

To ensure your passwords do not leak and, at the same time, keep the project documented for other developers, follow these two steps:

### 1. Hide the Real Files

At the root of your application, open (or create) the file named `.gitignore`. Add the paths of your `.json` configuration files so that Git ignores them completely.

**Example of what to add to `.gitignore`:**

```text
config/_development.json
config/_production.json
config/_test.json
```

### 2. Sample Configuration File

Create a sample file with the data needed for new developers to configure the project easily.

- Go to your application's config/ folder.
- Create a file named `sample.json`.
- Copy the structure of your `_development.json` into it, leaving only the field names.

See what your **config/sample.json** should look like:

```json
{
  "database": {
    "host": "PUT_THE_HOST_HERE",
    "user": "YOUR_USER",
    "password": "YOUR_PASSWORD"
  }
}
```

#### How to Access Settings in Code

After defining your variables and keys in the configuration files (such as `_development.json`), you will need to use them in your application's logic — for example, when creating a service that connects to an API and needs a saved access *token*.

In Netuno, these settings can be accessed through the native `_app` resource.

#### How to Retrieve the Data

Inside any code executed by the server (such as in the `server/services/` folder), you will use the `_app.config()` function to retrieve the values in your active configuration file.

To understand how the connection is made, imagine that in your configuration file (`config/_development.json`) you have defined the following:

```json
{
  "name": "My Application",
  "version": 2
}
```
 
 To get the value of the "name" key and print it to the server console (log), you would use the following code in your .js service:

```javascript
// 1. Netuno goes into the JSON file, looks for the "name" key, and gets its value.
// 2. Then, it stores that value inside the JavaScript variable we call 'appName'.
let appName = _app.config().getString("name");

// 3. Prints the content of our variable to the Netuno terminal: "My Application"
_log.info(appName);
```

## Custom Settings

In addition to the standard database and server settings, you can create your own configuration variables.

This is very useful for defining business rules, such as "maximum number of items per page" or "email sending interval", without having to change the application code every time these rules change.

These variables are stored inside the `"settings"` block in your JSON configuration files, such as `_development.json` or `_production.json`.  

### JSON Structure and Visibility (Public vs. Private)

When creating your settings, it is essential to separate what the User Interface (Frontend) can see from what should remain protected only on the Server (Backend).

* **Private Variables:** They are inside the `"settings"` block. Only the server has access.
* **Public Variables:** They are inside the `"public"` sub-block. They are sent to the user interface (`ui` folder) of the administrative area, as in dashboard development.

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
}
```

### How to Access Settings in Code
The way to retrieve this data changes depending on where you are programming:

**1. On the Server / Backend (Services)**

To access general or private settings, use the `_app.settings()` resource in your server code (.js files in the server folder).  

```javascript
// Accesses the private variable "emailInterval"
const emailInterval = _app.settings().getInt("emailInterval");

_log.info("The defined interval is: " + emailInterval);
```

**2. In the Interface / Frontend (UI)**

When developing the interface (files in the ui folder), you can access everything defined inside the "public" block. To do this, use the global object `netuno.config.app.settings`.

```javascript
// Accesses the public variable "itemsPerPage" in the frontend
const itemsPerPage = netuno.config.app.settings.itemsPerPage;

console.log("Displaying " + itemsPerPage + " items in the table.");
```
## Conclusion

Netuno's configuration system offers flexibility and structural security for your application. Through it, you can:

* **Manage Multiple Environments:** Create and support different execution contexts (development, production, etc.) with independent parameterizations.
* **Customize Variables:** Use the `settings` block to add settings specific to your business. 
* **Separate Responsibilities:** Isolate and protect settings restricted to the backend from those that should be accessible in the frontend.