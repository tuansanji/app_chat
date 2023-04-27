export interface ICommentUser {
  user: {
    username: string;
    time: number;
  };
  comment: string;
  like: number;
}
export interface IListComment {
  list: ICommentUser[];
  uuidv4?: string;
}
