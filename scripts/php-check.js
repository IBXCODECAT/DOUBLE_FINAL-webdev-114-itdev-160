
function CheckDomainOrHostLocation()
{
    //
    const staticHosts = ['file://', 'localhost', 'github.io', 'github.com', 'bluescreenstudios.net']
    const host = window.location.href;
    let validPHPHost = null;

    //Loop through each static hosts and check the current window location for that substring

    for(let i = 0; i < staticHosts.length; i++)
    {
        if(host.includes(staticHosts[i]))
        {
            validPHPHost = false;
        }
    }

    //If no match was found we have a valid PHP host
    if(validPHPHost == null) validPHPHost = true;

    //If our server does not support PHP, let's remove our PHP contact form and add an error message
    if(!validPHPHost)
    {
        document.getElementById('php_invalid').textContent = "This deployment does not support server side scripting so we couldn't load a contact form for you. Don't panic though! You can still click the elephent bellow to create a draft in your favorite email client.";
        document.getElementById('contact_form').remove();

        let imgContainer = document.getElementById('error_container');
        let img = document.createElement("img");

        img.src = './../assets/php_elephant.png'
        img.style.height = 10 + "%";
        img.style.width = 10 + "%";
        img.id = "php_animal";
        
        img.addEventListener('click', (e) => {
            console.log("Elephent Clicked!");
            window.open("mailto:contact@bluescreenstudios.net");
        });

        imgContainer.appendChild(img);
    }
}

CheckDomainOrHostLocation();