$(window).on("load", async () => {
    await loadLangFile("language/en.json")
})

async function loadLangFile(file) {
    let data = undefined;
    if (!file) file = settings.lang;
    await $.getJSON(file, (json) => data = json)
    let elements = document.querySelectorAll("[data-language-code]");
    elements.forEach(x => {
        let path = x.dataset.languageCode.split("-");
        let object = data;
        try {
            path.forEach(y => {object = object[y]});
        } catch {
            console.log(`Couldn't find data in ${file} for ${path.join("/")}`)
        }
        Object.keys(object).forEach(z => {
            x[z] = object[z]
        })
    })
}