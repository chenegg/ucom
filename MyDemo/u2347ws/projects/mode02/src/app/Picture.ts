export class Picture {
  constructor(
    public PictureId: number,
    public Url: string,
    public Subject: string,
    public Author: string
  ) {}
}

export const picture = new Picture(
  1,
  'https://www.rightclickcomputersolutions.com/office-2016-vs-office-365-which-is-better-for-your-business/',
  'gmail',
  'egg'
);

//export const Picture;
