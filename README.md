<H1 align="center">CONVERT CLI</H1>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://twitter.com/juniormartinxo" target="_blank"><img src="https://img.shields.io/twitter/follow/juniormartinxo.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Test carried out for vacancy in the [Agile Content](https://www.agilecontent.com/) company through [TechNation](https://www.linkedin.com/company/technationbrasil/).

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test
```

## How to run the command

After running the yarn build command, run the command:

```bash
$ node dist/main convert origin destination
```

## Example commands

To transform the available log in the test itself (4 records)

```bash
$ node dist/main convert s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt output/minhaCdn-s3-amazonaws.txt
```

To transform the log with more records to test a larger volume (10.368.000 records).

```bash
$ node dist/main convert https://mjpsolucoes.com.br/logs/input-01.txt output/minhaCDN.txt
```

The logs will be stored in the `./logs/*` folder.

After running the command, the output should look like the image below:

![image](https://user-images.githubusercontent.com/4163340/188481964-97f5272b-74aa-41ad-b112-4cd8f53b5859.png)

## Stay in touch

- Author - [Junior Martins](https://www.linkedin.com/in/juniormartinxo/)
- Website - [juniormartins.dev](https://www.juniormartins.dev/)
- Twitter - [@juniormartinxo](https://twitter.com/juniormartinxo)
