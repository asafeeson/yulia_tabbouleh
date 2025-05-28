
# -------------------------------
# STAGE 1: Builds
# -------------------------------

FROM node:22-alpine AS builder

ENV CI=true
ENV NODE_ENV=production

WORKDIR /app

# Instal yarn 
RUN corepack enable && corepack prepare yarn@stable --activate

# Copy lock 
COPY package.json yarn.lock ./

# Intalling deps
RUN yarn install --immutable
# RUN yarn explain peer-requirements

COPY . .

RUN yarn build


# STAGE 2 run
FROM node:22-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app

RUN corepack enable && corepack prepare yarn@stable --activate

COPY --from=builder /app ./

RUN cd .medusa/server && yarn install --immutable

EXPOSE 9000

ENTRYPOINT ["/bin/sh", "-c", "cd medusa/server && yarn run predeploy && yarn run start"]
