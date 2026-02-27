'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ReserveConfigurator() {
  const basePrice = 2000

  const addOns = [
    { id: 'ear_crop', label: 'Ear Cropping', price: 300 },
    { id: 'tail_crop', label: 'Tail Cropping', price: 200 },
    { id: 'dew_claw', label: 'Dew Claw Removal', price: 150 },
    { id: 'advanced_training', label: 'Advanced Training (24 hrs)', price: 500 },
  ]

  const [config, setConfig] = useState({
    sex: 'either',
    color: 'any',
    selectedAddOns: [],
  })

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  // Get puppy image based on selection
  const getPuppyImage = () => {
    // In a real app, these would be actual image URLs from a database
    const images = {
      'male-black': 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400',
      'male-red': 'https://images.unsplash.com/photo-1584161358614-97fe09b20ca7?w=400',
      'female-black': 'https://images.unsplash.com/photo-1544926306-a5d3b7f0f5b9?w=400',
      'female-red': 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=400',
      'either-any': 'https://images.unsplash.com/photo-1633722715463-d30628cad4ae?w=400',
    }
    
    let key = `${config.sex}-${config.color}`
    if (!images[key]) key = 'either-any'
    return images[key]
  }

  // Calculate total price
  const totalPrice = basePrice + config.selectedAddOns.reduce((sum, addonId) => {
    const addon = addOns.find(a => a.id === addonId)
    return sum + (addon?.price || 0)
  }, 0)

  const handleAddOnChange = (addonId) => {
    setConfig(prev => ({
      ...prev,
      selectedAddOns: prev.selectedAddOns.includes(addonId)
        ? prev.selectedAddOns.filter(id => id !== addonId)
        : [...prev.selectedAddOns, addonId]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const reservationData = {
      ...formData,
      configuration: config,
      totalPrice: totalPrice,
      timestamp: new Date().toISOString(),
    }

    console.log('Reservation:', reservationData)
    
    // Here you would send to your backend API
    // await fetch('/api/reservations', { method: 'POST', body: JSON.stringify(reservationData) })
    
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="section container-custom">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Images & Summary */}
        <div>
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-8 aspect-square relative">
            <Image
              src={getPuppyImage()}
              alt="Puppy preview"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Reservation Includes</h3>
            <ul className="space-y-3 mb-8 text-gray-200">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>AKC Registration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Pedigree Certification</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Microchip</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Deworming & DHLPP Vaccinations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Temperament Testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>12 Weeks Vitamin Supply</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>12 Hours Training & Boarding</span>
              </li>
            </ul>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm mb-2">Total Investment</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">${totalPrice.toLocaleString()}</span>
                <span className="text-gray-400">/puppy</span>
              </div>
              {config.selectedAddOns.length > 0 && (
                <p className="text-sm text-gray-400 mt-2">
                  (Base: ${basePrice.toLocaleString()} + Add-ons: ${(totalPrice - basePrice).toLocaleString()})
                </p>
              )}
            </div>

            <p className="text-sm text-gray-400 mt-6">
              💡 A $500 deposit secures your reservation
            </p>
          </div>
        </div>

        {/* Right: Configurator Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Build Your Reservation</h3>
            </div>

            {/* Sex Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3">Preferred Sex</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'either', label: 'Either' },
                ].map(option => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setConfig(prev => ({ ...prev, sex: option.value }))}
                    className={`p-3 border-2 rounded-lg font-semibold transition ${
                      config.sex === option.value
                        ? 'border-red-600 bg-red-50 text-red-700'
                        : 'border-gray-300 hover:border-red-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3">Preferred Color</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'any', label: 'Any' },
                  { value: 'black', label: 'Black' },
                  { value: 'red', label: 'Red' },
                  { value: 'blue', label: 'Blue' },
                ].map(option => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setConfig(prev => ({ ...prev, color: option.value }))}
                    className={`p-3 border-2 rounded-lg font-semibold transition ${
                      config.color === option.value
                        ? 'border-red-600 bg-red-50 text-red-700'
                        : 'border-gray-300 hover:border-red-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-sm font-semibold mb-3">Add-on Services</label>
              <div className="space-y-2">
                {addOns.map(addon => (
                  <label key={addon.id} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.selectedAddOns.includes(addon.id)}
                      onChange={() => handleAddOnChange(addon.id)}
                      className="w-4 h-4 text-red-600 rounded"
                    />
                    <span className="ml-3 flex-1 font-medium">{addon.label}</span>
                    <span className="text-red-600 font-semibold">+${addon.price}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              {/* Personal Info */}
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn text-lg py-4 font-semibold"
              >
                Reserve Your Puppy
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  ✓ Thank you! We'll contact you within 24 hours.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
