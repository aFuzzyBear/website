FROM node

ADD . /src/
WORKDIR /src/

RUN npm install --prefix /src/ && npm run build --prefix /src/

ENTRYPOINT npm run serve --prefix /src/ -- --port "$PORT"

# -- --project-root /src/ --verbose --port "$PORT"
