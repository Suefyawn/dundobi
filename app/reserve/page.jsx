'use client'

import { useState } from 'react'
import ReserveConfigurator from '@/components/ReserveConfigurator'

export default function ReservePage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Reserve Your Puppy</h1>
          <p className="text-gray-300 text-lg">Build your perfect Dundobi Doberman</p>
        </div>
      </section>

      <ReserveConfigurator />
    </div>
  )
}
