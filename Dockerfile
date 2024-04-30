# Use an official Node.js runtime as a parent image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle your app source inside the Docker image
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV BOT_TOKEN=Your_Bot_Token_Here
ENV CHANNEL_ID=Your_Channel_ID_Here

# Run bot.js when the container launches
CMD ["node", "bot.js"]

#Build the docker image
#docker build -t exit-410 .

#Run the dockerfile 
#docker run -d -e BOT_TOKEN='actual_bot_token' -e CHANNEL_ID='actual_channel_id' exit-410
