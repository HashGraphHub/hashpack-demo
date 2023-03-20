# pull official base image
FROM --platform=linux/amd64 node:16.14-alpine
RUN apk update && apk add git
RUN mkdir /code
COPY . /code/
WORKDIR /code

ENV PATH /code/node_modules/.bin:$PATH
RUN npm install ;\
    npm run build  ;\
    npm run preview

EXPOSE 4173
CMD ["npm", "run", "pr"] 
