console.log("Scripts would go here!")

function AddBlueBot()
{
    const response = confirm("You are about to be redirected outside Blue Bot's website.");

    if(response)
    {
        window.open('https://canary.discord.com/api/oauth2/authorize?client_id=988833332445978624&permissions=536870944&scope=bot%20applications.commands', '_blank');
    }
}