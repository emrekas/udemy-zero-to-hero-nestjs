import { TaskStatus } from "../task-status.enum";
import { IsOptional, IsIn } from "class-validator";

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn(Object.values(TaskStatus))
    status: TaskStatus;

    @IsOptional()
    search: string;
}