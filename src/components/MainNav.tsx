import React from 'react'

/**
 * Props for MainNav component. Currently static; extend to customize items.
 */
export interface MainNavProps {
  className?: string
}

/**
 * Main site navigation with dropdowns and responsive behavior.
 * - Desktop: horizontal menu with hover-activated submenus
 * - Mobile (<=640px): hides certain items and shows a compact "More" item
 */
export const MainNav: React.FC<MainNavProps> = React.memo(function MainNav({ className }) {
  const baseItemClasses =
    'relative inline-block h-12 w-[243px] text-center align-middle whitespace-nowrap text-[21px] leading-[48px] transition-colors'
  const linkClasses =
    'block h-full w-full px-2 text-white hover:text-[#3d9be9] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3d9be9] focus-visible:ring-offset-black'
  const dropdownClasses =
    'absolute left-0 top-full z-[9999] mt-0 hidden min-w-[200px] rounded bg-black/90 py-2 text-left shadow-lg group-hover:block focus-within:block'
  const dropdownLinkClasses =
    'block px-4 py-2 text-[18px] leading-[26px] text-white hover:text-[#3d9be9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3d9be9]'

  return (
    <nav aria-label="Site" className={['relative z-50 h-12 w-full bg-[#224175]', className].filter(Boolean).join(' ')}>
      <ul className="relative mx-auto flex h-full w-full items-center justify-center overflow-visible text-center">
        {/* Home */}
        <li className={`group ${baseItemClasses}`}>
          <a href="https://www.theoverhear.app/" aria-current="page" className={linkClasses}>
            Home
          </a>
        </li>

        {/* About with dropdown */}
        <li className={`group ${baseItemClasses}`}>
          <a href="https://www.theoverhear.app/about" aria-haspopup="true" aria-expanded="false" className={linkClasses}>
            About
          </a>
          <ul className={dropdownClasses} aria-hidden="true" role="menu">
            <li role="none">
              <a
                role="menuitem"
                href="https://www.theoverhear.app/past-projects"
                className={dropdownLinkClasses}
              >
                Past Projects
              </a>
            </li>
            <li role="none">
              <a role="menuitem" href="https://www.theoverhear.app/overhear-team-1" className={dropdownLinkClasses}>
                Overhear Team
              </a>
            </li>
            <li role="none">
              <a role="menuitem" href="https://www.theoverhear.app/history" className={dropdownLinkClasses}>
                History of Overhear
              </a>
            </li>
            <li role="none">
              <a role="menuitem" href="https://www.theoverhear.app/how-to" className={dropdownLinkClasses}>
                How to
              </a>
            </li>
          </ul>
        </li>

        {/* Hire Us with dropdown */}
        <li className={`group ${baseItemClasses}`}>
          <a href="https://www.theoverhear.app/hire-us" aria-haspopup="true" aria-expanded="false" className={linkClasses}>
            Hire Us
          </a>
          <ul className={dropdownClasses} aria-hidden="true" role="menu">
            <li role="none">
              <a role="menuitem" href="https://www.theoverhear.app/workshop-bookings" className={dropdownLinkClasses}>
                Workshop Bookings.
              </a>
            </li>
            <li role="none">
              <a role="menuitem" href="https://www.theoverhear.app/projects" className={dropdownLinkClasses}>
                Projects
              </a>
            </li>
          </ul>
        </li>

        {/* Blog (hidden on <=640px) */}
        <li className={`group ${baseItemClasses} hidden sm:inline-block`}>
          <a href="https://www.theoverhear.app/blog" className={linkClasses}>
            Blog
          </a>
        </li>

        {/* Poets, Writers & Places with dropdown (hidden on <=640px) */}
        <li className={`group ${baseItemClasses} hidden sm:inline-block`}>
          <a
            href="https://www.theoverhear.app/poets"
            aria-haspopup="true"
            aria-expanded="false"
            className={linkClasses}
          >
            Poets, Writers & Places
          </a>
          <ul className={`${dropdownClasses}`} aria-hidden="true" role="menu">
            <li role="none">
              <a role="menuitem" href="https://www.theoverhear.app/venues" className={dropdownLinkClasses}>
                Venues
              </a>
            </li>
          </ul>
        </li>

        {/* Podcast (hidden on <=640px) */}
        <li className={`group ${baseItemClasses} hidden sm:inline-block`}>
          <a href="https://www.theoverhear.app/podcast" className={linkClasses}>
            Podcast
          </a>
        </li>

        {/* More (visible only on <=640px) */}
        <li className={`${baseItemClasses} sm:hidden`} aria-hidden>
          <div className="block h-full w-full px-2 text-white">More</div>
        </li>
      </ul>

      {/* A11y helper text for screen readers only */}
      <div className="sr-only">Use tab to navigate through the menu items.</div>
    </nav>
  )
})

export default MainNav
