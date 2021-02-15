FROM hayd/alpine-deno:1.2.2

RUN deno install -qAf --unstable https://raw.githubusercontent.com/denosaurs/denon/main/denon.ts

WORKDIR /usr/app

COPY deps.ts .
RUN deno cache deps.ts

ADD . .

ENTRYPOINT ["root/deno/bin/denon"]