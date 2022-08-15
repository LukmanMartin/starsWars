let listaPeliculas = []

  
 
    window.onload = () => {
        init();
        }
        
        const init = async () => {
        
        await cargarPeliculas()
        printPeliculas()
        }

    const cargarPeliculas =async () => {
        try{
        const response = await fetch('https://starwars-server.vercel.app/movies')
        const apiResultJosn = await response.json()
        listaPeliculas = apiResultJosn.data.movies
        } catch (error){
            console.log(error)
        }
    }

    const printPeliculas = () => {
        const container = document.getElementById('peliculasContainer')
        listaPeliculas.forEach(pelicula =>{
            container.innerHTML +=
            `
            <div class="box">
            <div class="card">
              <div class="imgBx">
              <img src="${pelicula.poster}"  alt="Some image" referrerpolicy="no-referrer""/>
              </div>
              <div class="details">
              <h2>${pelicula.name}<br><span>${pelicula.year}</span></h2>
              </div>
            </div>

            `
            


           

        })
    }
