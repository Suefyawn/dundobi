import Link from 'next/link'

export default function UpcomingLitters() {
  return (
    <section className="section container-custom">
      <h2 className="section-title text-center mb-12">Upcoming Litters</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-red-600">
          <h3 className="text-2xl font-bold mb-4">Spring 2026 Litter</h3>
          <div className="space-y-3 mb-6">
            <div>
              <p className="text-gray-600 text-sm">Whelping Date</p>
              <p className="text-lg font-semibold">March 7, 2026</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Sire</p>
              <p className="text-lg font-semibold">Champion European Bloodline</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Dam</p>
              <p className="text-lg font-semibold">Championship Female</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Expected Colors</p>
              <p className="text-lg font-semibold">Black & Rust, Red & Rust</p>
            </div>
          </div>
          <Link href="/reserve" className="btn">
            Reserve Now
          </Link>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold mb-4">Special Programs</h3>
          <p className="text-gray-700 mb-4">
            We offer special rates and benefits for:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>✓ Law Enforcement Officers</li>
            <li>✓ Medical Professionals</li>
            <li>✓ First Responders</li>
            <li>✓ Veterans</li>
            <li>✓ Senior Citizens</li>
          </ul>
          <p className="text-sm text-gray-600">
            Contact us to inquire about special pricing and programs.
          </p>
        </div>
      </div>
    </section>
  )
}
