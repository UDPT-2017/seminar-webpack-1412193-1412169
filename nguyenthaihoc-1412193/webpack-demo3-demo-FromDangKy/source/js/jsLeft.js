function moveLeft() {
    alert("Hello left");
    var selectMonhoc = document.getElementById('lstDSMH');
    var selectChonmonhoc = document.getElementById('lstDSMHs');
    var index = selectChonmonhoc.selectedIndex;
    if (index < 0) return;
    var valueString = selectChonmonhoc.value;
    var OptionElement = document.createElement("option");
    OptionElement.value = valueString;
    OptionElement.text = valueString;
    selectMonhoc.add(OptionElement);
    selectChonmonhoc.remove(index);
}

function moveAllLeft() {
    var selectMonhoc = document.getElementById('lstDSMH');
    var selectChonmonhoc = document.getElementById('lstDSMHs');
    while (selectChonmonhoc.length >= 0) {
        var valueString = selectChonmonhoc.options[0].value;
        var OptionElement = document.createElement("option");
        OptionElement.value = valueString;
        OptionElement.text = valueString;
        selectMonhoc.add(OptionElement);
        selectChonmonhoc.remove(0);
    }
}

module.exports = {
  moveLeft : moveLeft,
  moveAllLeft : moveAllLeft
}
