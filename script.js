function Temperature(cTemp) {
    this.cTemp = cTemp;
    
    this.toFTemp = function () {
        return this.cTemp * 1.8 +32;
    }

    this.toKTemp = function () {
        return this.cTemp + 273.15;
    }
}

let temp = new Temperature(25);
alert("" + temp.cTemp + " độ C bằng " + temp.toFTemp() + " dộ F, hoặc " + temp.toKTemp() + " độ K");