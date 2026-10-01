import notice1 from "../../asset/notices/noticeOne.jpg";
export interface IViewNoticeData {
  id: number;
  imageURL: string;
}
export const ViewNoticeData: IViewNoticeData[] = [
  {
    id: 1,
    imageURL: notice1,
  },
];
