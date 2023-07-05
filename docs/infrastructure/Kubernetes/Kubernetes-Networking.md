# Kubernetes-Networking
- Deploying pods with different ports and connectivity

## Notes
- The `ports` field specifies the ports that this service should listen on. In this case, it's listening on port 80.
  - The `port` field represents the port number that clients can use to access the service.
  - The `targetPort` field denotes the port number on which pods associated with this service are running.
  - The `nodePort` field specifies the port number to be opened on all nodes in your cluster. In this example, it's set to 30004.

## Code
### Different Ports
```yml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30004
  selector:
    app: myapp-pod
```