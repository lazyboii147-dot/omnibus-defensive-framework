#include <unordered_map>
#include <string>
#include <ctime>

class SessionTrackerCPP {
    std::unordered_map<std::string, std::time_t> sessions;
public:
    void addSession(const std::string& token) {
        sessions[token] = std::time(nullptr);
    }
    bool checkSession(const std::string& token) {
        auto it = sessions.find(token);
        if (it == sessions.end()) return false;
        return (std::time(nullptr) - it->second) < 1800;
    }
};
