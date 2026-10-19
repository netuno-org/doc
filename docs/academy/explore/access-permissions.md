---
id: access-permissions
title: Access and Permissions
sidebar_label: Access and Permissions
---

How to manage users and groups and ensure application security.

## Introduction

Security is one of the fundamental pillars of any application. Whether for a simple internal application or a complex system with thousands of external users via API.

Netuno natively offers a robust **Access Control and Permissions** system, providing the tools needed to manage security centrally and efficiently. It eliminates the need to develop these features from scratch.

The main security mechanisms include:

- User and group management.
- Data permission control for data management.
- Detailed history of authentication attempts.
- Automatic IP blocking after consecutive failed access attempts.
- Integrated authentication with LDAP, Google, GitHub, Discord, etc.
- JWT authentication module for the front end.
- Among others...

## User Management

This involves administering the individual accounts that access the platform. Each user, service, or integration that needs to enter the system must have a unique user record.

In Netuno's user management area, you have full control over the lifecycle of these accounts:
- **Creation**: Registration of new team members or customers.
- **Maintenance**: Updating emails, changing passwords, and registration data.
- **Access Control**: Quick account blocking (deactivation) without needing to delete historical data.

:::tip Visual Guide
For detailed information about User Management, see the [Interface Guide: Users and Groups](/docs/academy/ui/groups-users)
:::


## Group Management

Authorization rules are defined through Groups, which establish which menus, forms, services, and data each user is allowed to access or manipulate. Instead of configuring permissions individually, the ideal approach is to define the rules in the Group and then associate users with it. This procedure ensures:

- **Scalability:** Ease of managing hundreds of users.
- **Security:** Lower risk of accidentally granting improper access.
- **Organization:** Clear separation between Administrators, Managers, Supervisors, and general users.

Netuno already provides native groups such as `dev` and `admin`, and gives you full autonomy to create custom groups to meet your application's business rules.

:::tip Visual Guide
For detailed information about Group Management, see the [Interface Guide: Users and Groups](/docs/academy/ui/groups-users)
:::


## Data Permission Control

To ensure a group's functionality or a user's permissions, it is crucial to establish which data they are authorized to manipulate. In Netuno, access control is detailed and applied directly to your application's Forms (tables).

The system uses a permission matrix that makes it possible to define, for each feature, whether a given group has the proper authorization to:

- **Read:** Only view records.
- **Write:** Insert and edit records in the database.
- **Delete:** Permanently remove records.

This flexibility ensures the protection of sensitive data, since each employee has access restricted only to the information essential for carrying out their tasks.

:::tip Visual Guide
For detailed information about how to configure data permissions, see the [Interface Guide: Users and Groups](/docs/academy/ui/groups-users)
:::

## Authentication History

To ensure transparency and control, all access attempts (successful or invalid) are recorded and can be viewed in the Authentication History.

The system monitors and stores detailed information about each user login attempt:

- **Source IP:** The network address from which the request originated.
- **Time:** The exact time of the action.
- **Access:** Whether access was allowed, denied, or blocked.

#### Access Icon Legend

🟩 **Lock/check_mark, in green:** Indicates success. The user provided the correct credentials and the login was authorized. It also indicates that the source IP was unblocked.

🟧 **Icon with "X", in orange:** Indicates the number of invalid attempts.

🟥 **Lock in red:** Indicates blocking of the source IP.

## Automatic Blocking

Netuno has an active security system designed to protect your application against attacks and unauthorized access.

When suspicious activities are detected, such as multiple consecutive invalid login attempts, the system automatically blocks the source IP address.

Once blocked, the IP will not be able to make new requests for a determined period or until the block is manually removed.

### Configure Blocking Rules

This rule is defined in your application environment's **configuration files**, "development.json" or "production.json".

#### 1. Locate the configuration file

At the root of your project, navigate to the `config` folder. Open the file corresponding to the environment you want to protect:

* For development: `_development.json`

* For production: `_production.json`

#### 2. Insert the protection code
Inside the JSON file, locate the `auth` section. If it does not exist, insert the `attempts` block as shown in the example below:

```json
{
 ...
 "auth": {
    "attempts": {
        "interval": 60,
        "maxFails": 3
    }
  }
}
```

#### 3. Understanding the parameters

* `interval`: Time window in **minutes** (example: 60 minutes = 1 hour).

* `maxFails`: Maximum number of failures allowed within this interval before blocking.


#### 4. System behavior

- After automatic blocking, the user is prevented from accessing the application.

- By default, the system is configured for three invalid attempts with a one-hour block. After this period, attempts are allowed again.

- This process can be configured according to your application's needs.


### Unblock Through the Interface

Only a user with "Administrator" permission can release access directly through the Back Office without needing to access the database.

1. Access the application menu in "View" mode, and click the **"Configuration > Users"** section.
![user configuration section](/docs/assets/academy/explore/access-permissions/user-configuration-section-pt.png)

2. In the **"Edit existing user"** field, select the desired user.
![select an existing user](/docs/assets/academy/explore/access-permissions/select-an-existing-user-pt.png)

3. In the **"Authentication History"** section, check whether the "Access" status displays the green "Lock" icon;
![authentication history section](/docs/assets/academy/explore/access-permissions/section-authentication-history-pt.png)

4. Click the **Clock** icon to view the user's complete access list.
![authentication history](/docs/assets/academy/explore/access-permissions/authentication-history-pt.png)

5. Click the green lock in the **"Access"** column to unblock the user. After this action, a success message is displayed.

The release is immediate, allowing the user to attempt logging in again.


## Integrated Authentication

Your application may require more sophisticated sign-in methods, especially if you are building a mobile app or integrating with a corporate network.

Netuno was designed to be flexible and integrate with your organization's ecosystem. In addition to standard login (username and password), the platform supports various industry authentication protocols.

This allows you to implement Single Sign-On strategies, where users access the system using credentials they already have, centralizing access management.

**Corporate Environments:** Compatibility with user directories (such as LDAP and Active Directory), ideal for intranets and internal systems.

**Social Login (OAuth):** Ability to integrate with providers such as Google, Microsoft, GitHub, among others, making registration and access easier in public applications.

## Token Authentication (JWT)

For projects that use a dedicated front end (such as React websites, Vue.js sites, or mobile apps), Netuno's traditional login screen is not used. In these scenarios, the JWT (JSON Web Token) standard is adopted.

Netuno offers a native service that automatically generates and validates these tokens, ensuring security and efficiency in API communication.

:::tip Visual Guide
For more information on how to implement and configure JWT in your configuration files, see the [JWT Authentication Guide](/docs/academy/server/services/jwt)
:::

## Conclusion

Mastering Netuno's security features is essential for the health of your project. By correctly using the user management, group management, and history monitoring tools, you have built an environment that balances data protection with ease of use.

This ensures that your Netuno system is:

- **Secure:** Protecting sensitive information against unauthorized access.

- **Organized:** Establishing clear hierarchies and responsibilities.

- **Scalable:** Ready to grow with modern integrations.

**Maintain good practices:** Periodically review group permissions and check the access history to keep your environment healthy.