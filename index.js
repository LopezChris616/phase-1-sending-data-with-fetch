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




// const formData = {
//     dogName: "Krypto",
//     dogBreed: "Golden Retriever"
// }

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(resp => resp.json())
//     .then(obj => console.log(object))
//     .catch(err => {
//         console.log("ERROR!!!!!");
//     })