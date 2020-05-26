FROM golang:1.12 AS builder

WORKDIR /app

COPY . .

RUN go get github.com/gin-gonic/gin
RUN go get github.com/ulule/limiter
RUN go get github.com/ulule/limiter/drivers/store/memory 
RUN go get github.com/ulule/limiter/drivers/middleware/gin
RUN go get github.com/levigross/grequests
## build for arm architecture (raspberrypi4)
RUN env GOOS=linux GOARCH=arm GOARM=5 go build -o main . 


## build for amd64 architecture
#kRUN  go build -o main . 

CMD "./main"

FROM scratch 

WORKDIR /main

COPY --from=builder /app/main . 

ENTRYPOINT [ "/main" ]