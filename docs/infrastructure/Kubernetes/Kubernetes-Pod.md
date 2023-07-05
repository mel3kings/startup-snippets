# Kubernetes-Pod
- Pods are the building blocks of K8s, they can consist of one or more Docker Containers

## Code

### Single Pod
```yml
apiVersion: v1
kind: Pod
metadata:
  name: testing
  labels:
    app: testing
    type: test
spec:
  containers:
  - name: nginx
    image: nginx
```
### Multiple Pods
```yml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp-pod
    type: front-end
spec:
  containers:
  - name: nginx-container
    image: nginx

  - name: backend
    image: redis
```

### Raw Command
from a deployed container in a public container registry
`kubectl run nginx --image nginx`