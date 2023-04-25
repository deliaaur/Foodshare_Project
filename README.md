
<p align="center">
 <img height="50%" src="https://github.com/StefanCucu/smarthack-foodshare/blob/main/frontend/src/svg/man2.png?raw=true">
</p>
<p align="center">
 <img width="30%"  src="https://raw.githubusercontent.com/StefanCucu/smarthack-foodshare/main/frontend/src/svg/foodshare.png">
</p>
<p align="center"> 
Winner of the Inovation Prize from Société Générale during SmartHack 2021 
</p>
<p align="justify"> 
Web application that helps large retail shops who are willing to donate food items approaching their expiration date, by putting them in contact with volunteers willing to transport them to homeless shelters.
    <br> 
</p>

## 📝 Table of Contents
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>
The application features three types of accounts

* Homeless shelters, that can make item requests from the providers
* Providers, who can add the items they can donate to our system
* Volunteers, who can fulfill the requests by bridging the gap between shelters and providers

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
For the front-end side of the app, you require the following API keys:
* A Google API key inside the "ApiKey.json" file in the root directory, including the following APIs:
  * Maps JavaScript API
  * Places API
  * Geocoding API
  
For the back-end side of the app, you require the following API keys:
* A Firebase Admin Service Account key inside the root directory
## 🔧 Usage <a name="usage"></a>
To startup the front-end development server, run the following command:
```bash
npm start
```
To startup the back-end development server, run the following command:
```bash
DEBUG=smarthack:* npm start
```
##  ⛏️ Built Using <a name = "built_using"></a>
* Front-end:
	* [React](https://reactjs.org/)
	* [Bootstrap](https://getbootstrap.com/)
* Back-end:
	* [Express.js](https://expressjs.com/)
	* [MySQL](https://www.mysql.com/)

