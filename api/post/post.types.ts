export interface IPost {
  id: number;
  title: string;
}
export interface IPosts {
  data: IPost[];
  lastId: number;
}
