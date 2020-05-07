const darkModeButton = document.querySelector
("#dark-mode")

darkModeButton.addEventListener("click",
    function (){
        const formElement = document.querySelector("form");
        formElement.classList.toggle("dark-mode")
    }
)


document.querySelector("#jordan-mode").addEventListener("click", function () {
    document.querySelector("form").classList.toggle("jordan-mode")
})

document.querySelector("#submit-btn").addEventListener("click", function () {
    // get the values of the name and email input
    const nameInput = document.querySelector("#name-input")
    const emailInput = document.querySelector("#email-input")

    // console.log("this is name",nameInput)
    // console.log("This is email",emailInput)

    const nameValue = nameInput.value
    const emailValue = emailInput.value 
    console.log("This should be name", nameValue)
    console.log("this should be email", emailValue)
    //  print those values to the DOM
    document.querySelector("#output-container").innerHTML += `<section>
    <h3>${nameValue}</h3>
    <p>${emailValue}</p>
    </section>`
})