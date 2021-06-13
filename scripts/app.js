// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Get the search input control
const SearchInput = document.getElementById('search');

// Add event listener to search control
SearchInput.addEventListener('keyup', event => {

    let userText = event.target.value;
    
    if(userText !== '')
    {
        // Fetch user info from git
        github.getUser(userText)
        .then( data => {
            console.log(data);
            if(data.profile.message === 'Not Found')
            {
                // Show user not found
                ui.showAlert('User not found', 'alert alert-danger p-1 text-center errorHook');
            }
            else
            {
                // Display user data
                ui.showProfile(data.profile);

                // Display repos
                ui.showRepos(data.repos);
            }
        });
    }
    else
    {
        // Clear profile
        ui.clearProfile();
    }



});