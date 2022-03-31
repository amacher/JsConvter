function graphicDesignConverter(id, value) {
//from W3.org  https://www.w3.org/TR/css3-values/#absolute-lengths
// 1px = 1/96th of 1in     
// 1pt = 1/72th of 1in 
// 1in = 2.54cm = 96px
// 1cm = 96px/2.54 
// 1mm = 1/10th of 1cm 
// 1pica = 1/6th of 1in 

num = parseFloat(value);
let pixels = document.getElementById("pixels");
let points = document.getElementById("points");
let inches = document.getElementById("inches");
let centimeters = document.getElementById("centimeters");
let picas = document.getElementById("picas");
if (id=="pixels"){
    points.value=parseFloat((num * (72/96)).toFixed(6));
    inches.value=parseFloat((num / 96).toFixed(6));
    centimeters.value=parseFloat(((num / 96) * 2.54).toFixed(6));
    millimeters.value=parseFloat((10 * ((num / 96) * 2.54)).toFixed(6));
    picas.value=parseFloat((num * 0.0625).toFixed(6));
}
if (id=="points"){
    pixels.value=parseFloat((num * (96/72)).toFixed(6));
    inches.value=parseFloat((num / 72).toFixed(6));
    centimeters.value=parseFloat(((num / 72) * 2.54).toFixed(6));
    millimeters.value=parseFloat((10 * ((num / 72) * 2.54)).toFixed(6));
    picas.value=parseFloat((num / 12).toFixed(6));
}
if (id=="inches"){
    pixels.value=parseFloat((num * 96).toFixed(6));
    points.value=parseFloat((num * 72).toFixed(6));
    centimeters.value=parseFloat((num * 2.54).toFixed(6));
    millimeters.value=parseFloat((10 * (num * 2.54)).toFixed(6));
    picas.value=parseFloat((num * 6).toFixed(6));
}
if (id=="centimeters"){
    pixels.value=parseFloat((num * 37.7952755906).toFixed(6));
    points.value=parseFloat((num * 28.3464567).toFixed(6));
    inches.value=parseFloat((num / 2.54).toFixed(6));
    millimeters.value=parseFloat((num * 10).toFixed(6));
    picas.value=parseFloat((num * 2.362204724).toFixed(6));
}
if (id=="millimeters"){
    pixels.value=parseFloat((num * 3.77952755906).toFixed(6));
    points.value=parseFloat((num * 2.83464567).toFixed(6));
    inches.value=parseFloat((num / 25.4).toFixed(6));
    centimeters.value=parseFloat((num / 10).toFixed(6));
    picas.value=parseFloat((num * 0.2362204724 ).toFixed(6));
}
if (id=="picas"){
    pixels.value=parseFloat((num / 0.0625).toFixed(6));
    points.value=parseFloat((num * 12).toFixed(6));
    inches.value=parseFloat((num / 6).toFixed(6));
    centimeters.value=parseFloat((num / 2.362204724).toFixed(6));
    millimeters.value=parseFloat((num / 0.2362204724 ).toFixed(6));
}}


function computerDecimalConverter(id, value) {
//1GB = 1 billion bytes, and 1TB = 1 trillion bytes; actual formatted capacity less.
//1TB; 1000GB; 1000000MB; 1000000000KB 
//1 GB = 1,000,000 KB; 1 GB = 1000 MB
//1 MB = 1000 KB
//1 TB = 1,000,000 MB
num = parseFloat(value);
let kilobytes = document.getElementById("kilobytesd");
let megabytes = document.getElementById("megabytesd");
let gigbytes = document.getElementById("gigbytesd");
let terabytes = document.getElementById("terabytesd");
if (id=="kilobytesd"){
    megabytesd.value=parseFloat((num / 1000).toFixed(4));
    gigabytesd.value=parseFloat((num / 1000000).toFixed(4));
    terabytesd.value=parseFloat((num / 1000000000).toFixed(4));
}
if (id=="megabytesd"){
    kilobytesd.value=parseFloat((num * 1000).toFixed(10));
    gigabytesd.value=parseFloat((num / 1000).toFixed(10));
    terabytesd.value=parseFloat((num / 1000000).toFixed(10));
}
if (id=="gigabytesd"){
    kilobytesd.value=parseFloat((num * 1000000).toFixed(10));
    megabytesd.value=parseFloat((num * 1000).toFixed(10));
    terabytesd.value=parseFloat((num / 1000).toFixed(10));
}
if (id=="terabytesd"){
    kilobytesd.value=parseFloat((num * 1000000000).toFixed(10));
    megabytesd.value=parseFloat((num * 1000000).toFixed(10));
    gigabytesd.value=parseFloat((num * 1000).toFixed(10));
}
}

