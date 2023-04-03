# Set the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /code

# Copy the rest of the application code to the container
COPY . .

# Install dependencies
RUN npm install

# Build the SvelteKit app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 4173


# Start the app when the container is launched
CMD [ "npm", "run", "preview" ]

