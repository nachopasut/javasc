    let comando;
    let Discos

    while (comando != "Salir") {
        comando = prompt ("Ingrese el comando: Salir - Recomendaciones - Tienda de Cds");
    
    switch (comando){
        case "Salir":
            alert ("Saliendo de nuestra tienda de cds")
            break;
            
            
            case "Recomendaciones":
            alert ("Entrando a las recomendaciones exclusivas para miembros")
            let clave = prompt ("ingrese la clave enviada a su correo")
            if ("clave == 1234"){
            alert ("Bienvenido");
            window.location = "https://http2.mlstatic.com/D_Q_NP_759990-MLA48530764036_122021-O.webp";
                comando = "Salir"
            }
            
        break;
        case "Tienda de Cds":
            const Discos = []

            const Disco = prompt("Que disco desea comprar?")
          
            Discos.push(Disco)
            while (confirm ("¿Desea agregar mas discos?" )) {
               const Disco = prompt ("¿Que otro cd desea agragar?")
               Discos.push(Disco)
            }
            alert("Agregaste al carrito los siguientes discos " + Discos)
            break;
        }
        }
        
        

        