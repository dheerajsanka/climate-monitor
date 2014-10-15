FROM node:0.10.32

ADD . /usr/src/app
WORKDIR /usr/src/app

# install your application's dependencies
RUN npm install

# replace this with your application's default port
EXPOSE 8888

# replace this with your main "server" script file
CMD [ "node", "app.js" ]