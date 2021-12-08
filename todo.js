
function addTodo()
{
    // create an input element
    var input =  document.createElement ("input");
    document.getElementById("todoForm").appendChild(input);

    //listen for enter key pressed and add to list

    input.addEventListener("keyup",function(event)
    {
        if (event.keyCode == 13)
        {
            //event.preventDefault();
            var task = input.value;
            if(task == ""){
                alert("Type something")
                input.remove();
            } else
            {
                // list element

                var listElement = document.createElement("li");
                var label = document.createElement("label");

                //checkbox
                var check = document.createElement("input");
                check.setAttribute("type","checkbox");
                check.setAttribute("id","check");
                label.appendChild(check);

                //to-do name
                var labeltext = document.createElement("span");
                labeltext.innerText = task;
                labeltext.setAttribute("id","labeltext");
                label.appendChild(labeltext);

                //delete to-do button
                var del = document.createElement("button");
                del.setAttribute("id","del");
                del.innerText = "X";
                del.addEventListener("click", function()
                {
                    listElement.remove();
                })

                listElement.appendChild(label);
                label.appendChild(del);

                document.getElementById("todos").appendChild(listElement);
                input.remove();
            }

           
        }
    })



}