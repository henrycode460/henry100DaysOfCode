
document.getElementById("output").style.visibility = 'hidden';

document.getElementById("lbsInput").addEventListener("input", function(e){
    document.getElementById("output").style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById("gramsOutputs").innerHTML = lbs/0.0022046;
    document.getElementById("kilogramsOutputs").innerHTML = lbs/2.2046;
    document.getElementById("ouncesOutputs").innerHTML = lbs*16;
})