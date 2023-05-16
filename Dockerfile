FROM          node:18.2-alpine
ARG           APP_PATH=/root/app
WORKDIR       $APP_PATH
COPY          . /root/app
RUN           npm install 
EXPOSE        3000
CMD           [ "npm", "start" ]
