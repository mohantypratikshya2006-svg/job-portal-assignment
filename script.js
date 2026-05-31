// Mock login status logic
// Set to false to simulate a logged-out guest user (blocks posting/applying)
// Set to true to simulate a signed-in user account (allows actions)
const isLoggedIn = false; 

function checkAuth(actionType) {
    if (!isLoggedIn) {
        alert("🔒 Access Denied: You must be signed in to " + (actionType === 'post' ? "post a job opening." : "apply for this position."));
    } else {
        if (actionType === 'post') {
            alert("✅ Success! Your job opening has been published.");
        } else if (actionType === 'apply') {
            alert("✅ Success! Your application has been submitted successfully.");
        }
    }
}