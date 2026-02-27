
submit = () => {
    let theIdeaThisNiceUserJustSent = document.getElementById("daInput").value
    window.location = `https://wolfuri.pythonanywhere.com/giveidea/${theIdeaThisNiceUserJustSent}`;
};

document.getElementById("daButton").addEventListener("click", () => {
    submit();
});

document.getElementById("daInput").addEventListener("keypress", e => {
    if (e.key === "Enter") submit();
})