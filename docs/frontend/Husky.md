# Husky
- Another way of enabling/automating linting
- underneath it is just Git hooks too.
- https://typicode.github.io/husky/

## Prequisities
- See [Linting](./Linting.md) first for setup

## How
### Setup
```shell
npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit "npm test"
```


### Add a new Husky script
```shell
npx husky add .husky/pre-commit "npm run prettify && npm runlint:fix"
git add .husky/pre-commit
```
## Notes
- Or you can just go straight to Git Precommit Route, less dev dependencies
- The good thing about husky is that out of the box when other engineers checkout the code other engineers have husky/hok