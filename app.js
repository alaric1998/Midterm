let global = 10;


var list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];

var wubba = '';
list.forEach(player);

function player(attribute){
    if(attribute['sound']>=6){
        list += '<div style="color:blue;">';
    }
    else{
        list += '<div>';
    }

    list += '<h1>Name: '+attribute['name']+'</h1>'+'<h3>Sound: '+attribute['sound']+'</h3>'+'</h3>'+'</div>';

};



let button = document.createElement("button");


button.addEventListener("click", function(){
    global=global+1;
    button.innerHTML=global;
    if(global==15){
        button.innerHTML="cool we hit the number ";
    }
    else{
    };

})

document.body.innerHTML=list;

document.body.appendChild(button);
