//Last in first out
function ceo(){
    console.log("CEO")
    PManager()
}
function PManager(){
    console.log("project manager")
    techLead()
}
function techLead(){
    console.log("technical lead")
    developer()
}
function developer(){
    console.log("developer")
}
ceo()