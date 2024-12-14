document.addEventListener("DOMContentLoaded", () => {
    // Login
    document.getElementById("loginForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Logged in successfully!");
        location.href = "forums.html";
    });

    // Account
    document.getElementById("accountForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Account details updated!");
    });

    // Settings
    document.getElementById("logout")?.addEventListener("click", () => {
        alert("Logged out!");
        location.href = "index.html";
    });

    document.getElementById("profilePictureForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Profile picture updated!");
    });

    // Forum Creation
    document.getElementById("forumForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("forumTitle").value;
        const description = document.getElementById("forumDescription").value;
        const forumsList = document.getElementById("forumsList");

        const forumDiv = document.createElement("div");
        forumDiv.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        forumsList.appendChild(forumDiv);

        alert("Forum created!");
    });
});
