import ejajatPatra from "../../asset/licences/ejajatPatra.jpg";
import licenceTranslate1 from "../../asset/licences/licenceTranslate1.jpg";
import licenceTranslate2 from "../../asset/licences/licenceTranslate2.jpg";
import panDarta from "../../asset/licences/panDarta.jpg";
import panTranslate from "../../asset/licences/panTranslate.jpg";
import registerEnglish from "../../asset/licences/registerEnglish.jpg";
import registerNepali from "../../asset/licences/registerNepali.jpg";

export interface IViewLicenceData {
  id: number;
  imageURL: string;
}
export const ViewLicenceData: IViewLicenceData[] = [
  {
    id: 1,
    imageURL: licenceTranslate1,
  },
  {
    id: 2,
    imageURL: licenceTranslate2,
  },
  {
    id: 3,
    imageURL: registerEnglish,
  },
  {
    id: 4,
    imageURL: registerNepali,
  },
  {
    id: 5,
    imageURL: panTranslate,
  },
  {
    id: 6,
    imageURL: panDarta,
  },
  {
    id: 7,
    imageURL: ejajatPatra,
  },
];
