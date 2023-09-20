document.addEventListener("DOMContentLoaded", function () {
    const changeTextButton = document.getElementById("changeText");

    changeTextButton.addEventListener("click", function () {
        const mainText = document.querySelector("main p");
        mainText.textContent = "Text changed using JavaScript!";
    });
});
