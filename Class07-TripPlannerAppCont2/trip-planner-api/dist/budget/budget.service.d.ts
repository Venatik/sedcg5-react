import { UpdateBudgetDTO } from './dto/budget.dto';
import { BudgetORMEntity } from './entity/budget.entity';
import { Repository } from 'typeorm';
export declare class BudgetService {
    private budgetRepository;
    constructor(budgetRepository: Repository<BudgetORMEntity>);
    updateBudget(id: string, updateBudgetProps: UpdateBudgetDTO): Promise<void>;
}
