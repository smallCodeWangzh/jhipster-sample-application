import { Moment } from 'moment';
import { ICategory } from 'app/shared/model/category.model';

export interface IArticle {
  id?: number;
  author?: string;
  clickTimees?: number;
  content?: string;
  publishDate?: string;
  title?: string;
  category?: ICategory;
}

export const defaultValue: Readonly<IArticle> = {};
