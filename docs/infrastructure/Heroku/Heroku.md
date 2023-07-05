# Heroku ⭐
Infrastructure as a Service Provider
### What
- Heroku is a IaaS that enables quick deployment for simple containers called 'dynos'
- The two files are examples of what are needed in your repository for heroku. 
    - Procfile - command for heroku to execute
    - runtime.txt - what your application runtime looks like

### Installations
- install heroku-cli
```brew tap heroku/brew && brew install heroku```
- login
```heroku login```


### Create dyno
- run this in a git repository:
```heroku create```
- this will create heroku app url and heroku git url for automated CiCD.

## Configurations
- Create a Procfile w/ this value:
`web: gunicorn app:app`
- Create a runtime.txt that contains runtime for your application, for example: 
`python-3.11.4`


## Ops
### Tailing logs
`heroku logs --tail`
### Update a Heroku Application
```git push heroku main```

### Tailing Specific containers
```shell
heroku logs
heroku logs -a boiling-sands-25945
```

### Pushing to Repository
```shell
heroku git:remote -a boiling-sands-25945
git push heroku main
```

## Tutorials:
https://devcenter.heroku.com/articles/getting-started-with-python?singlepage=true


