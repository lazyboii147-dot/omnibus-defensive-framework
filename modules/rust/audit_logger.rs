use chrono::Utc;

pub fn log_audit_event(message: &str) {
    let timestamp = Utc::now();
    println!("[AUDIT] {} - {}", timestamp, message);
}
