# Prototype Notes

## Documents
- [Proposal (06/02/18)](https://github.com/adaptlearning/documentation/blob/master/02_authoring_tool/04_feature_development/server_restructure/proposal.pdf)
- [MVP Definition (14/05/18)](https://github.com/adaptlearning/documentation/blob/master/02_authoring_tool/04_feature_development/server_restructure/mvp-definition.pdf)
- [Prototype Breakdown (15/01/19)](https://github.com/adaptlearning/documentation/blob/master/02_authoring_tool/04_feature_development/server_restructure/prototype-breakdown.pdf)
- [Meeting Notes (25/04/19)](https://github.com/adaptlearning/documentation/blob/master/02_authoring_tool/04_feature_development/server_restructure/meeting-notes-19.04.25.pdf)
- [Boot Illustration](https://github.com/adaptlearning/documentation/blob/master/02_authoring_tool/04_feature_development/server_restructure/AAT-boot.pdf)
- [Module Boot Illustration](https://github.com/adaptlearning/documentation/blob/master/02_authoring_tool/04_feature_development/server_restructure/AAT-module-boot.pdf)

## Quick start
1. Install the application according to the instructions [here](install.html).
1. Create a configuration file with the required settings for the app (instructions [here](temp-configuration.html), example file [here](https://gist.github.com/taylortom/590addcceab068be1700eb977e4116b3))
1. Create an 'auth scopes' file to allow authentication (example file [here](https://gist.github.com/taylortom/1575e7e5a4209673986d9f2b7ce83a5e))
1. Run the prototype with `adaptat start`<br>_or `node bin/cli start` if you didn't run `npm link` during install_

## Things to do
See the below table for useful endpoints:

| Endpoint | Description |
| -------- | ----------- |
| `/prototype` | Shows an HTML page with some useful info. |
| `/api` | Shows the list of API routers currently mounted to the prototype. |
