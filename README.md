# COSC310-MegaBrainBot

MegaBrain is a general purpose chatbot built using react javascript, that performs text translations from english to a given set of languages that a user can choose from. Aditionally it also returns the temperature of any given address at current time. It also responds to a predefined set of general questions such as general greetings, questions about age etc.

## Running the Bot
Please ensure that you have ``npm`` installed. Run the following command to download the required node modules :
```
npm i react-scripts react-dom web-vitals react-dom
```

To run the website use the ``npm start`` command in the root directory ``(/COSC310-MegaBrainBot)`` as shown below :
![image](https://user-images.githubusercontent.com/30193992/206018685-d682ecb8-0c49-46cc-8ff0-92b17925d43a.png)

```
Note : The website runs locally on port 3000
```

## Sample
Some samples of the working have been posted as screenshots below :

###### General conversation
![image](https://user-images.githubusercontent.com/30193992/206019448-04488e09-6349-4afe-9a7a-29efc87e6326.png)
![image](https://user-images.githubusercontent.com/30193992/206019570-4edf2541-9d17-4d38-94c6-eb8e4cb8b5eb.png)
![image](https://user-images.githubusercontent.com/30193992/206019619-0258264c-3eea-492d-b6da-da682ac72f4b.png)
![image](https://user-images.githubusercontent.com/30193992/206019786-950100dd-f9ae-4cb6-ae89-da250c4dc9dd.png)

###### Wikipedia
![Wiki1](https://user-images.githubusercontent.com/71409369/206880051-afaf2d6c-ee23-4903-b089-d3aa764a5b9b.png)
![search](https://user-images.githubusercontent.com/71409369/206880052-466eeef8-8e26-4262-bcb3-3a5d4d517ad9.png)
![wiki2](https://user-images.githubusercontent.com/71409369/206880055-4f2019af-e1f3-4694-aa61-bef6fc389536.png)

## The list of API's included :
> 1) Wikipedia API 
  Wikipedia's MediaWiki API allows the user to enter any topic they wish to know about and the bot will then fetch the resulting page by id. This is then decoded from   plain JSON to proper text and the top extract is then displayed as a response. To see another topic the user simply asks to search again and repeat the process.
  ![Wiki API](https://user-images.githubusercontent.com/71409369/206880036-50bfecbf-7575-48b7-9a90-09c75d3072ad.png)

> 2) Google Maps API 
  Unfortunately unable to get the API properly working due to Googles API key issues. However, the user is supposed to be able to ask the bot for a street view or directions, by specifying the desired city or specific location, the location is then fetched from the api returning the longitude and latitude. This is then printed as a map marker image within the bots UI.
  ![GoogleMapsAPI](https://user-images.githubusercontent.com/71409369/206880015-df300290-0aac-424a-a2da-3cc4a12c9cc0.png)
