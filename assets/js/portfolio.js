
let state = "indieprojects";

function toggleProjects(newstate)
{

    if (state == "all")
    {
        state = newstate
        return;
    }

    var _current = document.getElementById(state);
    _current.style.display = "none";

    var _new = document.getElementById(newstate);
    _new.style.display = "flex"

    state = newstate
}

function toggleAllProjects()
{ 
    var closed = document.getElementById("indieprojects");
    closed.style.display = "flex"
    var opensource = document.getElementById("opensource");
    opensource.style.display = "flex"
    var open = document.getElementById("open");
    open.style.display = "flex"
}