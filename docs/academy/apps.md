---
sidebar_position: 5
id: apps
title: Apps
sidebar_label: Apps
---

_Netuno_ is a multi application server that spread this access to all applications through domains and subdomains.

Multiple web applications that can be both public and private, as _Netuno_ builds backoffices so by default the applications always have a private access however, the public interface will be optional.

When developing multiple applications on _Netuno_, they can either be disconnected or even linked at the database level.

Meaning that we can share the same database for multiple applications or have separate databases for each application.

## Decoupled Applications in Multiple Databases

Does not make sense to share the same database, when refering to completely different applications, with distinc scopes.

Imagine that you have an application to send a Newsletter, another to manage Books and another to manage Deliveries, none of each need information stored in another application, beacuse they are completely distinc.

So there is no reason to share the same database, although each one has its own database:

![Decoupled applications.](/docs/assets/business/apps-db-en-decoupled.svg "Decoupled applications.")

To summarize, none of the applications knows the data stored in the other applications, although its entire function is independent of the other existing applications.

## Linked applications in the same Database

While working with applications that need to share information and that have a large amount of data, database sharing is the most viable solution in terms of performance, however not the best solution relating to security and data integrity.

Therefore, for security and integrity reasons, large web applications are usually created where everything is centralized in a complex application and that uses its exclusive database, if the application needs external data then it can integrate with other databases and web services if it is required.

_Netuno_ already provides all the tools for development of this kind of applications and also offers a good solution for shared database.

Security and Data Integrity always was a big issue, However with _Netuno_ when several applications share the same database they are automatically limited to their tables that are related to their forms.

Also allows sharing the form, additionally its table by the other applications that are linked to the database.

Imagine the scenario in which one of you have an application for customer management, second for supplier management and a third for invoicing, because you will have invoices from suppliers to be paid as well as from customers to receive.

>The client app should not share data with the supplier app, because they are different apps.

Therefore, the billing application needs to be integrated with both applications to obtain data from customers and suppliers in order to be able to relate invoices and manage collections and payments in different situations.

![Coupled applications.](/docs/assets/business/apps-db-en-coupled.svg "Coupled applications.")

To ensure that the applications do not interfere with each other's sensitive data, it is also recommended to use different database accesses for each application, and you can even control your access to the tables via the database to ensure that there is no unwanted interference.

>Moreover, _Netuno_ performs the control to separate what is from each app and also what is shared between them.

## Address of each App

_Netuno_ automatically deliver access to applications across domain and subdomain.

When a request arrives at _Netuno_ the domain is processed as follows

> http://my-app-subdomain.my-domain.org/

_Netuno_ looks a first point if there is an application with this name. If there is then this will be the application receiving the request.

If there is not, then the order will be delivered to the standard application (_default_).

This domain resolution also works when there is a sub-subdomain, as example:

> http://my-app-sub-subdomain.subdomain.my-domain.org/

And here we go, it defines which application will receive the request to be processed.

_Netuno_ also allows you to define an exact address with a domain for the application, just define what will be the exact address that the application will work with.

> Using the automatic way to process domains allows applications to function in the vast majority of cases, if there are still situations that require a completely different and specific address for the application to work, then it is necessary to define it in your configuration.
