export const handleError = (error: any) => {
  if (error.response) {
    console.error("Server responded with error:", error.response.data);
    console.error("Error status code:", error.response.status);
  } else if (error.request) {
    console.error("No response from server:", error.request);
  } else {
    console.error("Error:", error.message);
  }
};
