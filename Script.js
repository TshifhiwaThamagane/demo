const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const handleClick = (e) => {
    e.preventDefault();
   window.open(`mailto:${email}?subject=${subject}&body=${fname}: ${message}`);
}
 

form.addEventListener('submit' , (e) => {
    let messages = []
    if(name.value === '' || name.value == null){
        messages.push('Name is required')

    }

   if(password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')


   }
   if(password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
   }

   if(password.value === 'password' ){
    messages.push('Password cannot be password(HINT:Use a strong password e.g YEDFe@df52)')
   }
    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

    }
})