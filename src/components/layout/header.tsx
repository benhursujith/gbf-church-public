'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, useEffect, useRef, useState } from 'react';

import { contactUsContent } from '@/constant/config';

export function Header({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      if (isTop) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // State of our button
  const [disabled, setDisabled] = useState(false);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    setIsOpen(!isOpen);
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false); // for desktop/mobile dropdown
  const resourcesDropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!resourcesDropdownOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target as Node)
      ) {
        setResourcesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [resourcesDropdownOpen]);

  const [ourCommunityDropdownOpen, setOurCommunityDropdownOpen] = useState(false);
  const ourCommunityDropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!ourCommunityDropdownOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        ourCommunityDropdownRef.current &&
        !ourCommunityDropdownRef.current.contains(event.target as Node)
      ) {
        setOurCommunityDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ourCommunityDropdownOpen]);

  const [ourInitiativesDropdownOpen, setOurInitiativesDropdownOpen] = useState(false);
  const ourInitiativesDropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!ourInitiativesDropdownOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        ourInitiativesDropdownRef.current &&
        !ourInitiativesDropdownRef.current.contains(event.target as Node)
      ) {
        setOurInitiativesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ourInitiativesDropdownOpen]);

  return (
    <header
      className={`main-header fixed top-0 left-0 w-full z-20 pointer-events-none ${scrolled ? 'scrolled' : ''
        }
      ${isOpen ? 'mobile-nav-open' : ''}
      
      `}
    >
      <div className='nav-dropdown-overlay hidden xl:block fixed w-full h-full top-26 left-0 z-10 bg-black bg-opacity-75 opacity-0 transition-opacity pointer-events-none' />
      {/* Desktop navigation */}
      <div className='desktop-nav hidden xl:block xl:py-2 text-white bg-transparent pointer-events-auto transition-header duration-500'>
        <div className='flex flex-wrap items-center'>
          {/* Logo and probably other menu items */}
          <div>
            <ul className='flex flex-wrap flex-col xl:flex-row xl:items-center list-none pl-0 my-0'>
              <li className='ml-10 mr-4 mt-1 hidden xl:block'>
                <Link className='no-child-pointers block' href='/'>
                  <Image
                    data-loaded='false'
                    onLoad={(event) => {
                      event.currentTarget.setAttribute('data-loaded', 'true');
                    }}
                    className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                    src='/logos/CBF_WT_Full.png'
                    alt='CBF Logo'
                    width={250}
                    height={102}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className='ml-auto mr-8'>
            <ul className='flex flex-wrap flex-col xl:flex-row xl:items-center list-none pl-0 my-0'>
              {/* Sundays */}
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4'>
                <Link
                  className={`group px-0 pt-4 pb-3 flex items-center w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-[#2e71ea] transition-colors xl:inline xl:px-2 xl:py-0 xl:border-none xl:font-bold ${pathname === '/sundays' ? 'text-[#2e71ea]' : ''}`}
                  href='/sundays'
                >
                  <span>Sundays</span>
                </Link>
              </li>
              {/* Our Community Dropdown */}
              <li
                ref={ourCommunityDropdownRef}
                className="relative block mx-4 my-0 xl:mx-2 xl:my-4"
              >
                <button
                  className='flex items-center group px-0 pt-4 pb-3 w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-[#2e71ea] transition-colors xl:px-2 xl:py-0 xl:border-none xl:font-bold focus:outline-none'
                  type='button'
                  onClick={() => setOurCommunityDropdownOpen((open) => !open)}
                  aria-expanded={ourCommunityDropdownOpen}
                >
                  <span>Our Community</span>
                  <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                {ourCommunityDropdownOpen && (
                  <div className='absolute left-0 mt-2 w-48 bg-black bg-opacity-90 rounded shadow-lg z-30'>
                    <ul className='py-2 list-none'>
                      <li>
                        <Link href='/who-we-are' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'>Our Story</Link>
                      </li>
                      <li>
                        <Link href='/what-we-believe' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'>What We Believe</Link>
                      </li>
                      <li>
                        <Link href='/leadership' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'>Leadership</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* Our Initiatives Dropdown */}
              <li
                ref={ourInitiativesDropdownRef}
                className="relative block mx-4 my-0 xl:mx-2 xl:my-4"
              >
                <button
                  className='flex items-center group px-0 pt-4 pb-3 w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-[#2e71ea] transition-colors xl:px-2 xl:py-0 xl:border-none xl:font-bold focus:outline-none'
                  type='button'
                  onClick={() => setOurInitiativesDropdownOpen((open) => !open)}
                  aria-expanded={ourInitiativesDropdownOpen}
                >
                  <span>Our Initiatives</span>
                  <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                {ourInitiativesDropdownOpen && (
                  <div className='absolute left-0 mt-2 w-40 bg-black bg-opacity-90 rounded shadow-lg z-30'>
                    <ul className='py-2 list-none'>
                      <li>
                        <Link href='/care-groups' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'>Care Groups</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* Resources Dropdown (Desktop) */}
              <li
                ref={resourcesDropdownRef}
                className="relative block mx-4 my-0 xl:mx-2 xl:my-4"
              >
                <button
                  className='flex items-center group px-0 pt-4 pb-3 w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-[#2e71ea] transition-colors xl:px-2 xl:py-0 xl:border-none xl:font-bold focus:outline-none'
                  type='button'
                  onClick={() => setResourcesDropdownOpen((open) => !open)}
                  aria-expanded={resourcesDropdownOpen}
                >
                  <span>Resources</span>
                  <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                {resourcesDropdownOpen && (
                  <div className='absolute left-0 mt-2 w-40 bg-black bg-opacity-90 rounded shadow-lg z-30'>
                    <ul className='py-2 list-none'>
                      <li>
                        <Link href='/sermons' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'>Sermons</Link>
                      </li>
                      <li>
                        <Link href='/podcasts' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'>Podcasts</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* Contact Us */}
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4 xl:ml-4'>
                <Link
                  className='btn items-center group -my-4 btn-nav-contact'
                  href='/contact-us'
                >
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className='mobile-nav block h-screen pointer-events-none xl:hidden'>
        {/* Mobile Nav - top bar */}
        <div className='mobile-nav-top-bar relative z-20'>
          <div className='bg-black text-white flex flex-wrap items-center justify-between px-4 py-3 sm:py-4 pointer-events-auto'>
            {/* Hamburger menu */}
            <div onClick={handleMenu} className='mobile-nav-toggle'>
              <div className='hamburger'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
              </div>
            </div>
            <Link className='block no-child-pointers ml-2' href='/'>
              <Image
                data-loaded='false'
                onLoad={(event) => {
                  event.currentTarget.setAttribute('data-loaded', 'true');
                }}
                className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                src='/logos/CBF_WT_Full.png'
                alt='CBF Logo'
                width={150}
                height={62}
              />
            </Link>
            <Link
              className='block font-sans font-bold text-sm'
              href='/contact-us'
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Mobile Nav - Content */}
        <div className='mobile-nav-content absolute top-0 left-0 w-full h-full text-white z-10'>
          <div className='mobile-nav-content-bg absolute top-0 left-0 w-full h-full bg-black z-10' />
          {/* Links */}
          <div className='mobile-nav-content-inner relative pt-20 sm:pt-24 z-20'>
            <ul className='flex flex-wrap flex-col xl:flex-row xl:items-center list-none pl-0 my-0'>
              {/* Logo again for some reason */}
              <li className='ml-10 mr-4 mt-1 hidden xl:block'>
                <Link className='no-child-pointers block' href='/'>
                  <Image
                    data-loaded='false'
                    onLoad={(event) => {
                      event.currentTarget.setAttribute('data-loaded', 'true');
                    }}
                    className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                    src='/logos/CBF_WT_Full.png'
                    alt='CBF Logo'
                    width={32}
                    height={8}
                  />
                </Link>
              </li>
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4'>
                <Link
                  className={`group px-0 pt-4 pb-3 flex items-center w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-[#2e71ea] transition-colors xl:inline xl:px-2 xl:py-0 xl:border-none  xl:font-bold ${pathname === '/sundays' ? 'text-[#2e71ea]' : ''
                    }`}
                  href='/sundays'
                >
                  <span>Sundays</span>
                  <span className='ml-auto mr-4 group-hover:mr-2 transition-margin xl:hidden'>
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 23.6 18.2'
                    >
                      <path
                        fill='currentColor'
                        d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4'>
                <button
                  className='flex items-center group px-0 pt-4 pb-3 w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-[#2e71ea] transition-colors xl:px-2 xl:py-0 xl:border-none xl:font-bold focus:outline-none'
                  type='button'
                  onClick={() => setOurCommunityDropdownOpen((open) => !open)}
                  aria-expanded={ourCommunityDropdownOpen}
                >
                  <span>Our Community</span>
                  <svg className={`ml-2 w-4 h-4 transform transition-transform ${ourCommunityDropdownOpen ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                {ourCommunityDropdownOpen && (
                  <ul className='pl-4 py-2 bg-black bg-opacity-80 rounded list-none'>
                    <li>
                      <Link href='/who-we-are' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'
                        onClick={() => {
                          setIsOpen(false);
                          setOurCommunityDropdownOpen(false);
                        }}
                      >Our Story</Link>
                    </li>
                    <li>
                      <Link href='/what-we-believe' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'
                        onClick={() => {
                          setIsOpen(false);
                          setOurCommunityDropdownOpen(false);
                        }}
                      >What We Believe</Link>
                    </li>
                    <li>
                      <Link href='/leadership' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'
                        onClick={() => {
                          setIsOpen(false);
                          setOurCommunityDropdownOpen(false);
                        }}
                      >Leadership</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4'>
                <button
                  className='flex items-center group px-0 pt-4 pb-3 w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-[#2e71ea] transition-colors xl:px-2 xl:py-0 xl:border-none xl:font-bold focus:outline-none'
                  type='button'
                  onClick={() => setOurInitiativesDropdownOpen((open) => !open)}
                  aria-expanded={ourInitiativesDropdownOpen}
                >
                  <span>Our Initiatives</span>
                  <svg className={`ml-2 w-4 h-4 transform transition-transform ${ourInitiativesDropdownOpen ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                {ourInitiativesDropdownOpen && (
                  <ul className='pl-4 py-2 bg-black bg-opacity-80 rounded list-none'>
                    <li>
                      <Link href='/care-groups' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'
                        onClick={() => {
                          setIsOpen(false);
                          setOurInitiativesDropdownOpen(false);
                        }}
                      >Care Groups</Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Resources Dropdown (Mobile) */}
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4'>
                <button
                  className='flex items-center group px-0 pt-4 pb-3 w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-[#2e71ea] transition-colors xl:px-2 xl:py-0 xl:border-none xl:font-bold focus:outline-none'
                  type='button'
                  onClick={() => setResourcesDropdownOpen((open) => !open)}
                  aria-expanded={resourcesDropdownOpen}
                >
                  <span>Resources</span>
                  <svg className={`ml-2 w-4 h-4 transform transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                {resourcesDropdownOpen && (
                  <ul className='pl-4 py-2 bg-black bg-opacity-80 rounded list-none'>
                    <li>
                      <Link href='/sermons' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'
                        onClick={() => {
                          setIsOpen(false);
                          setResourcesDropdownOpen(false);
                        }}
                      >Sermons</Link>
                    </li>
                    <li>
                      <Link href='/podcasts' className='block px-4 py-2 hover:bg-[#2e71ea] hover:text-white transition-colors'
                        onClick={() => {
                          setIsOpen(false);
                          setResourcesDropdownOpen(false);
                        }}
                      >Podcasts</Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Visit us button remains */}
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4 xl:ml-4'>
                <p>
                  <Link
                    className='btn items-center group -my-4 btn-nav-contact'
                    href={contactUsContent.location}
                  >
                    <span>Visit us</span>
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
