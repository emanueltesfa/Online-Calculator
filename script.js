
function performStatistics(){
    var array1 = document.getElementById("input").value;
    array1 = array1.split(" ");
    let array = array1.map(Number);
    array = array.sort(function (b,a){return b-a});
    if(isNaN(array[0]) || isNaN(array[4])){
        alert("Please add more numbers");
    }else {
        document.getElementById("sum").value = calcSum(array);
        document.getElementById("mean").value = calcMean(array);
        document.getElementById("median").value = calcMedian(array);
        document.getElementById("mode").value = calcMode(array);
        document.getElementById("max").value = findMax(array);
        document.getElementById("min").value = findMin(array);
        document.getElementById("stdDev").value = calcStdDev(array);
        document.getElementById("variance").value = calcVariance(array);
        return false;
    }
}

function calcSum(array) {
    let sum = 0;
    for (let i = 0; i<array.length; i++){
        sum += array[i];
    }
    return sum.toFixed(2);
}

function calcMean(array){
    let sum = calcSum(array);
    return (sum/array.length).toFixed(2);
}

function calcMedian(array){
    if (array.length % 2 === 0){
        let mid = array[ (array.length / 2) -1 ] + array[ (array.length / 2) ];
        return (mid/2).toFixed(2);
    }else {
      return array[Math.floor(array.length/2)].toFixed(2);
    }
}

function calcStdDev(array){
    let top = 0;
    let avg = calcMean(array);

    for(let i = 0; i<array.length;i++){
        let topTemp = (array[i]-avg);
        top += topTemp * topTemp;
    }

    top = Math.sqrt((top/array.length))
    return top.toFixed(2);
}

function findMax(array) {
    return array[array.length-1].toFixed(2);
    /*
    let max = array[0];
    alert("Initial max " + max);
    for (let i = 1; i < array.length; i++) {
        if (array[0] < array[i]) {
            max = array[i];
            alert("new max " + max);
        }
    }
    alert("Final Max " + max);
    return max;
     */
}

function findMin(array){
    return array[0].toFixed(2);
}

function calcVariance(array) {
        let top = 0;
        let avg = calcMean(array);

        for(let i = 0; i<array.length;i++){
            let topTemp = (array[i]-avg);
            top += topTemp * topTemp;
        }

    top = (top/array.length);
        return top.toFixed(2);
}

function calcMode(array) {
    var modeCounter = {};
    var maxFreq = 0;
    var modes = [];

    for (let i in array) {
        modeCounter[array[i]] = (modeCounter[array[i]] || 0) + 1;

        if (modeCounter[array[i]] > maxFreq)
            maxFreq = modeCounter[array[i]];
    }

    for (var j in modeCounter) {
        if (modeCounter[j] === maxFreq)
            modes.push(j);

    }
    if (maxFreq === 1){
        return "No mode";
    }else {
        return modes;
    }
    /*let mode = "";
    let modeCounter = 0;
    let currentCount = 0;

//framework
    for(let x=1;x<array.length;x++) {
        if (x < array.length && array[x - 1] === array[x]) {
            if(){
            currentCount++;
            }
        } else if (currentCount === modeCounter) {
            array[x - 1] = mode + "";
            currentCount = 0;
        } else if (currentCount > modeCounter) {
            array[x - 1] = mode + "";
            modeCounter = currentCount;
            currentCount = 0;
        } else {

        }
    }
        return mode;
*/

}

