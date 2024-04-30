# Exit 410
AnotherFarewell Discord Bot

## Overview
The Exit 410 Bot is designed to send a unique and humorous goodbye message when a member leaves a Discord server. It utilizes Discord.js and is deployed within a Docker container for consistent and isolated execution.

## Features
- Sends a personalized goodbye message when a user leaves the server.
- Easily configurable through environment variables.
- Dockerized for easy deployment and scalability.

## Prerequisites
- [Node.js](https://nodejs.org/) v20.x
- [Discord.js](https://discord.js.org/) v14.x
- [Docker](https://www.docker.com/)
- [Discord bot token](https://discord.com/developers/applications)

## Setup Instructions

### Local Development
1. Clone the repository:
    ```
    git clone https://github.com/01000001-01001110/Exit-410.git
    cd Exit-410
    ```

2. Install dependencies:
   ```
   npm install
   ```
  

3. Set environment variables for local development:
- Create a `.env` file in the root directory.
- Add the following lines to the `.env` file:
  ```
  BOT_TOKEN=your_bot_token_here
  CHANNEL_ID=your_channel_id_here
  ```

4. Run the bot:
    ```
    npm start
    ```


### Docker Deployment
1. Build the Docker image:
   ```
   docker build -t farewell-discord-bot .
   ```


2. Run the Docker container, passing the bot token and channel ID as environment variables:
   ```
    docker run -d -e BOT_TOKEN='your_bot_token_here' -e CHANNEL_ID='your_channel_id_here' farewell-discord-bot
   ```

## Configuration
- `BOT_TOKEN`: Your Discord bot token.
- `CHANNEL_ID`: The ID of the Discord channel where goodbye messages will be sent.

## Contributions
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or find a bug.

## License
This project is licensed under the ISC License. See the LICENSE file for more details.

---

For more information on the bot's functionality, you can refer to the source code in `bot.js` or visit the [official Discord.js documentation](https://discord.js.org/#/docs).


## Notes
- Repository URL: Replace <repository-url> with the actual URL of your GitHub repository.
- Environment File: For local development, using a .env file is standard practice to set environment variables.
- Docker Run Command: The -d flag runs the container in detached mode, allowing the terminal to be used for other commands.
- Customization: Feel free to add any additional sections or information relevant to your specific bot or deployment needs.
