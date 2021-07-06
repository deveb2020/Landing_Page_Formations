# Coachformations - Landing page project

## About this repository

This is a project that I build for one of my clients.

This website is used to showcase services and generate more leads

It is fully responsive !


## Functionalities

The main functionality is the contact form. 

In this contact form the user can test to see if he is eligible for the services proposed in this website.

If he is eligible, he can choose the service he wants and complete a form with his personal informations and then submit it.

When the form is Submited, the informations entered by the client are sended to a google sheet using API, so the owner of the website can se the list of all the clients who completed the form, directly from his google sheet 


## Tech used

I used ReactJS to build the UI and i used Sheet.best to connect the Form with Google Sheet


## How it works

1- Sign into Google Sheet

2- Set the name for each field, for ex: Name Surname Country

3- Grab the link from link from this sheet using share button ( link as editor )

4- SignIn to Sheet.best and use the Google sheet link to generate an API in Sheet.best

5- Grab the Sheet.best Api URL and use for an Axios POST request

6- Passe the data to the api as Object and use only the name of the field to passe the data ex:

OK    axios.post(`url`, { Name, Surname, Country })      
NOOK  axios.post(`url`, { Name: "John", Surname: "Doe", Country: "uk" })


## Where to find the app

You can find the app in this adresse: https://coachformations.com/

