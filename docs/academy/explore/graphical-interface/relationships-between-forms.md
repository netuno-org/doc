---
id: relationships-between-relationships
title: Relationships between forms
sidebar_label: Relationships between forms
---

## How to create relationships between forms
In this tutorial we will help you create relationships between forms on the Netuno platform.

The purpose of these relationships is to allow forms to access information from others, thus allowing the information to be repeated, simplifying its development.

This tutorial is divided into steps that we advise you to follow in their order.

## Requirements
Before creating the relationships it is ** mandatory** to have at least two forms created, in case you don't know how to do it visit this address: [Forms Creation](forms.md).

And in order to be able to link form fields it is also ** mandatory** the creation of fields for the respective forms and we advise you to fill in some information. In case you do not know how to do it, please go to [Creation of Fields](fields.md).

## 1 - Choose one of the forms

To start linking form fields the first step is to choose the form that will select the information from the other.

To exemplify this tutorial we created two simple forms: **Vehicle*** and **Color**, the structure of each one is as follows:

![relacoes-entre-formularios1.png](assets/relacoes-entre-formularios1.png)

## 2 - Creating the relational field
The next step will be to create the relationship. In this example the logic is that as several vehicles can have the same color we can create a form with all colors and associate to each vehicle.

Therefore, what you should do is edit the form **Vehicle** by adding a new field, in this case it will be **Color**.

To create a relational field just in the **Type** choose **Select** and proceed to the next step.

> As a standard it is advisable that the name of the relational field is 'field_name' accompanied by '_id', in this example it will be 'color_id'

![relacoes-entre-formularios2.jpg](assets/relacoes-entre-formularios2.jpg)

## 3º - Choose the field to relate
After the creation, click on **Add** below **Link**, a window will open and just choose the field of the form for which you want to create the relation and finally click close.

After this process save the field.

![relacoes-entre-formularios3.jpg](assets/relacoes-entre-formularios3.jpg)

After everything is configured, when adding data to both forms you will see that in the case of the field **Color**, within the form **Vehicle**, will be all colors entered in the form **Color**.

![relacoes-entre-formularios4.jpg](assets/relacoes-entre-formularios4.jpg)

If you have any questions, please do not hesitate to contact us through the means presented at the bottom of the page,

Good development!
