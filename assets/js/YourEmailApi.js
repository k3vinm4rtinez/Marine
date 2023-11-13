const URL = "https://api.youremailapi.com/"

fetch(url)
.then(response => response.json() )
.then(data => {
    console.log(data)
})
.catch(err=>console.log(err))