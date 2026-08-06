package main

import (
	"regexp"
)

func CheckDomSink(content string) bool {
	matched, _ := regexp.MatchString(`(?i)eval\(|document\.write\(|innerHTML\s*=`, content)
	return matched
}
