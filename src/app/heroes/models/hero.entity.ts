export class Hero  {
  private _id: number;
  private _name: string;
  private _description: string;
  private _modified: string;
  private _thumbnail: string;

  constructor(id?: number, name?: string, description?: string, modified?: string, thumbnail?: string) {
    this._id = id || 0;
    this._name = name || '';
    this._description = description || '';
    this._modified = modified || '';
    this._thumbnail = thumbnail || '';
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get modified(): string {
    return this._modified;
  }

  get thumbnail(): string {
    return this._thumbnail;
  }

}
