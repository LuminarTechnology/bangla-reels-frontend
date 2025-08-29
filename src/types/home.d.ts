import { TLang } from "./globals";

export type TTopPick = {
  id: number;
  title: Record<TLang, string>;
  category: Record<TLang, string>;
  image: string;
};

export type TStreamingData = {
  id: number;
  title: Record<TLang, string>;
  description: Record<TLang, string>;
  genres: Record<TLang, string>[];
  type: Record<TLang, string>;
  imageUrl?: string;
  play?: string;
};

export interface TBanner {
  id: number;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  image: string;
}
