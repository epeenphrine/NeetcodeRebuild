package main

import (

	//"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/ulule/limiter"
	mgin "github.com/ulule/limiter/drivers/middleware/gin"
	"github.com/ulule/limiter/drivers/store/memory"
	"github.com/gin-contrib/cors"

)

func main() {

	// limited to 60 - M
	rate, err := limiter.NewRateFromFormatted("60-M")
	if err != nil {
		log.Fatal(err)
	}

	if err != nil {
		log.Fatal(err)
	}

	// ip timeouts stored in memory
	store := memory.NewStore()
	middleware := mgin.NewMiddleware(limiter.New(store, rate))

	//cors
	// config.AllowOrigins == []string{"http://google.com", "http://facebook.com"}


	r := gin.Default()
	r.ForwardedByClientIP = true
	//r.Use(middleware).POST("/", QueryRequest) //limited amoutn of requests. post parameter made in body
	//r.GET("/query", QueryStrings)             //query?name=elliot&age=24
	//r.GET("/path/:name/:age", PathParameters) //query?name=elliot&age=24

	r.Use(middleware)
	r.Use(cors.Default())
	r.GET("/proxy/:path", proxyReq)
	r.Use(middleware)
	r.Use(cors.Default())
	r.GET("/flask/scrape/:path", scrape)
	r.Run(":1500")

}
