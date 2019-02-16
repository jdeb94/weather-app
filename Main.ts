import { VendingMachine } from './VendingMachine'
import { TuckShop } from './TuckShop'

class Main {
    private tuckShopArray: TuckShop[];
    createTuckShopObjectWithConstructor(machineName: string, machineId: number
        , powerType: string, drinkName: string, quantityOfDrink: number, noOfCupsRequired: number,
        costOfOneCup: number): void {
        this.tuckShopArray.push(new TuckShop(machineName, machineId, powerType, new VendingMachine(drinkName
            , quantityOfDrink, noOfCupsRequired, costOfOneCup)));
    }
    createTuckShopObjectWithSetter(): void {

    }







}