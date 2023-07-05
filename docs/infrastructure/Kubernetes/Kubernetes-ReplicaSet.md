# Kubernetes-ReplicaSet
- After Deploying, Replicasets is how K8s ensures that a set number of containers are running.
- Replica sets are tightly coupled with dpeloyments, and require deployments to occurs first.

## Code
### Simple Replica Set
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
### Multiple Pod Simple ReplicaSet
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

### Sample Complex Replicaset
```yml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  annotations:
    deployment.kubernetes.io/desired-replicas: "2"
    deployment.kubernetes.io/max-replicas: "3"
    deployment.kubernetes.io/revision: "1"
  creationTimestamp: "2021-11-02T07:28:56Z"
  generation: 1
  labels:
    app: mydeploy
    pod-template-hash: 59d9ffcfd
  name: mydeploy-59d9ffcfd
  namespace: default
  ownerReferences:
  - apiVersion: apps/v1
    blockOwnerDeletion: true
    controller: true
    kind: Deployment
    name: mydeploy
    uid: 15887410-d97c-4053-995a-ffc1a3731002
  resourceVersion: "332605"
  uid: 1ea8d3a4-b99f-49b9-a632-63640ce1189a
spec:
  replicas: 2
  selector:
    matchLabels:
      app: mydeploy
      pod-template-hash: 59d9ffcfd
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: mydeploy
        pod-template-hash: 59d9ffcfd
    spec:
      containers:
      - image: nginx:1.18.0
        imagePullPolicy: IfNotPresent
        name: nginx
        ports:
        - containerPort: 80
          protocol: TCP
        resources: {}
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
status:
  availableReplicas: 2
  fullyLabeledReplicas: 2
  observedGeneration: 1
  readyReplicas: 2
  replicas: 2
```