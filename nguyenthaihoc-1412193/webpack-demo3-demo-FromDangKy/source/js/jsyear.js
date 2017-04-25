function year() {
    var strings = "";
    for (i = 1980; i <= 2017; i++) {
        strings += "<option value='" + i + "'>" + i + "</option>\n";
    }
    return strings;
}

module.exports = year;
