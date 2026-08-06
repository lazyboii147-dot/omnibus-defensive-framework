pub fn parse_element_tag(html_fragment: &str) -> Option<&str> {
    if html_fragment.starts_with('<') && html_fragment.ends_with('>') {
        Some(&html_fragment[1..html_fragment.len() - 1])
    } else {
        None
    }
}
