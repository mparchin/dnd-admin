FROM node:20-alpine3.17 as builder
ARG VITE_ODATA_ADDRESS
WORKDIR /app
COPY package.json .
COPY ckeditor5/ ckeditor5/
RUN yarn install
COPY public/ public/
COPY src/ src/
COPY index.html .
COPY tsconfig.json .
COPY vite.config.ts .
RUN VITE_ODATA_ADDRESS=$VITE_ODATA_ADDRESS && yarn run build

FROM nginx:alpine as runner
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
