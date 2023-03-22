const teamMembersArray = [
    {
       name: "Wayne Barnett",
       ruolo: "Founder & CEO",
       foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
       name: "Angela Caroll",
       ruolo: "Chief Editor",
       foto: "angela-caroll-chief-editor.jpg"
    },
    {
       name: "Walter Gordon",
       ruolo: "Office Manager",
       foto: "walter-gordon-office-manager.jpg"
    },
    {
       name: "Angela Lopez",
       ruolo: "Social Media Manager",
       foto: "angela-lopez-social-media-manager.jpg"
    },
    {
       name: "Scott Estrada",
       ruolo: "Developer",
       foto: "scott-estrada-developer.jpg"
    },
    {
       name: "Barbara Ramos",
       ruolo: "Graphic Designer",
       foto: "barbara-ramos-graphic-designer.jpg"
    }
];
let list = "";
for (let i = 0; i < teamMembersArray.length; i++) {
    const objectArray = teamMembersArray[i];
    //stampo gli objecy
    console.log(objectArray);

    list += `<li>${objectArray.name} 
                ${objectArray.ruolo} 
                ${objectArray.foto}</li>`
   
    for (let key in objectArray) {
        //stampo object key and value
        console.log(key, objectArray[key]);
    }
}



const objectList = document.querySelector(".list-obj");
objectList.innerHTML = list;
