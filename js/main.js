let form =document.querySelector('form')
let nom =document.querySelector('input')

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(nom.value.trim().length==0){
        alert('veuillez saisir unn nom')
    }else{
        alert(`Bonjour ${nom.value.trim()}!`)
    } 
})