use std::collections::HashMap;
use std::time::{Instant, Duration};

pub struct SessionManager {
    tokens: HashMap<String, Instant>,
}

impl SessionManager {
    pub fn new() -> Self {
        SessionManager { tokens: HashMap::new() }
    }

    pub fn insert(&mut self, token: String) {
        self.tokens.insert(token, Instant::now());
    }

    pub fn validate(&self, token: &str) -> bool {
        if let Some(&time) = self.tokens.get(token) {
            time.elapsed() < Duration::from_secs(1800)
        } else {
            false
        }
    }
}
