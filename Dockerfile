FROM node:latest

# Uncomment if cache busrting will really be required
# ARG CACHEBUST
RUN npm install -g mit10s && npm cache clean --force

CMD mit10s
