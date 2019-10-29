function code_check() {
    var focuscheck = document.getElementById("tarea");
    if (
        focuscheck.value.indexOf(
            ""
            ) > 0
        )
        focuscheck.value = "";
}
function code_clear() {
    var wtarea = document.getElementById("tarea");
    wtarea.value = "";
}
function code_convert() {
    var ctarea = document.getElementById("tarea");
    var toConvert = ctarea.value;
    var lang = document.getElementById("lang");
    var langSel = lang.options[lang.selectedIndex].value;
    var toConvert = toConvert.replace(/&/g, "&amp;");
    var toConvert = toConvert.replace(/'/g, "&#039;");
    var toConvert = toConvert.replace(/"/g, "&quot;");
    var toConvert = toConvert.replace(/</g, "&lt;");
    var toConvert = toConvert.replace(/>/g, "&gt;");
    ctarea.value = '<pre class="hl ' + langSel + '"><code>\n' + toConvert + '\n\n</code></pre>';
    ctarea.focus();
    ctarea.select();
}