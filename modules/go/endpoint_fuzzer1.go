package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type AuditResponse struct {
	Endpoint string `json:"endpoint"`
	Status   int    `json:"status"`
	Secure   bool   `json:"secure"`
}

func AuditEndpointTarget(url string) AuditResponse {
	client := http.Client{Timeout: 5 * time.Second}
	resp, err := client.Get(url)
	if err != nil {
		return AuditResponse{Endpoint: url, Status: 0, Secure: false}
	}
	defer resp.Body.Close()

	return AuditResponse{
		Endpoint: url,
		Status:   resp.StatusCode,
		Secure:   resp.StatusCode == http.StatusOK,
	}
}
