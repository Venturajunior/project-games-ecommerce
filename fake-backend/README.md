# FAKE BACKEND
## _Get Started_

In the main project folder run the command:
To access the fake backend folder
```sh
cd fakebackend
```
Use the command "npm i" to install the project's dependencies (avoid using yarn to install dependencies in this project, the files in the repository are broken)
```sh
npm i
```
Now to start the fake backend you can use the command yarn start or npm run start.
```sh
npm run start
or
yarn start
```
## Domain
```sh
http://127.0.0.1
or
http://localhost
```
## PORT
```sh
3003
```
## Rotas
METHOD GET, return game's list
```sh
/game-list
```
METHOD GET, return a list of the 3 favorites games
 ```sh
/highlighted
```
METHOD GET, change ":image" to image name and the route return the corresponding image.
 ```sh
/images/:image
```
