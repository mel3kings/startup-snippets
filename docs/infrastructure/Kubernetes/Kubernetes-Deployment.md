# Kubernetes-Deployment
- K8s way of deploying a pod to an environment.

## Code
### Basic Deployment
```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
  labels:
    app: myapp-deployment
    type: front-end
spec:
  template:
    metadata:
      name: myapp-pod
      labels:
        app: myapp-pod
        type: front-end
    spec:
      containers:
        - name: nginx
          image: nginx
  replicas: 2
  selector:
    matchLabels:
      type: front-end
```

### Multiple Pod ReplicaSet
```yml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: myapp-replicaset
  labels:
    app: myapp
    type: front-end
spec:
  template:
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
  replicas: 3
  selector:
    matchLabels:
      type: front-end
```
### Replica Set
```yml
apiVersion: v1
kind: ReplicationController
metadata:
  name: myapp-rc
  labels:
    app: myapp
    type: front-end
spec:
  template:
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
  replicas: 3
```