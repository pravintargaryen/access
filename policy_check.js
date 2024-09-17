const axios = require("axios");

const checkPolicy = async (role, action) => {
  const input = {
    role: role,
    action: action,
  };

  try {
    const response = await axios.post(
      "http://localhost:8181/v1/data/example/allow",
      { input }
    );
    return response.data.result;
  } catch (error) {
    console.error("Error checking policy:", error);
    return false;
  }
};

// Example usage
(async () => {
  const role = "User"; // Example role
  const action = "view"; // Example action

  const allowed = await checkPolicy(role, action);
  if (allowed) {
    console.log("Action allowed.");
  } else {
    console.log("Action denied.");
  }
})();
