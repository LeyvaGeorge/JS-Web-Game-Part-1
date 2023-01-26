
function newItem(source, left, bottom){
    let item = document.createElement('img')    //create an image to pace onto the website
    item.src = source               //source of img
    item.style.position = 'fixed'   //object doesn't have animation
    item.style.left = left + 'px'  //moves item from left to right
    item.style.bottom = bottom + 'px'   //moves item from bottom of screen higher
    document.body.append(item)      //add item to the website
    return item
}
function clickableItem(source, left, bottom){
    let object = newItem(source, left, bottom)  //adds img to website
//double click function to remove img          
    object.addEventListener('dblclick', () => {
        object.remove()
    })

}
//==============creates IMG====================
newItem('assets/green-character.gif', 100, 100)
newItem('assets/tree.png', 200, 300)
newItem('assets/pillar.png', 350, 100)
newItem('assets/crate.png', 150, 200)
newItem('assets/well.png', 500, 425)
newItem('assets/green-character.gif', 100, 100)
//================Clickable IMG================
clickableItem('assets/sword.png', 500, 405)
clickableItem('assets/shield.png', 165, 185)
clickableItem('assets/staff.png', 600, 100)


