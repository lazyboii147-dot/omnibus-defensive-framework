#include <string>

class DomValidator {
public:
    bool validateTag(const std::string& tag) {
        return !tag.empty() && tag.find(' ') == std::string::npos;
    }
};
