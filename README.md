# Setting Up OpenBias

## Clone the Repo

```
$ git clone https://github.com/kellen-sun/OpenBias
```

## Node Modules
Website
```
$ cd website
$ npm install
```
Database
```
$ cd website/database
$ npm install
```
Chrom Extension
```
$ cd chrome_extension
$ npm install
```

## Website
To run the front-end.
```
$ cd website
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Chrome Extension

Find "Manage Extensions" on Google Chrome. Then enter Developer Mode (top-right toggle).\
Click on "Load unpacked" (top-left button). Upload the whole /chrome_extension folder.\
Then run /chrome_extension/extension.html using your browser.

## Run MongoDB

```
$ cd website/database
$ nodemon server
```