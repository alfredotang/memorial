import YuHuaImg from '@src/assets/images/people/yu-hua.jpg';
import JoyceWeiImg from '@src/assets/images/people/joyce-wei.jpg';
import MarryImg from '@src/assets/images/people/marry.jpg';
import SihYinImg from '@src/assets/images/people/sihyin-chen.jpg';
import EstherChengImg from '@src/assets/images/people/esther-cheng.jpg';

export interface PeopleListEntity {
  src: string;
  alt: string;
  name: string;
}

export const peopleListData: PeopleListEntity[] = [
  {
    src: EstherChengImg,
    alt: 'Esther Cheng',
    name: 'esther-cheng',
  },
  {
    src: YuHuaImg,
    alt: 'Yu Hua',
    name: 'yu-hua',
  },
  {
    src: JoyceWeiImg,
    alt: 'Joyce Wei',
    name: 'joyce-wei',
  },
  {
    src: MarryImg,
    alt: 'Marry FU',
    name: 'marry-fu',
  },
  {
    src: SihYinImg,
    alt: 'Sih Yin',
    name: 'sih-yin-chen',
  },
];
