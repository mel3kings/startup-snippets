# Kubernetes-Storage
- Configuring Persistent Volumes per Pod, allows the data to be persistent even if the pods restart or disappear
- Claims are how pods 'own' or 'get' a volume from a shared context.

## Code
### Persistent Volume
```yml
apiVersion: v1
kind: Pod
metadata:
  name: webapp
spec:
  containers:
    - name: event-simulator
      image: kodekloud/event-simulator
      env:
        - name: LOG_HANDLERS
          value: file
      volumeMounts:
        - mountPath: /log
          name: log-volume

  volumes:
    - name: log-volume
      hostPath:
        # directory location on host
        path: /var/log/webapp
        # this field is optional
        type: Directory
```

### Claim
```yml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: myClaim
spec:
  accessMode:
    - ReadWriteOnce
resources:
  requests:
    storage: 500Mi
```
#### Claim Notes
- `apiVersion: v1` specifies the API version of the Kubernetes object being defined.
- `kind: PersistentVolumeClaim` indicates that this is a PersistentVolumeClaim object.
- `metadata` provides metadata about the PVC, including its name.
- `spec` defines the specifications for the PVC.
  - `accessMode` specifies the access mode for the PVC. In this case, it is set to `ReadWriteOnce`, which means that the volume can be mounted as read-write by a single node.
  - `resources` specifies the resource requirements for the PVC.
    - `requests` indicates the minimum resources required by the PVC.
      - `storage: 500Mi` states that at least 500 megabytes of storage should be allocated to this PVC.

Overall, this code creates a PersistentVolumeClaim named "myClaim" with an access mode of ReadWriteOnce and requests at least 500 megabytes of storage.