
//car
let carArr = [];

class Car {
   constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba= alturaCacamba;
       this.alturaVeiculo= alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
               if(carArr.length < 1) { 
                   carArr.push(carClass);
                   el.classList.add("primeiro-carro")
               } else if(carArr.length > 0 && carArr.length < 2){
                    carArr.push(carClass);
                    el.classList.add("segundo-carro")
               } else {
                   el.checked = false;
               }
        } else {
            if(el.classList.contains("primeiro-carro")){
                carArr.splice(0,1);
                alert("Removendo o Primeiro Carro");
            } else if (el.classList.contains("segundo-carro")){
                carArr.splice(1,1);
                alert("Removendo o Segundo Carro");
            }
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
    uncheckAll();
    removeData();
    console.log(carArr);
}

function UpdateCompareTable() {
    for(let i = 0; i < 2; i++) {
        const modelo = document.getElementById("compare_modelo_"+i);
        const preco = document.getElementById("compare_preco_"+i);
        const alturaCacamba = document.getElementById("compare_alturacacamba_"+i);
        const alturaVeiculo = document.getElementById("compare_alturaveiculo_"+i);
        const alturaSolo = document.getElementById("compare_alturasolo_"+i);
        const capacidadeCarga = document.getElementById("compare_capacidadecarga_"+i);
        const motor = document.getElementById("compare_motor_"+i);
        const potencia = document.getElementById("compare_potencia_"+i);
        const volumeCacamba = document.getElementById("compare_volumecacamba_"+i);
        const roda = document.getElementById("compare_roda_"+i);
     

        modelo.textContent = carArr[i].nome;
        preco.textContent = carArr[i].preco;
        alturaCacamba.textContent = carArr[i].alturaCacamba;
        alturaVeiculo.textContent = carArr[i].alturaVeiculo;
        alturaSolo.textContent = carArr[i].alturaSolo;
        capacidadeCarga.textContent = carArr[i].capacidadeCarga;
        motor.textContent = carArr[i].motor;
        potencia.textContent = carArr[i].potencia;
        volumeCacamba.textContent = carArr[i].volumeCacamba;
        roda.textContent = carArr[i].roda;
    }
}

function uncheckAll(){
    const teste = document.querySelectorAll(".checkbox");
    for (let i = 0; i < teste.length; i++) {
        teste[i].checked = false;
    }
}

function removeData(){
    for(let i = 0; i <= carArr.length; i++) {
        carArr.pop();
    }
}