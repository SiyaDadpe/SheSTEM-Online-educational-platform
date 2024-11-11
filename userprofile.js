
function toggleProfileDetails() {
    var profileDetails = document.getElementById("profile-details");
    var profileStatus = document.getElementById("profile-status");

    
    if (profileDetails.style.display === "none" || profileDetails.style.display === "") {
        profileDetails.style.display = "block"; 
        profileStatus.innerText = "Profile details visible"; 
    } else {
        profileDetails.style.display = "none"; 
        profileStatus.innerText = "Profile details hidden"; 
    }
}


function editProfile() {
    alert("Editing profile... This could open a form to edit profile information.");
}
