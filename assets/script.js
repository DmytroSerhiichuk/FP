document.addEventListener('DOMContentLoaded', function () {
    let code2 = document.querySelector('.code-2');
    const code2Pre = document.querySelector('.code-text-2').innerText;
    if (code2Pre.length == 0) {
        document.getElementById("code-wrapper-container").removeChild(code2);
    }

    const codeTexts = document.getElementsByClassName("code-text");

    for (let i = 0; i < codeTexts.length; i++) {
        const elem = codeTexts[i];
        const parent = elem.parentElement;

        const btn = parent.querySelector(".copy-code-btn");
        btn.addEventListener('click', () => {
            navigator.clipboard.writeText(elem.innerText)
                .then(() => {
                    alert("Copied to clipboard");
                })
                .catch(err => {
                    alert("Failed to copy to clipboard");
                });
        });
    }
});