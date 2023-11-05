FROM node:20-alpine3.17 as builder
ARG VITE_ODATA_ADDRESS
WORKDIR /app
COPY package.json .
COPY ckeditor5 .
RUN yarn install --frozen-lockfile
COPY . .
RUN VITE_ODATA_ADDRESS=$VITE_ODATA_ADDRESS && yarn run build

FROM nginx:alpine as runner
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
