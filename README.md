# UMass Lowell - Cybersecurity Club Website

<img width="700" alt="screenshot" src="https://user-images.githubusercontent.com/36372968/138989038-ce5fe35e-8b79-4962-91fb-6b7f770540c5.JPG">

Created using by following this [YouTube Tutorial](https://youtu.be/I2UBjN5ER4s) and [GitHub Repo](https://github.com/briancodex/react-website-v1)

## How to contribute

1. Clone this repository

2. Install [nodejs](https://nodejs.org/en/)

3. Start website using `npm run start` 

4. Make changes on a seperate branch

5. Open up a pull request


## Docker setup

```
docker build . -t cybersec-site

docker run --name cybersec -p 3000:3000 -d cybersec-site
```
