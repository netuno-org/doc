---
sidebar_position: 2
id: apps
title: Apps
---

Netuno is a multi-application server that distributes access to applications through domains and subdomains.

Multiple web applications can be either public or private, as Netuno builds back offices. So, as a rule, applications always have private access, but the public interface is optional.

When developing multiple applications in Netuno, they can be either decoupled or even coupled at the database level.

This means that we can share the same database across multiple applications or have separate databases for each application.

## Decoupled Applications Across Multiple Databases

When dealing with applications with completely distinct scopes, it makes no sense for them to share the same database.

Imagine you have an application for sending newsletters, another for managing books, and another for managing deliveries, and none of them needs information stored in another application; they are completely independent.

So there is no reason for them to share the same database; instead, each should have its own database:

![Decoupled applications.](/docs/assets/business/apps-db-pt-desacopladas.svg "Decoupled applications.")

In this way, no application knows the information stored in the other applications, and all its operation is independent of the other existing applications.

## Coupled Applications on the Same Database

When working with applications that need to share information and there may be a large volume of data, sharing the database is the most viable solution in terms of performance, but it is not the best solution in terms of data security and integrity.

Thus, for security and integrity reasons, large web applications are usually created where everything is centralized in a complex application that uses its exclusive database; if the application needs external data, it can integrate with other databases and web services if necessary.

In this case, Netuno already provides all the means for developing this type of application, but it also offers a good solution for applications with a shared database.

Since the main problem is data security and integrity, with Netuno when several applications use the same database they are automatically limited to their tables that are related to their forms.

It allows sharing the form and consequently its table with the other applications that are coupled in the database.

Imagine the scenario in which you have an application for customer management, another for supplier management, and another for invoicing, because you will have both supplier invoices to pay and customer invoices to receive.

The customer application should not share data with the supplier application; they are distinct applications.

But the invoicing application needs to integrate with both applications to obtain data from the customer and supplier applications so it can relate invoices and manage collections and payments in the different situations.

![Coupled applications.](/docs/assets/business/apps-db-pt-acopladas.svg "Coupled applications.")

To ensure that applications do not interfere with each other's sensitive data, it is also recommended to use distinct database accesses for each application, and you can also control their table access via the database to ensure there is no unwanted interference.

Beyond that, Netuno performs the control to separate what belongs to one application or another and also what is shared between them.

## Address of Each Application

Netuno automatically distributes access to applications through the domain and subdomain.

When a request arrives at Netuno, the domain is processed as follows:

![Example image of the application address with subdomain.](/docs/assets/business/apps-subdomain.svg "Applications with subdomain.")

Netuno checks up to the first dot whether an application with this name exists.

If an application with this name exists, then this will be the application that receives the request.

If no application with this name exists, then the request will be delivered to the default application (_default_).

This domain resolution also works when it is a sub-subdomain, for example:

![Example image of the application address with sub-subdomain.](/docs/assets/business/apps-sub-subdomain.svg "Applications with sub-subdomain.")

That is, up to the first dot, it is defined which application will receive the request to be processed.

And Netuno also allows defining an exact address with a domain for the application; you only need to define the exact address at which the application will operate.

> Using the automatic way to process domains allows applications to work in the vast majority of cases; if even so there are situations that require a completely different and specific address for the application to work, then it is necessary to define it in its configuration.