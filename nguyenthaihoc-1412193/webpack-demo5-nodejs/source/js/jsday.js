function date() {
    var strings = "";
    for (i = 1; i <= 31; i++) {
        strings += "<option value='" + i + "'>" + i + "</option>\n";
    }
    return strings;
}


module.exports = date;
