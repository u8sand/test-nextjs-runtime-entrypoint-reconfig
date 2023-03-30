FROM node
RUN apt-get update -y && apt-get install -y jq && rm -rf /var/lib/apt/lists/*
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN chmod +x ./entrypoint.sh
RUN NEXT_PUBLIC_ENTRYPOINT=/__ENTRYPOINT__ npm run build
ENV NEXT_PUBLIC_ENTRYPOINT=""
EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]
CMD ["npm", "run", "start"]