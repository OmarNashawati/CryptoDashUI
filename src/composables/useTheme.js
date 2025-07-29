export function getTheme() {
  const savedTheme = localStorage.getItem('theme')
  const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)')

  if (savedTheme) {
    return savedTheme
  } else if (systemSettingDark.matches) {
    return 'dark'
  } else {
    return 'light'
  }
}

export function changeTheme() {
  const newTheme = getTheme() === 'dark' ? 'light' : 'dark'
  applayTheme(newTheme)
  savedTheme(newTheme)
  return newTheme
}

export function applayTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

export function savedTheme(theme) {
  localStorage.setItem('theme', theme)
}
