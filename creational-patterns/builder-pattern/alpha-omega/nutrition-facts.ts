export class NutritionFacts {

    private servingSize : number;
    private servings : number;
    private calories : number;
    private fat : number;
    private sodium : number;
    private carbohydrate : number;
    private sugars : number;

    constructor(builder : INutritionFactsBuilder) {
        this.servingSize = builder.getServingSize();
        this.servings = builder.getServings();
        this.calories = builder.getCalories();
        this.fat = builder.getFat();
        this.sodium = builder.getSodium();
        this.carbohydrate = builder.getCarbohydrate();
        this.sugars = builder.getSugars();
    }

    public toString() : string {
        return "This product has " + this.servingSize + " of total " + this.servings + " servings " + this.fat + " g sat fat; " + this.sodium + " mg sodium; " + this.sugars + " total sugars";    
    }
}


export interface INutritionFactsBuilder {
    servingSize(val : number) : INutritionFactsBuilder;
    getServingSize() : number;
    servings(val : number) : INutritionFactsBuilder;
    getServings() : number;
    calories(val : number) : INutritionFactsBuilder;
    getCalories() : number;
    fat(val : number) : INutritionFactsBuilder;
    getFat() : number;
    sodium(val : number) : INutritionFactsBuilder;
    getSodium() : number;
    carbohydrate(val : number) : INutritionFactsBuilder;
    getCarbohydrate() : number;
    sugars(val : number) : INutritionFactsBuilder;
    getSugars() : number;
    build() : NutritionFacts;
}


export class NutritionFactsBuilder implements INutritionFactsBuilder {
    
    private _servingSize : number;
    public getServingSize() : number {
        return this._servingSize;
    }

    private _servings : number;
    public getServings() : number {
        return this._servings;
    }

    private _calories : number;
    public getCalories() : number {
        return this._calories;
    }

    private _fat : number;
    public getFat() : number {
        return this._fat;
    }
    
    private _sodium : number;
    public getSodium() : number {
        return this._sodium;
    }

    private _carbohydrate : number;
    public getCarbohydrate() : number {
        return this._carbohydrate;
    }

    private _sugars : number;
    public getSugars() : number {
        return this._sugars;
    }

    constructor() {
        this._servingSize = NaN;
        this._servings = NaN;
        this._calories = NaN;
        this._fat = NaN;
        this._sodium = NaN;
        this._carbohydrate = NaN;
        this._sugars = NaN;
    }

    servingSize(val: number): INutritionFactsBuilder {
        this._servingSize = val 
        return this;
    }

    servings(val: number): INutritionFactsBuilder {
        this._servings = val;
        return this;
    }

    calories(val: number): INutritionFactsBuilder {
        this._calories = val;
        return this;
    }

    fat(val: number): INutritionFactsBuilder {
        this._fat = val;
        return this;
    }
    
    sodium(val: number): INutritionFactsBuilder {
        this._sodium = val;
        return this;
    }

    carbohydrate(val: number): INutritionFactsBuilder {
        this._carbohydrate = val;
        return this;
    }

    sugars(val: number): INutritionFactsBuilder {
        this._sugars = val;
        return this;
    }

    build() : NutritionFacts {
        return new NutritionFacts(this);
    }
}