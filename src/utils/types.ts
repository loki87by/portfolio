import { Dispatch, SetStateAction, RefObject, ReactElement } from "react";

export interface ImagesObject {
  [key: string]: HTMLImageElement[];
}

interface MyApp {
  init: (arg: HTMLElement) => void;
}

export interface CustomWindow extends Window {
  MyApp: MyApp;
}

export interface FakeImageObject {
  src: string | undefined;
}

export interface TranslationItem {
  [key: string]: string;
}

interface WorkItem {
  [key: string]: string | string[] | boolean | undefined;
}

export interface ReducedWorks {
  [key: string]: WorkItem[];
}

export interface GalleryTextItem {
  [key: string]: string[];
}

export interface Translations {
  [key: string]: TranslationItem;
}

export interface HSL {
  [key: string]: number;
}

export interface Wide {
  loss: number;
  values: number[];
}

export interface Solve extends Wide {
  filter: string;
}

export interface HeaderProps {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
}

export interface BasicProps {
  images: ImagesObject;
  isMobile: boolean;
  lang: string;
}

export interface ResumeProps extends BasicProps {
  openedWorks: boolean;
  scrollbarWidth: number;
  setOpenedSection: Dispatch<SetStateAction<string>>;
  setOpenedWorks: Dispatch<SetStateAction<boolean>>;
  scrollToElement: () => void;
}

export interface BioProps {
  images: ImagesObject;
  scrollRef: RefObject<HTMLElement> | null;
  scrollbarWidth: number;
  screenWidth: number;
}

export interface CodeProps {
  width: number;
  scrollbarWidth: number;
}

export interface AgeProps {
  images: ImagesObject;
  binary: boolean;
}

export interface SpriteProps {
  src: string;
  id: string;
  width: string;
  height: string;
  title: string | undefined;
  class?: string;
  style?: TranslationItem;
  click?: () => void;
}

export interface HandsProps {
  images: ImagesObject;
  number: number;
}

export interface HandProps {
  images: ImagesObject;
  data: string[];
  left?: boolean;
}

export interface ContactsProps {
  scrollRef: RefObject<HTMLElement> | null;
}

export interface DocsProps {
  scrollRef: RefObject<HTMLElement> | null;
  screenWidth: number;
  lang: string;
  isMobile: boolean;
}

export interface CertificateProps {
  type?: string | null;
  screenWidth: number;
  lang: string;
  isMobile: boolean;
  isCertificateOpen?: boolean;
  setCertificateOpen?: Dispatch<SetStateAction<boolean>>;
  setCertificateType?: Dispatch<SetStateAction<string | null>>;
  closeCertificate?: () => void;
}

export interface GalleryProps extends BasicProps {
  width: number;
  scrollbarWidth: number;
  height: number;
  scrollRef: RefObject<HTMLElement> | null;
  scrollToElement: () => void;
}

export interface StackProps {
  images: ImagesObject;
  scrollRef: RefObject<HTMLElement> | null;
}

export interface SliderProps {
  disabled?: boolean;
  takeData?: boolean;
  isFinite?: boolean;
  unit: string;
  limit: number;
  shift: number;
  interval: number;
  slides: ReactElement[];
  paused: boolean;
  restarted?: boolean;
  setSlidePos?: Dispatch<SetStateAction<number | null>>;
  setStyle: (arg: TranslationItem) => void;
  setPaused: () => void;
  resetPaused: () => void;
  setRestarted?: Dispatch<SetStateAction<boolean>>;
}

export interface RunnerTextProps {
  data: string;
  slidePos: number | null;
  num: number;
  shift: number;
  isMobile: boolean;
}

export interface WorksProps extends BasicProps {
  filter: string;
  scrollRef?: RefObject<HTMLElement> | null;
  screenWidth?: number;
  widgetRangeValue?: number;
  setWidgetRangeValue?: Dispatch<SetStateAction<number>>;
}

export interface WorkProps extends BasicProps {
  data: WorkItem;
  screenWidth?: number;
  widgetRangeValue?: number;
  setWidgetRangeValue?: Dispatch<SetStateAction<number>>;
}
