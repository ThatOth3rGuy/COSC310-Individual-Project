# COSC310-MegaBrainBot

MegaBrain is a general purpose chatbot built using react javascript, that performs text translations from english to a given set of languages that a user can choose from. Aditionally it also returns the temperature of any given address at current time.

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


## The list of API's included :
> 1) Google Geocoding API + Weather API 
The Google's Geocoding API is used to determine the geographical location of the address in terms of its latitude and longitude. These values are used as parameteres for the Weather API which then returns general information about the current weather condition at the given address. The address is cleaned using simple regular expressions to replace any spaces in the input with a '+' sign.

> 2) Google Translation API 
The Google's Translation API is used to translate any given text in english to a language that the user can choose from a set provided. This is achieved my making a ``fetch() POST`` request to the translation API which specifies the source and the target language code in its request. A second ``fetch() GET`` request is made to retrieve the results from the translation API. The translated text is then returned to the user.
