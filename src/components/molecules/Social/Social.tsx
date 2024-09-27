import Link from 'next/link'
import React from 'react'

export default function Social() {
  return (
    <div className="card relative h-36 w-36 overflow-hidden rounded-lg text-base text-white">
      <div className="background absolute inset-0"></div>
      <div className="logo absolute bottom-1/2 right-1/2 w-[30%]">
        Get in Touch
      </div>
      <Link href={'https://github.com/osmaclean'} target="_blank">
        <div className="box box1 absolute origin-bottom-left rounded-cardSocial border-r-[1px] border-t-2 border-white border-r-white bg-[#ffffff63] p-2 text-right before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:content-['']">
          <span className="icon inline-block">
            <svg
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
              className="svg h-5 w-5 fill-white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title>github [#142]</title> <desc>Created with Sketch.</desc>{' '}
                <defs> </defs>{' '}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {' '}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#fff"
                  >
                    {' '}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {' '}
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      >
                        {' '}
                      </path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
          </span>
        </div>
      </Link>

      <Link href={'https://www.linkedin.com/in/osmaclean/'} target="_blank">
        <div className="box box2 absolute origin-bottom-left rounded-cardSocial border-r-[1px] border-t-2 border-white border-r-white bg-[#ffffff63] p-2 text-right before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:content-['']">
          {' '}
          <span className="icon inline-block">
            <svg
              className="svg h-5 w-5 fill-white"
              viewBox="-5.5 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {' '}
                <title>linkedin</title>{' '}
                <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z" />{' '}
              </g>
            </svg>
          </span>
        </div>
      </Link>
      <Link
        href={'../../../doc/CV-LucasMaclean.pdf'}
        download={'CV-LucasMaclean.pdf'}
        target="_blank"
      >
        <div className="box box3 absolute origin-bottom-left rounded-cardSocial border-r-[1px] border-t-2 border-white border-r-white bg-[#ffffff63] p-2 text-right before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:content-['']">
          <span className="icon inline-block">
            <svg
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
              className="svg h-5 w-5 fill-white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g>
                  {' '}
                  <path d="M380.95,79.002c-0.024-0.243-0.066-0.481-0.107-0.719c-0.015-0.083-0.022-0.168-0.038-0.251 c-0.057-0.287-0.131-0.568-0.213-0.846c-0.01-0.033-0.016-0.067-0.025-0.099c-0.086-0.282-0.188-0.558-0.297-0.829 c-0.012-0.03-0.021-0.061-0.033-0.09c-0.106-0.256-0.227-0.504-0.354-0.748c-0.023-0.045-0.042-0.093-0.066-0.138 c-0.118-0.219-0.249-0.429-0.382-0.638c-0.043-0.067-0.08-0.138-0.124-0.204c-0.126-0.188-0.265-0.366-0.403-0.544 c-0.062-0.08-0.117-0.164-0.182-0.243c-0.162-0.197-0.337-0.383-0.513-0.567c-0.049-0.051-0.091-0.106-0.141-0.156l-70-70 c-0.047-0.047-0.1-0.088-0.148-0.134c-0.187-0.179-0.375-0.356-0.575-0.52c-0.074-0.061-0.155-0.114-0.231-0.172 c-0.183-0.142-0.365-0.284-0.557-0.412c-0.062-0.042-0.128-0.076-0.191-0.116c-0.213-0.136-0.427-0.27-0.651-0.389 c-0.042-0.022-0.086-0.04-0.128-0.062c-0.247-0.128-0.498-0.25-0.757-0.358c-0.028-0.012-0.058-0.02-0.086-0.032 c-0.272-0.11-0.549-0.212-0.833-0.298c-0.033-0.01-0.068-0.016-0.102-0.026c-0.277-0.081-0.557-0.155-0.843-0.212 c-0.084-0.017-0.17-0.024-0.254-0.039c-0.237-0.041-0.474-0.083-0.716-0.107C301.668,0.017,301.335,0,301,0H49 c-5.522,0-10,4.477-10,10v400c0,5.523,4.478,10,10,10h322c5.522,0,10-4.477,10-10V80C381,79.665,380.983,79.332,380.95,79.002z M311,34.142L346.858,70H311V34.142z M59,400V20h232v60c0,5.523,4.478,10,10,10h60v310H59z"></path>{' '}
                  <path d="M129,154c0,5.523,4.478,10,10,10h64c5.522,0,10-4.477,10-10s-4.478-10-10-10h-64C133.478,144,129,148.477,129,154z"></path>{' '}
                  <path d="M201,104c0-16.542-13.458-30-30-30s-30,13.458-30,30s13.458,30,30,30S201,120.542,201,104z M161,104 c0-5.514,4.486-10,10-10s10,4.486,10,10s-4.486,10-10,10S161,109.514,161,104z"></path>{' '}
                  <path d="M99,204h144c5.522,0,10-4.477,10-10v-31.892c0-5.523-4.478-10-10-10s-10,4.477-10,10V184H109V60h124v68 c0,5.523,4.478,10,10,10s10-4.477,10-10V50c0-5.523-4.478-10-10-10H99c-5.522,0-10,4.477-10,10v144C89,199.523,93.478,204,99,204z"></path>{' '}
                  <path d="M321,234H99c-5.522,0-10,4.477-10,10s4.478,10,10,10h222c5.522,0,10-4.477,10-10S326.522,234,321,234z"></path>{' '}
                  <path d="M321,284H99c-5.522,0-10,4.477-10,10s4.478,10,10,10h222c5.522,0,10-4.477,10-10S326.522,284,321,284z"></path>{' '}
                  <path d="M321,334H99c-5.522,0-10,4.477-10,10s4.478,10,10,10h222c5.522,0,10-4.477,10-10S326.522,334,321,334z"></path>{' '}
                </g>{' '}
              </g>
            </svg>
          </span>
        </div>
      </Link>
    </div>
  )
}
