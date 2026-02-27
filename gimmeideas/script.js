
submit = () => {
    let theIdeaThisNiceUserJustSent = document.getElementById("daInput").value
    if (!theIdeaThisNiceUserJustSent.replaceAll(' ',''))
        alert("You wrote nothing o_O");
    else
        window.location = `https://wolfuri.pythonanywhere.com/giveidea/${theIdeaThisNiceUserJustSent}`;
};

document.getElementById("daButton").addEventListener("click", () => {
    submit();
});

document.getElementById("daInput").addEventListener("keypress", e => {
    if (e.key === "Enter") submit();
})