window.addEventListener("message", function(e) {
    if (!e.data || typeof(e.data) != 'string' || e.data.indexOf(':') == -1) {
        return;
    }
    var i = e.data.split(":")[1];
    var h = e.data.split(":")[2];
    if (e.data.split(":")[0] == "swimlanes-io" && i && h) {
        document.getElementById("__sw-io-" + i).setAttribute("style","height:" + h + "px");
    }
}, false);