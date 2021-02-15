import YuHuaImg from '@src/assets/images/people/yu-hua.jpg';
import JoyceWeiImg from '@src/assets/images/people/joyce-wei.jpg';
import MarryImg from '@src/assets/images/people/marry.jpg';
import SihYinImg from '@src/assets/images/people/sihyin-chen.jpg';
import EstherChengImg from '@src/assets/images/people/esther-cheng.jpg';

import YuHuaMd from './md/yuHua.md';
import JoyceWeiMd from './md/joyceWei.md';
import MarryMd from './md/marryFu.md';
import SihYinMd from './md/sihYin.md';
import EstherChengMd from './md/estherCheng.md';

export interface PeopleListEntity {
  src: string;
  alt: string;
  name: string;
  md: string;
}

export const peopleListData: PeopleListEntity[] = [
  {
    src: EstherChengImg,
    alt: 'Esther Cheng',
    name: 'esther-cheng',
    md: EstherChengMd,
  },
  {
    src: YuHuaImg,
    alt: 'Yu Hua',
    name: 'yu-hua',
    md: YuHuaMd,
  },
  {
    src: JoyceWeiImg,
    alt: 'Joyce Wei',
    name: 'joyce-wei',
    md: JoyceWeiMd,
  },
  {
    src: MarryImg,
    alt: 'Marry FU',
    name: 'marry-fu',
    md: MarryMd,
  },
  {
    src: SihYinImg,
    alt: 'Sih Yin',
    name: 'sih-yin-chen',
    md: SihYinMd,
  },
];
