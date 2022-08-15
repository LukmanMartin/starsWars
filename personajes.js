let listaPersonajes = []

  
 
    window.onload = () => {
        init();
        }
        
        const init = async () => {
        
        await cargarPersonajes()
        printPersonajes()
        }

    const cargarPersonajes =async () => {
        try{
        const response = await fetch('https://starwars-server.vercel.app/characters')
        const apiResultJosn = await response.json()
        listaPersonajes = apiResultJosn.data.characters
        } catch (error){
            console.log(error)
        }
    }

    const printPersonajes = () => {
        const container = document.getElementById('personajesContainer')
        listaPersonajes.forEach(personaje =>{
            container.innerHTML +=
            `
            <div class="box">
            <div class="card">
              <div class="imgBx">
              <img src="${personaje.portrait}"  alt="Some image" referrerpolicy="no-referrer""/>
              </div>
              <div class="details">
              <h2>${personaje.name}<br><span>${personaje.role}</span></h2>
              </div>
            </div>
            `
            
      
           

        })
    }
