function code_check() {
    var focuscheck = document.getElementById("tarea");
}
function code_clear() {
    var wtarea = document.getElementById("tarea");
    wtarea.value = "";
}
function code_convert(event) {
    var length = 1;
    var value = 0;
    var results = "";
    var Z = '>|\\s[^<>]*?>';

    var ctarea = document.getElementById("tarea");

    var toConvert = ctarea.value;
    var toConvert = toConvert.replace(/<h([\d]).*?>[\n](.*?)<\/h([\d]).*?>/gi, function(reffs, finals, canCreateDiscussions, undefined) {
        return finals != undefined ? reffs : (finals > length ? results = results + (new Array(finals - length + 1)).join("<ol class='point" + length + "'>") : finals < length && (results = results + (new Array(length - finals + 1)).join("</ol>")), 

            value = value + 1, 
            results = results + ('<li><a href="#point' + value + '">' + canCreateDiscussions + "</a></li>"), 

            length = parseInt(finals), "<h" + finals + " id='point" + value + "'> " + canCreateDiscussions + "</h" + undefined + ">")
    });
    if (length) {
        results = results + (new Array(length - 1)).join("</ol>")
    }

    var toConvert = toConvert.replace('<div id="elcTOC">\n</div>', '<div id="elcTOC">' + results + '</ol></div>');
    var toConvert = toConvert.replace(RegExp('<div class="separator( [^"]*?)?"(' + Z + ')([\\s\\S]*?)<\\/div>', 'g'), '<figure class="separator$1"$2$3\n</figure>');
    var toConvert = toConvert.replace(RegExp('<blockquote class="tr_bq( [^"]*?)?"(' + Z + ')([\\s\\S]*?)<\\/blockquote>', 'g'), '<blockquote class="tr_bq$1"$2$3\n</blockquote>');
    var toConvert = toConvert.replace('<script>elcTOC();<\/script>', '');
    var toConvert = toConvert.replace(/<b>(.*?)<\/b>/gi, '<strong>$1</strong>');
    var toConvert = toConvert.replace(/<i>(.*?)<\/i>/gi, '<em>$1</em>');

    ctarea.value = toConvert;
    ctarea.focus();
    ctarea.select();
}