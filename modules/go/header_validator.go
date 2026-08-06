package main

import "net/http"

func ValidateSecurityHeaders(headers http.Header) bool {
	csp := headers.Get("Content-Security-Policy")
	xfo := headers.Get("X-Frame-Options")
	return csp != "" && xfo != ""
}
