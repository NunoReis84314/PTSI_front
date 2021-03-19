
async function requestLogin() {
    var email = document.getElementById('your-email').value;
    var password = document.getElementById('password').value;
    

    
                fetch('https://ptsibackend.herokuapp.com/login', {
                    method: 'POST',
                    
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }).then(result => {
                    console.log(result)
                    if(result.status == 200) {
                        window.location.replace("semregisto.html") 
                    }
                    else {
                        console.log("Erro!")
                    }
                    return result.json();
                })
            }
       
