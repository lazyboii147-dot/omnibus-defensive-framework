#include <iostream>
#include <string>
#include <regex>

class MemorySanitizer {
public:
    std::string sanitizeString(const std::string& input) {
        std::regex unsafe_chars("[<>\"'%]");
        return std::regex_replace(input, unsafe_chars, "");
    }
};
