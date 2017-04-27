function moveRight() {
    var selectMonhoc = document.getElementById('lstDSMH');
    var selectChonmonhoc = document.getElementById('lstDSMHs');
    var index = selectMonhoc.selectedIndex;
    if (index < 0) return;
    var valueString = selectMonhoc.value;
    var OptionElement = document.createElement("option");
    OptionElement.value = valueString;
    OptionElement.text = valueString;
    selectChonmonhoc.add(OptionElement);
    selectMonhoc.remove(index);
}

function moveAllRight() {
    var selectMonhoc = document.getElementById('lstDSMH');
    var selectChonmonhoc = document.getElementById('lstDSMHs');
    while (selectMonhoc.length >= 0) {
        var valueString = selectMonhoc.options[0].value;
        var OptionElement = document.createElement("option");
        OptionElement.value = valueString;
        OptionElement.text = valueString;
        selectChonmonhoc.add(OptionElement);
        selectMonhoc.remove(0);
    }
}

module.exports = {
  moveRight : moveRight,
  moveAllRight : moveAllRight
};
