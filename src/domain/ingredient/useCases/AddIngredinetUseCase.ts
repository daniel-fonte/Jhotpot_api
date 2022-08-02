import IngredientToSaveDTO from "../dtos/IngredientToSaveDTO";
import Ingredient from "../entities/Ingredient";
import IIngredientRepository from "../repositories/IIngredientRepository";
import IAddIngredientUseCase from "./IAddIngredientUseCase";

class AddIngredientUseCase implements IAddIngredientUseCase {
    constructor(
        private ingredientRepository: IIngredientRepository
    ) {}

    getRepository(): IIngredientRepository {
        return this.ingredientRepository;
    }

    async perform(ingredientToSave: IngredientToSaveDTO): Promise<Ingredient | null> {
        const ingredientSaved = await this.ingredientRepository.save(ingredientToSave);

        if(!ingredientSaved) return null;

        return ingredientSaved;
    }
    
}

export default AddIngredientUseCase;