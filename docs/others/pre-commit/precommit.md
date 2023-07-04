# Git Hooks
- Git Hooks are commands that run before you commit to git, they can prevent you to commit code that fails unit-tests or are automatically lint.
- The stage of which the script is ran depends on which stage it is named after, I mostly use pre-commit. 
- Other stages are found in the link below.
- https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks


## How
- run the command below to set where the hooks are located
`git config core.hooksPath hooks`
- ensure that the hooks are executable, in this case, my file name is `pre-commit`:
`chmod +x hooks/pre-commit` 


## Notes
- the files need a specific naming convention depending on what the stage you want them to run. e.g (`pre-commit`, `pre-push`, see: for all the stages: https://git-scm.com/docs/githooks)

## Code
### Python
- Run unit test before committing
```bash
#!/bin/bash

# Run Python unittests
python -m unittest discover -s tests/ -p "*.py"

# Check the exit code of the previous command
RESULT=$?
if [ $RESULT -ne 0 ]; then
    echo "Unit tests failed. Commit aborted."
    exit 1
fi
```
### React
- run tests and prettier
```bash
#!/bin/sh
echo "======= running tests before pushing ======="

RESPONSE="$(yarn test 2>&1 | grep 'FAIL')"
if [ -z "$RESPONSE" ]
then
	echo "Test all good"
else
	echo "Found FAILING tests:"
	echo $RESPONSE
	exit 1
fi

echo "========= running prettier =========="
npx prettier --write .
```

### Security
- Run GitLeaks before committing to ensure there are no leaked passwords:
```bash
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".
echo "======= running gitleaks ======="
GITLEAKS="$(gitleaks protect -v . | grep 'leaks found')"
if [ -z "$GITLEAKS" ]
then
	echo "no leaks"
else
	echo "Found potential leaks! exiting"
	echo GITLEAKS
	exit 1
fi
```
### Terraform
- Run terraform validate before committing.
- Lists in this scenario are nested folders, which is usually the case if you have a TF repo, otherwise remove this and the loop.
```bash
#!/bin/sh

echo "======= running terraform validate before committing ======="
list=("IAM" "hooks")
for d in "${list[@]}"; do
    (cd "$d" && terraform validate)
    if [[ $? -ne 0 ]]; then
        exit 1
    else
        echo "terraforms file valid"
    fi
done;
```
