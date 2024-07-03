document.addEventListener("DOMContentLoaded",async ()=>{
    console.log("hello")

    const result = await fetch('http://localhost:6081/user/one')

    const json = await result.json();

    console.log(json)

    document.getElementById("makeNewUser").addEventListener("click", ()=>{
        var firstName = document.getElementById("firstname").value
        var lastName = document.getElementById("lastname").value

        var dateTime = new Date()

        var obj = {
            firstname: firstName,
            lastname: lastName,
            createdDate: dateTime
        }
        console.log(obj)
        var result =  fetch("http://localhost:6081/user/make-new-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
          }).then((response)=>{
            var data = response.json()
            console.log(data)
          })

    })

    document.getElementById("getUsers").addEventListener("click",async ()=>{


        const result = await fetch("http://localhost:6081/user/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
          })

        const data = await result.json()
        console.log("here is the data : " , data)

        const thatDiv = document.getElementById("showingUsers")

        thatDiv.innerHTML = ''

        data.forEach((oneUser)=>{
            const thingToAdd = `<p>${oneUser.firstname} | ${oneUser.lastname}</p><hr>`
            thatDiv.innerHTML += thingToAdd 
        })

        //thatDiv.innerHTML = data;
    })
})