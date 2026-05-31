// Mock login status logic
// Set to false to simulate a logged-out guest user (blocks actions)
// Set to true to simulate a signed-in account user (allows actions)
const isLoggedIn = false; 

function checkAuth(actionType) {
    if (!isLoggedIn) {
        // If user status is logged out, intercept click and show error warning
        alert("🔒 Access Denied: You must be signed in to " + (actionType === 'post' ? "post a job opening." : "apply for this position."));
    } else {
        // If user status is logged in, pass verification checks successfully
        if (actionType === 'post') {
            alert("✅ Success! Your job opening has been published.");
        } else if (actionType === 'apply') {
            alert("✅ Success! Your application has been submitted successfully.");
        }
    }
}