FROM golang:1.12 as builder

WORKDIR /api_gin

COPY . .

#RUN go get github.com/gin-gonic/gin
#RUN go get github.com/ulule/limiter
#RUN go get github.com/ulule/limiter/drivers/store/memory 
#RUN go get github.com/ulule/limiter/drivers/middleware/gin
#RUN go get github.com/levigross/grequests
#RUN go get github.com/gin-contrib/cors

## build for arm architecture (raspberrypi4)
#RUN env GOOS=linux GOARCH=arm GOARM=5 go build -o main . 


## build for amd64 architecture
#RUN  go build -o main . 

CMD "./main"