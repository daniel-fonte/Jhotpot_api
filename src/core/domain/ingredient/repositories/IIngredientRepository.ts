import IngredientToSaveDTO from '../dtos/IngredientToSaveDTO';
import Ingredient from '../entities/Ingredient';

interface IIngredientRepository {
    save(ingredient: IngredientToSaveDTO): Promise<Ingredient | null>
}

export default IIngredientRepository;
