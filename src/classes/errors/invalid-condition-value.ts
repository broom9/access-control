import { ConditionOperator } from '../../constants/condition-operator';
import { ConditionModifier } from '../../constants/condition-modifier';
import { TPermissionId } from '../../types/permission-id';

export class InvalidConditionValueError extends Error {
  private value: any;
  private operator: ConditionOperator | null;
  private modifier: ConditionModifier | null;
  private permissionId: TPermissionId | null;

  get message() {
    return `Invalid condition value: ${this.value} (modifier=${this.modifier}, operator=${this.operator}, permissionId=${this.permissionId}).`;
  }

  public constructor(value: any, modifier?: ConditionModifier, operator?: ConditionOperator, permissionId?: TPermissionId) {
    super();
    this.value = value;
    this.modifier = modifier || null;
    this.operator = operator || null;
    this.permissionId = permissionId || null;
  }

  public setOperator(operator: ConditionOperator): this {
    this.operator = operator;
    return this;
  }

  public setModifier(modifier: ConditionModifier): this {
    this.modifier = modifier;
    return this;
  }

  public setPermissionId(permissionId: TPermissionId): this {
    this.permissionId = permissionId;
    return this;
  }

  public static hasInstance(err: any): err is InvalidConditionValueError {
    return err instanceof InvalidConditionValueError;
  }
}