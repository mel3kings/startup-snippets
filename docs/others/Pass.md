# Pass
- Local password store using PGP
- Useful for not storing password in an online password management system.
- https://www.passwordstore.org


## Installation
Via Brew
-`brew install pass`
Initialize
```shell
zx2c4@laptop ~ $ pass init "ZX2C4 Password Storage Key"
mkdir: created directory ‘/home/zx2c4/.password-store’
Password store initialized for ZX2C4 Password Storage Key
```

## Code
Currently pass outputs the password via:
```bash
Search Terms: aws-console
└── personal
    └── meltatlonghari3@gmail.com
        └── aws-console
```
and accepts request as: `pass personal/meltatlonghari3@gmail.com/aws-console`

Script to streamline from output to pass input below:
``` bash
result=$(pass find {query} | sed -E 's/^Search Terms: {query}//' | tr -d '\n' | sed -E 's/└──//g' | sed -E 's/─//g' | sed -E 's/│/\/\//g')
result=$(echo $result | sed 's/ /\//g')
pass $result
```