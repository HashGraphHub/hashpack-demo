# Set the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /code

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the SvelteKit app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 4173

# Start the app when the container is launched
CMD [ "npm", "run", "preview" ]

