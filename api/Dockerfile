FROM hayd/apine-deno:1.2.2

RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

WORKDIR usr/app

COPY deps.ts .
RUN deno cache deps.ts

ADD . .

ENTRYPOINT["/root/.deno/bin/denon"]