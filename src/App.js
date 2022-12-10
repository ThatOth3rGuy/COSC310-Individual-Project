import "./App.css";
import image from "./img/bot_image.jpg";
import { useState, useRef } from "react";

function App() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();


  let timeout = null;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  ); //using the useState hook to get the data from the local date and set it to the dateTime variable

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 13 2022") {
      //if the dateTime is Thursday, 13 Aug 2022, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector(".status");
    // selecting the status class
    if (isActive === true) {
      //if the bot is active
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      // if the input contains welcome words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello There how are you doing today?"; // display the message
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = ""; // clear the input
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = ""; // clear the input
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is Bot";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The owner of this bot is Treasure";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner2 = [
      "Who's Treasure|who's Treasure|Who is Treasure|who is Treasure",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Treasure is a programmer based on ReactJS and NodeJS he is the owner of a youtube channel called Creative Tutorials";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am 1 year old";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let translate = [
      "translate|Translate|TRANSLATE",
    ]; //adding the age-question
    let words12 = new RegExp(translate);
    if (words12.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Enter text in english.  DO NOT PRESS SEND !";
        inputRef.value = "";
      }, 2000);

      document.querySelector("#input").addEventListener('keyup', function (e) {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
          const encodedParams = new URLSearchParams();
          encodedParams.append("q", document.querySelector("#input").value);
          inputRef.value = "";
          getBotMessage.innerText = "Choose a language code [ ak | hi | es | ay | be | doi | el ]";
          document.querySelector("#input").addEventListener('keyup', function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
              encodedParams.append("target", document.querySelector("#input").value);
              encodedParams.append("source", "en");

              const options = {
                method: 'POST',
                headers: {
                  'content-type': 'application/x-www-form-urlencoded',
                  'Accept-Encoding': 'application/gzip',
                  'X-RapidAPI-Key': 'e9573d0c2cmsh90d914f3399d6e5p1c953bjsn435775b9203c',
                  'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
                },
                body: encodedParams
              };

              fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
                .then(response => response.json())
                .then(response => {
                  getBotMessage.innerText = "Waiting for response.....";
                  setTimeout(() => {
                    getBotMessage.innerText = response.data.translations[0].translatedText;
                    inputRef.value = ""; // clear the input
                  }, 3000);
                })
                .catch(err => console.error(err));
            }, 1500);
          });
          inputRef.value = "";
        }, 1500);
      });
    }

    let wikiSearch = [
      "search|Search|wikipedia|Wikipedia|Define|define"
    ];
    let wiki = new RegExp(wikiSearch);
    if (wiki.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(function () {
        getBotMessage.innerText = ".What do you wish to search? DO NOT PRESS SEND";
        inputRef.value = "";
      }, 2000);
      document.querySelector("#input").addEventListener('keyup', function (e) {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
          const searchString = document.querySelector("#input").value
          getBotMessage.innerText = "Typing...";
              fetch("https://https://en.wikipedia.org/w/api.php?action=parse&format=json&page="+ searchString, {
                method: 'GET'
              })
                .then(function (response) { return response.json(); })
                .then(function (json) {

                  setTimeout(() => {
                    getBotMessage.innerText = "Wikipedia Says:" + json;
                     // clear the input
                  }, 2000);
                });
            });
        }, 3000);
      }

    let askWeather = [
      "weather|Weather|WEATHER",
    ]; //adding the age-question
    let words14 = new RegExp(askWeather);
    if (words14.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(function () {
        getBotMessage.innerText = "Please enter a country, city or specific address. Seperate with spaces ! DO NOT PRESS SEND";
        inputRef.value = "";
      }, 2000);
      document.querySelector("#input").addEventListener('keyup', function (e) {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
          const address = document.querySelector("#input").value
          const addressClean = address.replace(/\s/g, '+');

          fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + addressClean + '&key=AIzaSyD-aFILuoHxUoMl717T6RJkPO9a--412Cg', {
            method: 'GET'
          })
            .then(function (response) { return response.json(); })
            .then(function (json) {
              // use the json

              getBotMessage.innerText = "Typing...";
              fetch('http://api.weatherapi.com/v1/current.json?key=a3af8f8ec1e146cdb2b191214220612&q=' + json.results[0].geometry.location.lat + ',' + json.results[0].geometry.location.lng + '&aqi=no', {
                method: 'GET'
              })
                .then(function (response) { return response.json(); })
                .then(function (json) {

                  setTimeout(() => {
                    getBotMessage.innerText = "Current Temprature : " + json.current.temp_c + " °C";
                    inputRef.value = ""; // clear the input
                  }, 2000);
                });
            });
        }, 3000);

      });
    }
    


    getHumanMessage.innerText = inputRef.value; // display the message
  };
  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">Mega Brain</div>
              <div className="status">Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                ></div>
                <div
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                  ref={input}
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i>Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
