export class SetSopCheck {
  static readonly type = '[SopCheck] Set Sop Check';
  constructor(
    public sopId: string,
    public sopItemId: string,
    public check: boolean
  ) {}
}
