export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    icon?: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
  },
  zh: {
    name: '简体中文',
    iso: 'zh',
  },
}
