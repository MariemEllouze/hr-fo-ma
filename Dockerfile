FROM node:14
# install app dependencies
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
FROM node:14-alpine as build

# Create app directory in our image / or in our container
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)


COPY . .

 RUN npm install
 RUN npm run-script build 
FROM nginx:alpine
# copy the build folder from react to the root of nginx (www)
 COPY --from=build /app/build /usr/share/nginx/html
# --------- only for those using react router ----------
# if you are using react router 
# you need to overwrite the default nginx configurations
# remove default nginx configuration file
 RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY ./nginx/nginx.conf /etc/nginx/conf.d
# --------- /only for those using react router ----------
# expose port 80 to the outer world
EXPOSE 3000
# start nginx 
CMD ["nginx", "-g", "daemon off;"]
