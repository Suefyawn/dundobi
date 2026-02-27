import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Working European Dobermans
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Elite breeding program focused on health, temperament, and genetic excellence
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/reserve" className="btn">
            Reserve Your Puppy
          </Link>
          <Link href="/breeding-dogs" className="btn btn-secondary">
            Meet Our Dogs
          </Link>
        </div>
      </div>
    </section>
  )
}
