import base64

class PayloadGenerator:
    def encode_payload(self, raw_payload: str) -> str:
        return base64.b64encode(raw_payload.encode("utf-8")).decode("utf-8")

    def decode_payload(self, encoded_payload: str) -> str:
        return base64.b64decode(encoded_payload.encode("utf-8")).decode("utf-8")
