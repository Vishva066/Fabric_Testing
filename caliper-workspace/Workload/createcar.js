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
                contractArguments: [carId,'SUV','XUV 700','Blue','03/05/23','Mahindra'],
                readOnly: false
            };
            await this.sutAdapter.sendRequests(request);

        }

        async cleanupWorkloadModule() {
            for (let i=0; i<30; i++) {
                const carId = `${this.workerIndex}car_${i}`;
                console.log(`Worker ${this.workerIndex}: Deleting car ${carId}`);
                const request = {
                    contractId: this.roundArguments.contractId,
                    contractFunction: 'DeleteCar',
                    invokerIdentity: 'User1',
                    contractArguments: [carId],
                    readOnly: false
                };
                 await this.sutAdapter.sendRequests(request);
            }
        }
    }

    






function createWorkloadModule() {
    return new InitWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;