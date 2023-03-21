import { defineStore } from 'pinia'

function getInitialLang() {
  try {
    const storedLang = localStorage.getItem('lang')
    return storedLang ? storedLang : 'en'
  } catch (e) {
    //console.error('Error al acceder a localStorage', e)
    return 'en'
  }
}

export const useLanguagesStore = defineStore('languages', {
  state: () => ({
    lang: getInitialLang(),
  }),

  actions: {
    setLang(newLang) {
      this.lang = newLang
      localStorage.setItem('lang', newLang)
    },
  },
})