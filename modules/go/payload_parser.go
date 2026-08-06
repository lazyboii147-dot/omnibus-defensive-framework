package main

import (
	"crypto/sha256"
	"encoding/hex"
)

func HashPayloadData(payload string) string {
	hash := sha256.Sum256([]byte(payload))
	return hex.EncodeToString(hash[:])
}
