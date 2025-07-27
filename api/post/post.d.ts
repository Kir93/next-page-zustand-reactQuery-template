export interface Post {
  id: number;
  title: string;
}
export interface Posts {
  data: Post[];
  lastId: number;
}
