# First stage BUILD
FROM node:24.0-slim AS builder

# AS build
RUN apt-get update -y && apt-get install -y --no-install-recommends openssl && rm -rf /var/lib/apt/lists/*

ENV CI=true

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN npx pnpm@10 install --frozen-lockfile

COPY . .

RUN npx pnpm@10 run build


# Second stage RUN
FROM node:24.0-slim

RUN apt-get update -y && apt-get install -y --no-install-recommends openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml* ./pnpm-lock.yaml
COPY --from=builder /app/build ./build

RUN npx pnpm@10 install --prod --frozen-lockfile

EXPOSE 3000

ENTRYPOINT [ "npx", "pnpm@10", "run", "start" ]
