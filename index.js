function submitData(userName, userEmail) {
    const htmlBody = document.querySelector("body");
    const idParagraph = document.createElement("p");
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(resp => resp.json())
    .then(user => {
        idParagraph.textContent = `User Id: ${user.id}`;
        htmlBody.appendChild(idParagraph);
    })
    .catch(err => {
        const errObj = {
            message: err
        }
        idParagraph.textContent = errObj.message;
        htmlBody.appendChild(idParagraph);
    })
}