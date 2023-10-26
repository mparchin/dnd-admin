FROM node:20-alpine3.17 as builder
ARG VITE_SIMPLE_REST_URL
WORKDIR /app
COPY package.json .
RUN yarn install --frozen-lockfile
COPY . .
RUN VITE_SIMPLE_REST_URL=$VITE_ODATA_ADDRESS && yarn run build

FROM nginx:alpine as runner
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]