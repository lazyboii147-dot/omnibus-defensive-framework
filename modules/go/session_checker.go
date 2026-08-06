package main

import "time"

type SessionStore struct {
	sessions map[string]time.Time
}

func NewSessionStore() *SessionStore {
	return &SessionStore{sessions: make(map[string]time.Time)}
}

func (s *SessionStore) Add(token string) {
	s.sessions[token] = time.Now()
}

func (s *SessionStore) Verify(token string) bool {
	t, exists := s.sessions[token]
	if !exists {
		return false
	}
	return time.Since(t) < 30*time.Minute
}
