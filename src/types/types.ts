export type Cathegory = {
  id: number;
  name: string;
};

export type Activity = {
  id: string
  cathegory: number;
  name: string;
  calories: number;
};
