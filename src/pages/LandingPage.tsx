import Header from '@/components/ui/Header'
import Airtable from '@/components/Airtable'
import Hero from '@/components/ui/Hero'

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Airtable />
      </div>
    </div>
  )
}
