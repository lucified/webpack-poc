
## Webpack asset bundling proof-of-concept test

Based on <https://github.com/patrikholcak/webpack-demo>, which in turn is based on <https://github.com/css-modules/webpack-demo>

## Install prerequisites
To make this POC close to reality, let's run a local NPM registry,
push our sub-projects there and then let npm take care of installing
everything. The registry is run in a Docker container, so make sure
you have docker installed (https://www.docker.com/docker-toolbox).
We also assume a flat `node_modules` hierarchy, so make sure to use npm3.

```bash
# change to reflect your setup
export DOCKER=dockerhost
# start the private registry in the background
$ docker run --name sinopia -d -p 4873:4873 keyvanfatehi/sinopia:latest
$ npm set registry $DOCKER:4873
$ npm publish ./sub-sub-project
$ npm publish ./sub-project
```

## Run the example

```bash
$ npm install
$ npm start & open http://localhost:8080
```

## License

[MIT]
