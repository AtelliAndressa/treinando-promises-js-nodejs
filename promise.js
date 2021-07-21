const idade = 17;

const executando = new Promise(
    function(resolve, reject){
        if (idade >= 18){
            resolve ("Permitido a entrada")
        } else {
            setTimeout(() => {
                reject("Entrada proibida")
            }, 2000);
        }    
    }
);

executando
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })


    /*************************************************/

const idade = 18;

const executando = new Promise(
    function(resolve, reject){
        if (idade >= 18){
            setTimeout(() => {
                resolve("resolve")
            }, 2000);
        } else {
            reject ("reject")
        }    
    }
);

executando
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })

/********************************************************************/
function checkingNumber(number) {
    const ePrimo = (number) => {
        for (let i = 2; i < number; i++)
          if (number % i === 0) {
            return false; //NAO PRIMO
          }
        return number > 1; //PRIMO
    };

    if (number > 0) {
        return new Promise((resolve, reject) => {
            if(number % 2 == 0) {
                resolve("Sucesso!");
            } else if (ePrimo(number)) { //PASSA PARAMETRO AQUI
                resolve("Sucesso!");
            } else {
                reject('Erro')
            }
        });
    };
};

checkingNumber(15)
  .then((response) => {
    console.log(response);
  })
  .catch((response) => {
    console.log(response);
  });