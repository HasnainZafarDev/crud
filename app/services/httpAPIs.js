const { GlobalConstants } = require("../utils/CONST");

export const getUserAPI = async () => {
  try {
    const response = await fetch(GlobalConstants.BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      return {
        success: false,
        data: null,
        error: `HTTP Error: ${response.status}`,
      };
    }
  } catch (error) {
    console.log(error);
    return { success: false, data: null, error: error.message };
  }
};
