function AddBlueBot()
{
    const response = confirm("You are about to be redirected outside Blue Bot's website.");

    if(response)
    {
        window.open('https://canary.discord.com/api/oauth2/authorize?client_id=988833332445978624&permissions=536870944&scope=bot%20applications.commands', '_blank');
    }
}

function SetContentHeight()
{
    console.log(document.documentElement.scrollHeight);

    //const body = document.body, html = document.documentElement;
    //const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    const el_content = document.getElementById('content');

    if(el_content)
    {
        const style = window.getComputedStyle(el_content);
        
        el_content.style.height = 1500;
    }


    if(el_content)
    {
    }
}

SetContentHeight();