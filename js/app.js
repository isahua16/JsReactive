let hello = document.querySelector(`#hello`);
let bonjour = document.querySelector(`#bonjour`);

function change_color_on_click(event)
{
    if(event[`target`][`style`][`backgroundColor`] !== `green`)
    event[`target`][`style`][`backgroundColor`] = `green`;
    else
    {
        event[`target`][`style`][`backgroundColor`] = ``;
    }
}

hello.addEventListener(`click`, change_color_on_click);

function change_outer_html(event)
{
    if(event[`target`][`outerHTML`].includes(`<img`) === true)
    {
        event[`target`][`outerHTML`] = `<h1 id="bonjour">Bonjour!</h1>`;
    }
    else
    {
        event[`target`][`outerHTML`] = `<img id="bonjour" src="https://img.freepik.com/free-photo/funny-goat-looking-camera_181624-3762.jpg?w=1380&t=st=1679763397~exp=1679763997~hmac=0f8b5fb8ec5fdf53c2e3d77d18534c715b94ba4f90819faa605915ae11dbe47e" style="width:100%">`
    }
    let bonjour = document.querySelector(`#bonjour`);
    bonjour.addEventListener(`dblclick`, change_outer_html);
}

bonjour.addEventListener(`dblclick`, change_outer_html);



function change_on_hover(event)
{
    event[`target`].insertAdjacentHTML(`afterend`, `<p id="hover_text">I was hovered</p>`)
}

function change_on_hover_leave()
{
    document.querySelector(`#hover_text`).remove();
}

hola.addEventListener(`mouseover`, change_on_hover);
hola.addEventListener(`mouseleave`, change_on_hover_leave);
