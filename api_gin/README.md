## GIN GATEWAY 

this is a API GATEWAY built on gin. I originally wanted to build this on Flask, but gin was 7 - 6 x faster in my tests.

## the gateway serves three purposes:

- encrypt data between client and user   
- route all microservices on my machine and from other websites into one endpoint
- throttle requests on certain endpoints

## proxy_req.go 
since proxy_req.go contain my developer keys for other services, it will be in gitignore for now. 