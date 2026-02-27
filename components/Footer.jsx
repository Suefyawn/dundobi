import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold text-red-600 mb-4">Dundobi</h4>
            <p className="text-gray-400">European Doberman breeding program based in Miami, Florida.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-red-600">Home</Link></li>
              <li><Link href="/breeding-dogs" className="hover:text-red-600">Breeding Dogs</Link></li>
              <li><Link href="/litters" className="hover:text-red-600">Past Litters</Link></li>
              <li><Link href="/reserve" className="hover:text-red-600">Reserve</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:info@dundobi.com" className="hover:text-red-600">info@dundobi.com</a></li>
              <li><a href="tel:+1-305-000-0000" className="hover:text-red-600">+1 (305) 000-0000</a></li>
              <li>Miami, Florida</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-600">Instagram</a></li>
              <li><a href="#" className="hover:text-red-600">Facebook</a></li>
              <li><a href="#" className="hover:text-red-600">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dundobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
