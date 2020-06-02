package main 


import (

	"github.com/levigross/grequests"
	"fmt"
)

// get url as string and returns response as [] bytes

func makeRequest(reqURL string) []byte {

	res, err := grequests.Get(reqURL, nil)
	dataBytes := res.Bytes()

	if err != nil {
		fmt.Println(err)
	}

	return dataBytes

}