export default function LittersPage() {
  const litters = [
    {
      id: 1,
      name: 'Spring 2025 Litter',
      date: 'March 15, 2025',
      sire: 'Champion Kuro',
      dam: 'Rosa Prima',
      count: 7,
      description: 'Successful litter with 7 healthy puppies. All placed in excellent homes.',
    },
  ]

  return (
    <div>
      <section className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Past Litters</h1>
          <p className="text-gray-300">History of our breeding program</p>
        </div>
      </section>

      <section className="section container-custom">
        <div className="space-y-8 max-w-4xl mx-auto">
          {litters.map(litter => (
            <div key={litter.id} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-2">{litter.name}</h3>
              <p className="text-gray-600 mb-4">{litter.date}</p>
              <p className="text-gray-700 mb-4">{litter.description}</p>
              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div>
                  <p className="text-gray-600 text-sm">Sire</p>
                  <p className="font-semibold">{litter.sire}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Dam</p>
                  <p className="font-semibold">{litter.dam}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Puppies</p>
                  <p className="font-semibold">{litter.count} puppies</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
