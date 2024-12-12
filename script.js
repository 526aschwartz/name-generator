//generate our prefix 
function genPrefix (firstName) {
    if(firstName.length > 5){
        return 'The great'
    } else {
        return 'Master'
    }
}

//gen first name 
function genFirstName(firstName){
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a'){
        return 'Jeff'
    }else if (firstLetter === 'b'){
        return 'Pablo'
    } else {
        return 'Julian'
    }
}

//gen middle name 
function genMiddleName (roadType, favoriteColor){
    if(roadType = 'road'){
        return `${favoriteColor}ridge`  //ex: pinkridge
    }else if (roadType = 'street'){
        return `${favoriteColor}sun`   //ex: bluesun
    } else {
        return `${favoriteColor}stone` //ex: bluestone
    }
}

//gen last name 
function genLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length-1)
    if (lastLetter === 'a'){
        return 'Shadow'
    } else if (lastLetter === 'c'){
        return 'Blaze'
    } else {
        return 'Moon'
    }
}

//gen suffix 
function genSuffix(favoriteAnimal){
    return `of ${favoriteAnimal} clan.`
}

//master name building function
function genFullName(){
    //get the users input from the HTML elements 
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()
    //run name generating functions & store them in new variables 
    const prefix = genPrefix(firstName)
    const newFirstName = genPrefix(firstName)
    const middleName = genPrefix(roadType, favoriteColor)
    const newLastName = genPrefix(lastName)
    const suffix = genSuffix(favoriteAnimal)
    //capitalize name variables when needed 
    const capitalizePrefix = capitalize(prefix)
    const capitalizeFistName = capitalize(newFirstName)
    const capitalizeMiddleName = capitalize(middleName)
    const capitalizeLastName = capitalize(newLastName)
    //combine all of the name variables into a full new name

    //display the new name
}

//Capitalization function 
function capitalize(input){
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}