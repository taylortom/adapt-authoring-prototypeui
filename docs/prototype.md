# Prototype Notes

## Quick start
1. Install the application according to the instructions [here](manual/install.html).
1. Create a configuration file with the required settings for the app (instructions [here](manual/temp-configuration.html), example file [here](https://gist.github.com/taylortom/590addcceab068be1700eb977e4116b3))
1. Create an 'auth scopes' file to allow authentication (example file [here](https://gist.github.com/taylortom/1575e7e5a4209673986d9f2b7ce83a5e))
1. Run the prototype with `adaptat start`<br>_or `node bin/cli start` if you didn't run `npm link` during install_

## Things to do
See the below table for useful endpoints:

| Endpoint | Description |
| -------- | ----------- |
| `/prototype` | Shows an HTML page with some useful info. |
| `/api` | Shows the list of API routers currently mounted to the prototype. |
