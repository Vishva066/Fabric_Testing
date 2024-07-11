'use strict';
const { WorkloadModuleBase } = require('@hyperledger/caliper-core');


class InitWorkload extends WorkloadModuleBase {
  constructor() {
      super();
      this.txIndex = 0;
  }


    // async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
    //     await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);
    //     for (let i=0; i<this.roundArguments.assets; i++) {
    //         const carId = `${this.workerIndex}_${i}`;
    //         console.log(`Worker ${this.workerIndex}: Creating car ${carId}`);
    //         const request = {
    //             contractId: this.roundArguments.contractId,
    //             contractFunction: 'CreateCar',
    //             invokerIdentity: 'User1',
    //             contractArguments: [carId,'SUV','XUV 700','Blue','03/05/23','Mahindra'],
    //             readOnly: false
    //         };


    //     await this.sutAdapter.sendRequests(request);
    //     }
    // }

    async submitTransaction() {
        // for (let i=1; i<=this.txIndex; i++) {
            console.log(`${this.txIndex}`)
            const carId = `T1${this.workerIndex}car_${this.txIndex}`;
            this.txIndex++;
            console.log(`Worker ${this.workerIndex}: Creating ${carId}`);
            const request = {
                contractId: this.roundArguments.contractId,
                contractFunction: 'CreateCar',
                invokerIdentity: 'User1',
                contractArguments: [carId,'Mahindra','XUV700','Blue','Crypto exchange Blockchain.com has acquired Altonomys over-the-counter (OTC) trading desk Blockchain.com told CoinDesk it has already integrated Altonomys “core systems” with the firms existing OTC trading capabilities, according to Vice President of Markets Dan Bookstaber. Twenty-six Altonomy employees have also moved over, he said.He declined to disclose the terms of the deal but said only Altonomys OTC desk was transferred. A since-deleted March 10 notice from Global Legal Chronicle described a cash-and-stock sale advised by the law firm Allen & Overy. Altonomy is a digital assets investments, market making and OTC firm founded in 2018, according to Pitchbook. Specializing in altcoins like the recently debuted ApeCoin (APE), its OTC desk pairs buyers and sellers of hard-to-move assets. Bookstaber said Altonomy works with over 1,000 clients. The deal significantly expands Blockchain.coms presence in crypto OTC trading. Altonomy handled over $16 billion in spot market OTC trades last year; by comparison, Blockchain.com saw $10 billion in total activity across all its institutional crypto business lines, OTC included. A Blockchain.com representative declined to provide the breakdown. Altonomys client network, its Asia footprint and the altcoin focus was what clinched the deal, Bookstaber said. Blockchain.com already had “one of the larger desks” for OTC optionswhich are more complex than spot trades  and Altonomys business bolsters its altcoin trading capacity. Their technology is very good at finding liquidity and managing execution on coins that are much lower liquidity, Bookstaber said. “They have quite a bit of network within the ecosystem of people who are building these clients, far before they ever get listed. The deal comes as big banks are only just waking up to complex crypto trades. On Monday, Goldman Sachs (GS) announced it had “facilitated and executed” its first OTC crypto options trade in conjunction with Galaxy Digital. That product was a non-deliverable bitcoin (BTC) option.','03/05/23'],
                readOnly: false
            };
            await this.sutAdapter.sendRequests(request);

        }

        // async cleanupWorkloadModule() {
        //     for (let i=0; i<30; i++) {
        //         const carId = `${this.workerIndex}car_${i}`;
        //         console.log(`Worker ${this.workerIndex}: Deleting car ${carId}`);
        //         const request = {
        //             contractId: this.roundArguments.contractId,
        //             contractFunction: 'DeleteCar',
        //             invokerIdentity: 'User1',
        //             contractArguments: [carId],
        //             readOnly: false
        //         };
        //          await this.sutAdapter.sendRequests(request);
        //     }
        // }
    }
function createWorkloadModule() {
    return new InitWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;