package main

import (
	"encoding/json"
	"log"
)

type TelemetryData struct {
	ClientName string `json:"c_n"`
	EventCode  string `json:"ecn"`
	Component  string `json:"compnm"`
}

func CollectTelemetry(raw string) (TelemetryData, error) {
	var data TelemetryData
	err := json.Unmarshal([]byte(raw), &data)
	if err != nil {
		log.Printf("[-] Failed to parse telemetry: %v", err)
		return data, err
	}
	return data, nil
}
