use std::collections::HashMap;

pub fn check_csp(headers: &HashMap<String, String>) -> bool {
    if let Some(csp) = headers.get("content-security-policy") {
        !csp.contains("unsafe-inline") && !csp.contains("unsafe-eval")
    } else {
        false
    }
}
