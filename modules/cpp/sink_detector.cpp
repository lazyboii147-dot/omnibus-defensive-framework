#include <string>
#include <regex>

class SinkDetector {
public:
    bool hasUnsafeSink(const std::string& code) {
        std::regex pattern("eval\\(|document\\.write\\(|innerHTML\\s*=", std::regex_constants::icase);
        return std::regex_search(code, pattern);
    }
};
