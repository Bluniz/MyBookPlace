import models from './modelDatas'

export function formatDate(date) {
    const newDate = date.split('-')
    //[0] -> ano | [1] -> mês | -> [2] -> dia
    let mouthName

    /*
   Verifica se a numeração do mês se encaixa com a index do modelo.
  Como a index começa com 0, é necessário diminuir seu valor com 1 para igualar.
  */
    models.mouthNames.forEach((mouth, index) => {
        if (newDate[1] - 1 === index) {
            mouthName = mouth
        }
    })

    return `${newDate[2]} de ${mouthName} de ${newDate[0]}`
}
