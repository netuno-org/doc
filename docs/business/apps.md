---
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

<iframe frameborder="0" style="width:100%;height:500px;" src="https://www.draw.io/?lightbox=1&highlight=FFFFFF&layers=1&nav=1&title=apps-db-desacopladas.drawio#R7Znbcps6FIafhst0OInDZey46UWazjTN7L0vBQhQIyMqZBv36SuBMCbIh6R2485OPGOjX%2BK0%2FvWxVgbDmc7rWwbL%2FDNNEDFsM6kN58aw7dD1xLcU1q0AfNAKGcNJK1m98IB%2FIiWaSl3gBFWDhZxSwnE5FGNaFCjmAw0yRlfDZSklw7OWMEMj4SGGZKz%2BgxOet6pngV7%2FhHCWqzMDW133HHZrlVDlMKGrLcmZGc6UUcrbrXk9RUSGrgtLu9%2FHHbOb62Ko4MfskDNwW9cfn77jx9D7mbPHx6%2FsylEXt4RkoW5YXS1fdxFgdFEkSB7FNJzJKsccPZQwlrMrYbnQcj4nYmSJzYoz%2BoSmlFAmlIIWYtkkxYR0kmE7aYq8OBb6%2BBbUXS0R46jektQt3SI6R5ytxZJ6mCYqu5zQacer3isQKq%2FyLZ8sy1c5ovIj2xy6j6HYUGF8SUitUUgnsEISAfl1I7KgGsVY3C1%2FYSCVBAnOCjGMRQyR0Ccydljk77WamOMkkafROjf0llEOOaZyr6tQCikt%2BIO6ys24RdRyT2PgleV96B4JykTXNTfSlo%2BWCT5onOz4OrmR9tjI32PjGQYJREEa77L69GzYHewH2TDPFdIOuq0IokQ8btWQMp7TjBaQzHp1Ei%2FYsgmxjGG%2F5I7SUonfEedrlZdwwamOpO7hbe%2BLbUUXLEb74FYVCLIM8T3r3HadvLm9TjFEBHHLYa05fdiDNwi7iC1b%2FyvJENSq4X8KlGZwUw9GazV6C7vAZdkVvtu11y7vouxyNGXCI7KcVyUsBj56Pxay3Wvq6FXVWHEtFlhuWTeB6%2BbFViZ%2F72ffHu%2B%2FdIcTV9cesZ0cJwkhoiveVepfXIjEjBcHKErFTMZggoWfW3M%2Bgh7SNQXDpuH3y5g41aCOWeMWz%2FJNTRkDZytj1jj2BwEdtgpvXMfcI0kLLoo0dydpUQfFHV4y2V9viIl24vKi3k0DgMj%2FyPM0%2F94EMYq1OEUBcIF5mubO9uxhdwc0WNgaLLyzUTFuj%2F8yKsCRVIQXRQU4TMVMlGyUwT%2FDRegnpu9rygxAQeLquAjsyGlIOgEX7uVxYY5C%2FJdx4R3JhX9RXHg7uUjwss%2F%2BZ6jco1VFRGQR08OilrPnilg1OOyJoUrTJNQWmzS19cUmEdUJnAgqb9iBvT1T%2Fhm9PeBklcNSbsZrgoWl7LCdUev9XbQRYPyUNRnxZcHFUdBu36Pmo%2FEdyI%2B2Z2%2F%2BzuK7q2u9db4H5%2FI9eJXv%2B5rCV%2FL8f8oCGxyRBs6fTIPwVWmwvwt6t%2F15J3VxttvjVve6JDiGxtQxrn35PQHo%2Fe1K72FHSle4%2FfErgFDj4CveqYhh%2Fy6zmdt6H%2BzMfgE%3D"></iframe>

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

<iframe frameborder="0" style="width:100%;height:500px;" src="https://www.draw.io/?lightbox=1&highlight=FFFFFF&layers=1&nav=1&title=apps-db-acoplada.drawio#R7VnZcuMoFP0aP6ZL%2B%2FIYO8s89HRXTSY1k0csoaWDhQYhW%2B6vn4uELGFhO%2B52lq7quMrhHhCge%2B7hAp7Zi1Vzz1CZ%2FUljTGaWETcz%2B2ZmWaHjwbcAth3g%2Bm4HpCyPO8gcgIf8O5agIdE6j3GlNOSUEp6XKhjRosARVzDEGN2ozRJK1FFLlOIJ8BAhMkX%2FyWOedahnugP%2BB87TTI7sWnLeK9S3lUCVoZhuRpB9O7MXjFLelVbNAhPhut4t3XN3B2p382K44C95IGPufdPcPX%2FLH0Pve8YeH%2F9iV7ac3BqRWr6wnC3f9h5gtC5iLHoxZvZ8k%2BUcP5QoErUboBywjK8IWCYUK87oM15QQhkgBS2g2TzJCemhmWUnCfaiCPDpK8i3WmPGcTOC5CvdY7rCnG2hSaOGiYwuO7Q7ezNw5YaSq2zEk2n6MkZkfKS7rgcfQkG68RyXmhOXzlGFhQTE1w1EQTXxMbwtP9OREkIkTwswI%2FAhBnwufJdD%2FF7LilUex2IYLXMqt4xyxHMqnroKBZDQgj%2FIWe7sTqKmcxkCr0zvU78kSBIdx9hBIx5Nw%2F2kYbLX18WJtKZE%2Fpw29mQQIxwk0SGqL68Nqxf7SW0Yr%2BXSXnQjD%2BIYlltpUsYzmtICkdsBnUc1W7cuFj4cmnymtJTgN8z5VsYlqjnVKalfvK1jvq1ozSJ8TNwyAyGWYn6kndO1Ey93lCmGCShureaay7s9eAe3g2%2FZ9l%2BhDFCtNJ%2BkUFrjplGsrbTegy73Y9EV%2FqbrKF3eh6LL1qQJj4h0XpWoUHj0%2FqvFdq%2FNo1dVS8U1NDCdsmkd19dDKRX%2Fv9z%2B%2Ffjla98dzK7rsaucBgkhsCs%2BlOrPTkRQ40UBXiZQkzIU58DnqM7HyMO6TYG6afj5NAZDKXnMnG7xTN%2FQpDH31dKYOfX9SYGqW4V3zmPOC5UWfCilOQeVtuxFcUcZHANxTBkcGgfdLA%2BK5qwdnEYGoIKl52kOOUGEI62oloHruMZltniWZ6l7PFcjDksjDu%2B1tGFPN8lvmLx2xpOayV6cvPYXM9zkfJQVwXrqh4Hy0K0w%2Bl5%2FXJbuLylL9wWyRLxmaLawZ9d%2B%2B23TN1Fn6MeG72tSnouD2NGpM7CWdqvnC6jT%2BXDq7I%2BEZ6nzIrlq2F%2BqErVPSFRZGt5Wjd4vqUbvtBoXRMjkjRJkksShNkEmiaVPkDFkVPdCEvTUveP7KzA4SE%2BcrwcS9hi7xxXfrZvGgrKSMhFLSE%2BhfJrtI9BKGWWP6ipDpShGW5ID5%2Bw038suOD4vdwCKntM2ZL7WHHrBhwNj2X40geGKj%2FY40v5d6HIsVNdmR3Os2EXBODKCV7tvnObR65Lk0Shtzl38%2B%2B54dHccquL2pxecoYbBH7gxBnP4paatG%2F3aZd%2F%2BDw%3D%3D"></iframe>

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
