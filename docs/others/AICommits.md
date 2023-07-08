# AI Commits
- Never write a commit message ever again.
- Useful to automate conventional commits

## Installation
install package
`npm update -g aicommits`

set up open ai api key
`aicommits config set OPENAI_KEY=<your token>`

### Full set of commands
```shell
git add .
aicommits --all --type conventional # this commits already
git push
```
## Note
- PROTIP: use with aliases or macros to execute when pushing, do not type the commands yourself otherwise it defeats the purpose. 