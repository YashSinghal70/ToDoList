let inputs=document.getElementById("inp");
let text=document.querySelector(".text");

function Add()
{
    // If No Text Is Enter by user
    if (inputs.value=="") {
        alert("Please Enter Your Task");
    }
    else
    {
        // Create Ul For User enter the text
        let TaskEnterByUser=document.createElement("ul");
        TaskEnterByUser.innerHTML=`${inputs.value} <i class="fa-solid fa-trash cans"></i>`;
        console.log(TaskEnterByUser);
// In Which Bolck We Add Text That User Add
        text.append(TaskEnterByUser);
        // To Clear text From Input
        inputs.value="";
        // When We Click On Delete Icon It delete the text
         TaskEnterByUser.querySelector("i").addEventListener("click" , remove)
         
            function remove()
            {
                TaskEnterByUser.remove();
            }
         
    }
} 