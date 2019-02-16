import { VendingMachine } from './VendingMachine'

export class TuckShop {
    private machineName: string
    private machineId: number
    private powerType: string
    private vendingMachine: VendingMachine

    public constructor(machineName?: string, machineId?: number, powerType?: string, vendingMachine?: VendingMachine) {
        this.machineName = machineName;
        this.machineId = machineId;
        this.powerType = powerType;
        this.vendingMachine = vendingMachine;
    }

    setMachineName(machineName: string): void {
        this.machineName = machineName;
    }
    getMachineName(): string {
        return this.machineName
    }

    setMachineNumber(machineId: number) {
        this.machineId = machineId;
    }
    getMachineId(): number {
        return this.machineId;
    }

    setPowerType(powerType: string): void {
        this.powerType = powerType;
    }
    getPowerType(): string {
        return this.powerType
    }

    setvedingMachine(vendingMachine: VendingMachine): void {
        this.vendingMachine = vendingMachine;
    }
    getVedingMachine(): VendingMachine {
        return this.vendingMachine
    }


}