function computerBinaryConverter(id, value) {
    //1 KB = 0.0009765625 MB
    //1 MB = 1024 KB
    //1 GB = 1024 MB
    //1 TB = 1024 GB
    //1 TB = 1,048,576 MB
    //iOS 10 and earlier, Mac OS X Leopard and earlier, Microsoft Windows, and watchOS use the binary system (base 2), which calculates 1GB as 1,073,741,824 bytes. 
    num = parseFloat(value);
    let kilobytes = document.getElementById("kilobytesb");
    let megabytes = document.getElementById("megabytesb");
    let gigbytes = document.getElementById("gigbytesb");
    let terabytes = document.getElementById("terabytesb");
    if (id=="kilobytesb"){
        megabytesb.value=parseFloat((num/1024).toFixed(8));
        gigabytesb.value=parseFloat((num/1048576).toFixed(8));
        terabytesb.value=parseFloat((num/1073741824).toFixed(8));
    }
    if (id=="megabytesb"){
        kilobytesb.value=parseFloat((num*1024).toFixed(8));
        gigabytesb.value=parseFloat((num/1024).toFixed(8));
        terabytesb.value=parseFloat((num/1048576).toFixed(8));
    }
    if (id=="gigabytesb"){
        kilobytesb.value=parseFloat((num*1048576).toFixed(8));
        megabytesb.value=parseFloat((num*1024).toFixed(8));
        terabytesb.value=parseFloat((num/1024).toFixed(8));
    }
    if (id=="terabytesb"){
        kilobytesb.value=parseFloat((num*1073741824).toFixed(8));
        megabytesb.value=parseFloat((num*1048576).toFixed(8));
        gigabytesb.value=parseFloat((num*1024).toFixed(8));
    }
    }

function RGB2CMYK(colors){
    let Rc = colors[0] / 255;
    let Gc = colors[1] / 255;
    let Bc = colors[2] / 255;
    let blk = (1 - Math.max(Rc, Gc, Bc));
    let cyan = 100 * (1 - Rc - blk) / (1 - blk);
    let mag = 100 * (1 - Gc - blk) / (1 - blk);
    let yel = 100 * (1 - Bc - blk) / (1 - blk);
    // console.log(cyan.toFixed(2))
    if (isNaN(cyan.toFixed(2))){
        C.value = '0';
    }
    else{
        C.value = parseFloat(cyan.toFixed(2));}
    if (isNaN(mag.toFixed(2))){
        M.value = '0';
    }
    else{
        M.value = parseFloat(mag.toFixed(2));}
    if (isNaN(yel.toFixed(2))){
        Y.value = '0';
    }
    else{
        Y.value = parseFloat(yel.toFixed(2));}
    K.value = parseFloat((100 * blk).toFixed(2));
    // console.log('C: ' + C + 'M: ' + M + 'Y: '+ Y)
}

function colorConverter(id, value){
    const rgbToHexColors = new Map([
        ["0", '0'],["1", '1'],["2", '2'],["3", '3'],['4', '4'],["5", '5'],["6", '6'],["7", '7'],["8", '8'],["9", '9'],['10', 'A'],['11', 'B'],['12', 'C'],['13', 'D'],['14', 'E'],['15', 'F']
      ]);
      const hexToRgbColors = new Map([
        ["0", 0],["1", 1],["2", 2],["3", 3],["4", 4],["5", 5],["6", 6],["7", 7],["8", 8],["9", 9],["A", 10],["B", 11],["C", 12],["D", 13],["E", 14],["F", 15]
      ]);
    let hex = document.getElementById("hex");
    let rgb = document.getElementById("RGB");

    if (id=="hex"){
        value=value.toUpperCase().replace(/[ ]/g, "");
        //RGB
        let finalToRgb = "";
        let R = (hexToRgbColors.get(value[0]) * 16) + hexToRgbColors.get(value[1])
        let G = (hexToRgbColors.get(value[2]) * 16) + hexToRgbColors.get(value[3])
        let B= (hexToRgbColors.get(value[4]) * 16) + hexToRgbColors.get(value[5])
        RGB.value=R + ',' + G + ',' + B;
        //CMYK
        let hexRgbArray = [R, G, B]
        // console.log('Hex: ' + hexRgbArray);
        RGB2CMYK(hexRgbArray);
    }
    if (id=="RGB"){
        colorRgb = value.replace(/[ ]/g, "");
        //R=0; G=1; B=2;
        let rgbArray = colorRgb.split(',');
        let finalToHex = "";
        // Run a for x in rgbArray to /16 then check if any after . then * 16.
        for (let x of rgbArray){
            toHex = String(Math.floor(x /16));
            toHex2 = String((x % 16));
            //to lookup assign to first
            finalToHex += rgbToHexColors.get(toHex);
            finalToHex += rgbToHexColors.get(toHex2);
        }
        hex.value=finalToHex;
        //to convert to CMYK
        // console.log('RGB: '+rgbArray);
        RGB2CMYK(rgbArray);
    }
    if (id=="K"){
        let cyan = document.getElementById("C").value;
        let mag = document.getElementById("M").value;
        let yellow = document.getElementById("Y").value;
        let black = document.getElementById("K").value;
        // To RGB
        let cyanDec = cyan/100;
        let magDec = mag/100;
        let yelDec = yellow/100;
        let blkDec = black/100;
        let RgbRed = (255 * (1 - cyanDec) * (1 - blkDec)).toFixed(0);
        let RgbGreen = (255 * (1- magDec) * (1 - blkDec)).toFixed(0);
        let RgbBlue = (255 * (1 - yelDec) * (1 - blkDec)).toFixed(0);
        RGB.value=RgbRed + ',' + RgbGreen + ',' + RgbBlue;
        // To Hex
        let rgbArray = [RgbRed, RgbGreen, RgbBlue];
        let finalToHex = "";
        for (let x of rgbArray){
            toHex = String(Math.floor(x /16));
            toHex2 = String(Math.round(x % 16));
            //to lookup assign to first
            finalToHex += rgbToHexColors.get(toHex);
            finalToHex += rgbToHexColors.get(toHex2);
        }
        hex.value = finalToHex;
    }
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}