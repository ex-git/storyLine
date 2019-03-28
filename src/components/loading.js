import React from 'react'

import tailSpin from './img/tail-spin.svg'

export default function loading() {
  return (
    <section className='loading'>
        <img alt='loading spin' src={tailSpin} />
    </section>
  )
}
