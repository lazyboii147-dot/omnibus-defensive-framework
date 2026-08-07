#include <string>
#include <regex>

class PayloadSanitizerCPP {
public:
    std::string clean(const std::string& input) {
        std::regex r("[<>\"'%]");
        return std::regex_replace(input, r, "");
    }
};
