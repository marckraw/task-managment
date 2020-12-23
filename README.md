## Why ?
App will give us control over our stream with OBS. Will connect to OBS via websockets, exposed by: https://github.com/Palakis/obs-websocket, from JS perspective we use: https://github.com/haganbmj/obs-websocket-js

The process of building this app will be shared on twitch: www.twitch.tv/mrckdev. 

Functionality scope of the app, will also be addresed there, but feel free to contribute, write issues, and feature request.

## Development
```
git clone git@github.com:marckraw/stream-helper.git
```
Install dependencies

```i
yarn
```

Run whole setup (NextJS react part + Electron part), run
```
yarn start
```
it will run `yarn run dev` - for next, and will run `electron .` for Electron.

After a while `BrowserWindow` will be opened with NextJS hot reloaded app.

## Websockets protocol documentation
[obs-websocket Protocol](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md)

