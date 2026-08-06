use regex::Regex;

pub fn inspect_sink(content: &str) -> bool {
    let re = Regex::new(r"(?i)eval\(|document\.write\(|innerHTML\s*=").unwrap();
    re.is_match(content)
}
