package main

import (
	"log"
	"net/http"
	"github.com/gin-gonic/gin"
)

func scrape(c *gin.Context) {

	localServer := "http://192.168.86.31:6543/flask/scrape/"
	
	//http://localhost:6543/flask/scrape/twitter?handle=elonmusk
	//query url string and then pass json response from requests

	switch path := c.Param("path"); path {

	case "twitter":

		log.Println("flask service")
		handle := c.Query("handle")
		url := localServer + "twitter?handle=" + handle
		log.Println(url)
		jsonBytes := makeRequest(url)
		c.Data(http.StatusOK, gin.MIMEJSON, jsonBytes)

	default:
		c.JSON(
			200, gin.H{
				"error":   "query didn't return a match",
				"message": "did you enter query correctly?",
			})
	}
}
func flask(c *gin.Context) {
	localServer := "http://192.168.86.31:6543/"
	q := c.Query("q")
	s := c.Query("s")
	url := localServer + 
}