[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE.md)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kellen-sun/OpenBias.svg)
![Hackthe6ix](https://img.shields.io/badge/event-Hack%20the%206ix%202023-blueviolet)


# Description of OpenBias
OpenBias consists of a Chrome Extension to vote on the political bias of websites and our own website that has the congregated data publicly available. \
OpenBias was made as part of a Hack The 6ix 2023 submission created by [Ryan Nguyen](https://github.com/xpbowler) and [Kellen Sun](https://github.com/kellen-sun).
## Inspiration
In 2023, Canada forced social media companies such as Meta to remove Canadians' ability to read news on their platform. Five years earlier, 70% of the CBC's revenue was from the government. Large news corporations own multiple journals and poorly write increasingly similar, biased, and uninteresting articles to promote a narrative. \
In 2022, Elon Musk bought Twitter to restore free speech and added the prominent Community Notes feature which allows individuals to fact-check tweets and vote on them. Although the algorithms as to how Community Notes are generated is public, its inner workings are still difficult for the common man to understand.\
OpenBias aims to change this.

## What is OpenBias?
OpenBias aims to tackle political bias transparently using a Chrome Extension. Users can open the extension on any webpage and vote on the political bias of the article. This was intended and works best for news articles. Currently the BiasMetric is only on a single left-right axis. All data collected is averaged and clearly displayed.\
The algorithm employed is simple yet an effective application of one of mankind's greatest ideas, democracy. Each vote is equivalent.\
OpenBias also employs Google Cloud's Natural Language API to determine the political nature of articles. Certain articles are deemed not political in which case the ratings should be taken with a grain of salt. 

## Technical Overview
OpenBias uses a standard HTML/CSS/JS setup for its Chrome Extension. Google Cloud's Natural Language API is also employed.
The website + database uses the MERN stack: React.js front-end (styled with Tailwind CSS), express.js MongoDB database.

## What's Next?
1. We hope that OpenBias' ease of use will make it expand to a larger userbase. This will allow us to solidify the ratings we receive as more statistically significant and representative of the population at large. 
2. This data can also be organized depending on publisher's. This will allow the ratings of individual news articles to be showcased within the broader context of a single publisher and tackle political and other biases within organizations, legacy media and social media influencers.
3. To prevent fraud and mass bot spams, we will create simple CAPTCHA's to ensure ratings are done by humans. 
4. The large amount of data collected by OpenBias will be important to represent humanity's viewpoints on all issues and can be used as training data to align and reduce bias in large language models such as ChatGPT, which continue to become hugely influential on the public's viewpoint. This can be performed via reinforcement learning, for example. OpenBias' data can be used to develop an AI model able to predict the political bias of any text data, whether AI-generated or human-written.
5. OpenBias can also expand beyond the single dimension of left-right political biases, thus tackling more complicated issues in modern society.
6. OpenBias can expand and become become a leading third-party "fact-checker" based on the opinions of everyone. Once OpenBias is deemed a trustworthy source, we may deliver stamps of approval to news corporations and social media posts to deem articles as unbiased and high quality.
# Setting Up OpenBias

## Clone the Repo

```
$ git clone https://github.com/kellen-sun/OpenBias
```

## Install node modules dependencies
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
Chrome Extension
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
Then run /chrome_extension/extension.html using your browser. The extension will be available for any website opened with that user in Chrome.\
Get an API key from Google Cloud API. Then paste the key in /chrome_extension/.env as 
```
API_KEY = ...
```

## Create MongoDB database and URI
Make a Atlas Database and procure an URI. Create /website/database/.env and add your URI: 
```
ATLAS_URI = mongodb+srv:// ...
```
## Run express.js MongoDB database
```
$ cd website/database
$ nodemon server
```

