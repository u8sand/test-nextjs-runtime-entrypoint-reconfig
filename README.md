## NextJS Runtime Entrypoint Reconfig

NextJS seems to have no way to reconfigure the base path (https://github.com/vercel/next.js/discussions/16059).

Some propose a reverse proxy, but because static pages embed the basePrefix into them this also doesn't work well.

The alternative is quite undesirable -- building at runtime.

Here, we use a hopefully unique string `/__ENTRYPOINT__` as the entrypoint, this allows us to just replace this string
in all the next-built files at startup when we know the actual entrypoint.

Once building with this approach, the entrypoint can be customized, this also works for images, API endpoints, and more.

Tested on `next@^12`
**NOTE: No longer works in `next@^13`**

Original gist: <https://gist.github.com/u8sand/db56c9db4afc381c3716e9a60f96b638>

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
