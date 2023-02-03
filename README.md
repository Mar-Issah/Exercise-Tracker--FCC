# Exercise Tracker
This is FreeCodeCamp's APIs and Microservices project to demonstrate my skills in Node.js, Express.js and MongoDb.

## About The Project
This is a Node. js (with Express. js) and MongoDb application which is part of the [FreeCodeCamp](https://www.freecodecamp.org/) Back End Certification. Exercise tracker is a web application which allows a user to create and store their username and exercises (description, duration and date).

![Exercise Tracker](https://res.cloudinary.com/dytnpjxrd/image/upload/v1617817803/My%20Website%20Projects/ex_tracker_rflftm.png)

<br>

### Built With / Requirements :construction_worker:
<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="MongoDB" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />


<br>

<!-- GETTING STARTED -->

## Getting Started
How to use it on your local machine.

### Prerequisites
You need to have Node.js, Yarn and NPM installed on your machine. To check if they are installed, open up a terminal window and type the following command for each.
 ```sh
npm -v
yarn -v
node -v
   ```
   
If these commands print out a version number in the terminal, you are good to go. If not, you need to go ahead and install what is missing. For the purpose of this project, I use [Node.js](https://nodejs.org/en/).

### Installation

1. Clone the repo on your local machine.
   ```sh
   git clone https://github.com/Mar-Issah/Exercise-Tracker--FCC.git
   ```
2. Change directory into the new folder and type the following, this installs the required dependencies.
    ```sh
    npm install
   ```
3. To run the project.
   ```sh
   npm start
   ```

<br>

<!-- USAGE EXAMPLES -->

## Usage
[Click here](https://marsiya-fcc-extracker.glitch.me) to view live demo on [Glitch](https://glitch.com/).

1. The user can create a username by making a /POST request to the route below. The returned response will be an object with username and _id properties.
  ```sh
    https://marsiya-fcc-extracker.glitch.me/api/exercise/new-user
   ```
2. The user can make a /GET request to the route below to get an array of all users. Each element in the array is an object containing a user's username and _id.
    ```sh
    https://marsiya-fcc-extracker.glitch.me/api/exercise/users
   ```
3. The user can make a POST  to the route below with form data userId=_id, description, duration, and optionally date. If no date is supplied, the current date will be used. The response returned will be the user object with the exercise fields added.
    ```sh
    https://marsiya-fcc-extracker.glitch.me/api/exercise/add
   ```

4. The user can make a GET request to to the route below with a parameter of userId=_id to retrieve a full exercise log of any user. The returned response will be the user object with a log array of all the exercises added. Each log item has the description, duration, and date properties.
   ```sh
    https://marsiya-fcc-extracker.glitch.me/api/exercise/log?userId=6040249c36889d49d29fc2e8
   ```
5. The user can add from, to and limit parameters request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.
   ```sh
    https://marsiya-fcc-extracker.glitch.me/api/exercise/log?userId=6040249c36249d49d29kc2e8&from=2021-01-01&to=2021-02-02&limit=2
   ```
   
<br>
<!-- CONTRIBUTING -->

## Contributing :family:

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated!**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/awesomeFeature`).
3. Commit your Changes (`git commit -m 'Added some awesome features'`).
4. Push to the Branch (`git push origin feature/awesomeFeature`).
5. Crea a Pull Request.
   <br>

<!-- LICENSE -->

## License :page_facing_up:

Distributed under the `MIT License`. See [LICENSE](https://choosealicense.com/licenses/mit/) for more information.

<!-- CONTACT -->

<br>

## Contact :e-mail:

Marsiya Issah : masy370@gmail.com.

Project Link: [https://github.com/Mar-Issah/Exercise-Tracker--FCC.git](https://github.com/Mar-Issah/Exercise-Tracker--FCC.git).

Kindly check out more of my projects in [CodePen](https://codepen.io/your-work/).

## View [Exercise Tracker](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker) on FreeCodeCamp
