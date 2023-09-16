import { useContext } from 'react'
import { BsFillMoonFill, BsFillLightbulbFill } from 'react-icons/bs'
import { ContextGlobal } from './utils/global.context'
const themes = ['light', 'dark']

export default function ThemeToggleButton() {
  const { themeState, themeDispatch } = useContext(ContextGlobal)

  const toggleTheme = () => {
    themeDispatch({ type: 'TOGGLE_THEME' })
  }

  return (
    <div className='theme-switch'>
      {themes.map(t => {
        const checked = t === themeState.theme
        return (
          <button
            key={t}
            className={`${checked ? 'bg-white' : ''}`}
            onClick={toggleTheme}
            aria-label='Toggle theme'
          >
            {t === 'light' ? <BsFillLightbulbFill /> : <BsFillMoonFill />}

          </button>
        )
      })}
    </div>
  )
}