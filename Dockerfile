FROM node:latest

# Uncomment if cache busrting will really be required
# ARG CACHEBUST
RUN npm install -g mit10s

CMD mit10s
