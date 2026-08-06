use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct TelemetryNode {
    pub c_n: String,
    pub ecn: String,
    pub pa: String,
    pub compnm: String,
}

pub fn validate_telemetry_node(payload: &str) -> bool {
    match serde_json::from_str::<TelemetryNode>(payload) {
        Ok(node) => !node.c_n.is_empty() && !node.compnm.is_empty(),
        Err(_) => false,
    }
}
