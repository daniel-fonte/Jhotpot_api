import { Column, Entity, PrimaryColumn } from 'typeorm';
import IIngredient from '../../../core/domain/ingredient/entities/Ingredient';

@Entity()
class Ingredient implements IIngredient {
  @PrimaryColumn()
    Id: number;

  @Column()
    Name: string;

  @Column()
    Calories: number;

  @Column()
    Created_At: Date;

  @Column()
    Updated_At: Date;
}

export default Ingredient;
