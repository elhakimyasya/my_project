function code_check() {
    document.getElementById("tarea")
}

function code_clear() {
    document.getElementById("tarea").value = ""
}

function code_convert(b) {
    var c = 1,
    f = 0,
    e = "";
    b = document.getElementById("tarea");
    var a = b.value;
    a = a.replace(/<h([\d]).*?>[\n](.*?)<\/h([\d]).*?>/gi, function(a, d, b, g) {
        return d != g ? a : (d > c ? e += Array(d - c + 1).join("<ol class='point" + c + "'>") : d < c && (e += Array(c - d + 1).join("</ol>")), f += 1, e += '<li><a href="#point' + f + '" title="' + b + '">' + b + "</a></li>", c = parseInt(d), "<h" + d + " id='point" + f + "'>" + b + "</h" + g + ">")
    });
    c && (e += Array(c - 1).join("</ol>"));

    a = a.replace('<div id="elcTOC">\n</div>', '<div id="elcTOC">' + e + "</ol></div>");
    a = a.replace(RegExp('<div class="separator( [^"]*?)?"(>|\\s[^<>]*?>)([\\s\\S]*?)<\\/div>', "g"), '<figure class="separator$1"$2$3\n</figure>');
    a = a.replace(RegExp('<blockquote class="tr_bq( [^"]*?)?"(>|\\s[^<>]*?>)([\\s\\S]*?)<\\/blockquote>', "g"), '<blockquote class="tr_bq$1"$2$3\n</blockquote>');
    a = a.replace("<script>elcTOC();\x3c/script>", "");
    a = a.replace(/<b>(.*?)<\/b>/gi, "<strong>$1</strong>");
    a = a.replace(/<i>(.*?)<\/i>/gi, "<em>$1</em>");
    a = a.replace(/https:\/\/draft.blogger.com\/blogger.g\?blogID=4156644495655521536/gi, "");
    a = a.replace(/rel=\'nofollow\'/gi, "rel='nofollow noopener'");
    a = a.replace(/<br \/>\n<br \/>\n<br \/>\n<br \/>/gi, "<br /><br />");
    b.value = a;
    b.focus();
    b.select()
}
