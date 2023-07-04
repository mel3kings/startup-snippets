# NPM 
- Commands to fix dependency issues

## Note
- Sometimes your libraries might not be compatible, for example a 3rd party library might be using an older version of react, you either need to enable --legacy-peer-deps when installing npm or downgrade/upgrade


## Code
- delete node_module
`npm audit`
`npm audit fix`
`npm audit fix --force`