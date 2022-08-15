let listaPersonajes = []

  
 
    window.onload = () => {
        init();
        }
        
        const init = async () => {
        
        await cargarPlanetas()
        printPlanetas()
        }

    const cargarPlanetas =async () => {
        try{
        const response = await fetch('https://starwars-server.vercel.app/planets')
        const apiResultJosn = await response.json()
        listaPlanetas = apiResultJosn.data.planets
        } catch (error){
            console.log(error)
        }
    }

    const printPlanetas = () => {
        const container = document.getElementById('planetasContainer')
        listaPlanetas.forEach(planeta =>{
            container.innerHTML +=
            `
            <div class="box">
            <div class="card">
              <div class="imgBx">
              <img src="${planeta.image}"  alt="Some image" referrerpolicy="no-referrer""/>
              </div>
              <div class="details">
              <h2>${planeta.name}<br><span>${planeta.suns}</span></h2>
              </div>
            </div>
          

            `

            
           

        })
    }
