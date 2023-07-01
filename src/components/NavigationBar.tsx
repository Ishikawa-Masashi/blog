import * as React from 'react'

import { Link } from 'gatsby'
import { DarkToggle } from './DarkToggle'

export const NavigationBar = () => {
  return (
    <div className="fixed z-50 flex w-full p-4 shadow-md backdrop-blur-lg">
      <Link
        className="px-2 font-mono text-xl font-black text-white hover:shadow-none"
        to={'/'}
        style={{ textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}
      >
        Ishikawa Masashi
      </Link>

      <Link
        className="px-2 font-mono text-xl font-black text-white hover:shadow-none"
        to={'/'}
        style={{ textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}
      >
        Game
      </Link>
      <DarkToggle />
    </div>
  )
}
