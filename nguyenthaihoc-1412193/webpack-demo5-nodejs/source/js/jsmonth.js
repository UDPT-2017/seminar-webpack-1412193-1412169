function month() {
    var strings = "";
    for (i = 1; i <= 12; i++) {
        strings += "<option value='" + i + "'>" + i + "</option>\n";
    }
    return strings;
}

module.exports = month;
