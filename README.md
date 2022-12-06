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

###### Weather
![image](https://user-images.githubusercontent.com/30193992/206020024-e7e8e514-b3b2-41b5-b6d1-81207a45cbee.png)
![image](https://user-images.githubusercontent.com/30193992/206021820-7adb163a-42cd-4d28-9e01-e2a3a295c2b5.png)

###### Translation
![image](https://user-images.githubusercontent.com/30193992/206022176-ff18e1b8-527e-4868-b91b-b7d066882dec.png)
![image](https://user-images.githubusercontent.com/30193992/206022313-156e8435-373a-46af-803c-3255eb23642b.png)
![image](https://user-images.githubusercontent.com/30193992/206022758-15fd744b-75d1-481a-8892-3d80909189ab.png)
> English to Spanish translation
![image](https://user-images.githubusercontent.com/30193992/206022562-e72fe9b6-95d2-4682-8771-201917b12672.png)


## The list of API's included :
> 1) Google Geocoding API + Weather API 
The Google's Geocoding API is used to determine the geographical location of the address in terms of its latitude and longitude. These values are used as parameteres for the Weather API which then returns general information about the current weather condition at the given address. The address is cleaned using simple regular expressions to replace any spaces in the input with a '+' sign.

> 2) Google Translation API 
The Google's Translation API is used to translate any given text in english to a language that the user can choose from a set provided. This is achieved my making a ``fetch() POST`` request to the translation API which specifies the source and the target language code in its request. A second ``fetch() GET`` request is made to retrieve the results from the translation API. The translated text is then returned to the user.
