// if

const tipoDeSuscripción = ["Free", "Basic", "Expert", "ExpertDuo"]

function soloUnIf (datoParaUsarLaFunción) {
    for (let i = 0; i < datoParaUsarLaFunción.length; i++) { 
        if (datoParaUsarLaFunción[i] === "Expert") {
            console.log(`Yo ya sabia que eras todo un experto`)
        } else {
            console.log("___Repetición de ciclo___")
        }
    }
}


soloUnIf(tipoDeSuscripción)