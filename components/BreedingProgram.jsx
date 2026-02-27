export default function BreedingProgram() {
  const features = [
    {
      title: 'Genetic Testing',
      description: 'Over 200 genetic and health tests including DCM 1&2, VWD, eye health, heart ECG',
      icon: '🧬',
    },
    {
      title: 'Pedigree Analysis',
      description: 'Multi-generational tracking and analysis of bloodlines',
      icon: '📊',
    },
    {
      title: 'Temperament Assessment',
      description: 'Rigorous behavioral evaluation for stability and reliability',
      icon: '✓',
    },
    {
      title: 'Lifelong Monitoring',
      description: 'Continuous health tracking throughout the dog\'s life',
      icon: '❤️',
    },
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Our Breeding Program</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Included With Every Puppy</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> AKC Registration</li>
            <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Pedigree Certification</li>
            <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Microchip</li>
            <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Deworming & DHLPP Vaccinations</li>
            <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Temperament Testing</li>
            <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Health Certification</li>
            <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> 12 Weeks Vitamin Supply</li>
            <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> 12 Hours Training & Boarding</li>
            <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Puppy Contract</li>
            <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Birth Necessities</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
