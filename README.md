# Store Form Data To Google Sheet

## How it works

1- SignIn to Google Sheet

2- Set the name for each field, for ex: Name Age Country

3- Grab the link from link from this sheet using share button ( link as editor )

4- SignIn to Sheet.best and use the Google sheet link to generate an API in Sheet.best

5- Grab the Sheet.best Api URL and use for an Axios POST request

6- Passe the data to the api as Object and use only the name of the field to passe the data ex:

OK    axios.post(`https://sheet.best/api/sheets/9cf6079a-0c6f-48b5-8d9c-8ccddd7429cc`, { Name, Surname })      
NOOK  axios.post(`https://sheet.best/api/sheets/9cf6079a-0c6f-48b5-8d9c-8ccddd7429cc`, { Name: "Egzon", Surname: "Berisha" })

