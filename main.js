/*data() → Define os valores que os inputs vão modificar.
 computed → Calcula os valores dinamicamente sempre que o usuário altera os inputs.
 consumoMensal() → Calcula o consumo com base na potência, horas e dias.
 custoMensal() → Multiplica o consumo pelo custo da energia.
 btusNecessarios() → Calcula os BTUs necessários com base no tamanho, pessoas e janelas.
 app.mount("#app") → Liga o Vue ao HTML para que os valores sejam exibidos corretamente.*/



 // main.js

const app = Vue.createApp({
    data() {
        return {
            // Cálculo de Consumo e Custo
            potencia: 0,
            horasPorDia: 0,
            diasPorMes: 0,
            custoEnergia: 0,

            // Cálculo de BTUs Necessários
            tamanhoAmbiente: 0,
            numPessoas: 1,
            numJanelas: 0
        };
    },
    computed: {
        // Cálculo do consumo mensal (kWh)
        consumoMensal() {
            let consumo = (this.potencia * this.horasPorDia * this.diasPorMes) / 1000;
            return isNaN(consumo) ? 0 : consumo; // retorna o número sem formatar
        },
        custoMensal() {
            let custo = this.consumoMensal * this.custoEnergia;
            return isNaN(custo) ? 0 : custo; // retorna o número sem formatar
        },
        btusNecessarios() {
            let baseBTU = this.tamanhoAmbiente * 600;
            baseBTU += this.numPessoas > 1 ? (this.numPessoas - 1) * 600 : 0;
            baseBTU += this.numJanelas * 800;
            return Math.ceil(baseBTU / 100) * 100; // Arredonda para o múltiplo de 100
        }
    }
});

app.mount("#app");
