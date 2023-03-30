## NextJS Runtime Entrypoint Reconfig

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Testing

```bash
# build the app for production
docker-compose build app
docker-compose up -d

# visit localhost:3000 to see app
#try changing NEXT_PUBLIC_ENTRYPOINT in docker-compose.yml & restart app
docker-compose up -d
# check that the app reflects the new entrypoint
```
