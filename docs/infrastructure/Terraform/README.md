# Terraform
- Infrastructure as Code
- Terraform Code to quickly deploy Full Serverless Architecture in AWS
- https://www.terraform.io/

## Commands
- init
- plan 
- apply
- destroy
- show

## Other commands
- fmt
- validate
- providers
- mirror (mirror providers)
- output <variable_name>
- refresh (get from current state)
- graph (graphviz)

## Useful Links
- https://cloudposse.com/ - Production Grade ready to deploy TF code. do NOT build it yourself.

## Sub Directories:
- See github repositories for raw code of subdirectories (https://github.com/mel3kings/startup-snippets/tree/main/docs/infrastructure/Terraform)
    -  `./fargate-template` - for quickly spinning up Serverless Architecture
    - `./comprehend-iam` - for spinning up IAM with comprehend policies
    - `./S3-IAM` - IAM with S3 policies


### How to Start in Subdirectories
- just change `main.tf` under the folder basic to whatever container you have
- run `Terraform init && Terraform apply`
- (After) Remember to `Terraform destroy`

