export class VendingMachine {
    private drinkName: string
    private quantityofDrink: number
    private noOfCupsRequired: number
    private costOfOneCup: number
    private concentrationRequired: string[] = ['light', 'medium', 'strong'];
    public constructor(drinkName?: string, quantityofDrink?: number, noOfCupsRequired?: number, costOfOneCup?: number) {
        this.drinkName = drinkName;
        this.quantityofDrink = quantityofDrink;
        this.noOfCupsRequired = noOfCupsRequired;
        this.costOfOneCup = costOfOneCup;
    }

    setDrinkName(drinkName: string): void {
        this.drinkName = drinkName;
    }
    getDrinkName(): string {
        return this.drinkName;
    }

    setQuantityofDrink(quantityofDrink: number): void {
        this.quantityofDrink = quantityofDrink;
    }
    getQuantityofDrink(): number {
        return this.quantityofDrink;
    }

    setNoOfCupsRequired(noOfCupsRequired: number): void {
        this.noOfCupsRequired = noOfCupsRequired;
    }
    getNoOfCupsRequired(): number {
        return this.noOfCupsRequired;
    }

    setCostOfOneCup(costOfOneCup: number): void {
        this.costOfOneCup = costOfOneCup;
    }
    getCostOfOneCup(): number {
        return this.costOfOneCup;
    }

    getConcentrationRequired(): string[] {
        return this.concentrationRequired;
    }
    findBill() :number{
        return ((this.noOfCupsRequired * this.costOfOneCup)-((this.noOfCupsRequired * this.costOfOneCup)/10))
    }


}