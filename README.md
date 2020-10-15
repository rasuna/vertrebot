![Discord](https://img.shields.io/discord/394066481627004929?color=7289DA&label=DISCORD&logo=discord&style=for-the-badge)
![AWS](https://img.shields.io/badge/DEPLOYED%20TO-AWS-FF9900?style=for-the-badge&logo=amazon-aws)

## Development

#### Prerequisites

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/desktop/)

Make sure you have your own bot set up, otherwise you can follow [this guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html) to setup one and add it to your server.

#### Getting Started

Fork this repository on Github. Clone your forked repository into your hard drive.

```sh
$ git clone https://github.com/YOURUSERNAME/vertrebot.git
```

Move into the project directory, and install all necessary packages.

```sh
$ cd vertrebot
$ npm install
```

Create `.env` file with the following contents.
[Here is how you can find your token](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token).

```
PREFIX=!
TOKEN=YOUR_DISCORD_APP_TOKEN
```

Build and run the Docker image.

```sh
$ docker-compose build
$ docker-compose up
```

Once you are done developing, hit `ctrl + c` and stop the Docker image.

```sh
$ docker-compose down
```

## Contributing

Contributions to `vertrebot` are always welcome, whether it be improvements to the documentation or new functionality, please feel free to create new pull-requests.
