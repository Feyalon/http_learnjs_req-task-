
async function getUsers(names){
    event.preventDefault()
    for(let name of names){
        let user = await fetch(`https://api.github.com/users/${name}`)
            .then (response => {
                if(response.status == 200){
                    console.log(response)
                }else{
                    console.log(null)
                }
            })
    }
}