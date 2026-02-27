export default function BreedingDogsPage() {
  const dogs = [
    {
      id: 1,
      name: 'Champion Kuro',
      color: 'Black',
      studfee: 1500,
      description: 'Proven sire with championship bloodline. 200+ genetic tests passed.',
      image: 'https://images.unsplash.com/photo-1633722715463-d30628cad4ae?w=500',
    },
    {
      id: 2,
      name: 'Rosa Prima',
      color: 'Red',
      studfee: 0,
      description: 'Multiple champion offspring. Currently not available.',
      image: 'https://images.unsplash.com/photo-1584161358614-97fe09b20ca7?w=500',
    },
  ]

  return (
    <div>
      <section className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Our Breeding Dogs</h1>
          <p className="text-gray-300">Meet the foundation of our breeding program</p>
        </div>
      </section>

      <section className="section container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          {dogs.map(dog => (
            <div key={dog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gray-200 h-64"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{dog.name}</h3>
                <p className="text-gray-600 mb-4">{dog.color}</p>
                <p className="text-gray-700 mb-4">{dog.description}</p>
                {dog.studfee > 0 && (
                  <p className="text-lg font-semibold text-red-600">Stud Fee: ${dog.studfee}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
