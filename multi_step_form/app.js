const multiStepForm = document.querySelector("[data-multi-step]");
const formStep = [... multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formStep.findIndex(step =>{
  return  step.classList.contains("active");
}) 

if(currentStep < 0 ){
    currentStep = 0
     showCurrentStep();
}
// console.log(currentStep)

// moving to next step
multiStepForm.addEventListener("click", e =>{
    let incrementor; 
    if(e.target.matches("[data-next]")){
        incrementor = 1
    }else if(e.target.matches("[data-previous]")){
        incrementor = -1;
    }

    if (incrementor == null) return


    const inputs = [...formStep[currentStep].querySelectorAll("input")];
    const allvalid = inputs.every(input => input.reportValidity());
    if(allvalid){
        currentStep += incrementor;
        showCurrentStep()

    }
 //  console.log(currentStep);   
})

// formStep.forEach(step =>{
//     step.addEventListener("animationed", () => {
//         if(step.classList.toggle("hide", !step.classList.contains("active")) 
//     });
// })



function showCurrentStep(){

    formStep.forEach((step, index) => {
       step.classList.toggle("active", index === currentStep);
        
    })
    

}
