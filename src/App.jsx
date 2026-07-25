import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JsonLd from './components/JsonLd'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Brands from './pages/Brands'
import BrandDetail from './pages/BrandDetail'
import FAQ from './pages/FAQ'
import ServiceAreas from './pages/ServiceAreas'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Immortal Automotive Performance Inc.',
  image: 'https://immortalauto.com/logo.png',
  url: 'https://immortalauto.com',
  telephone: '+1-780-504-7505',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '114 Sioux Rd',
    addressLocality: 'Sherwood Park',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  areaServed: ['Sherwood Park, AB', 'Edmonton, AB'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <JsonLd data={localBusinessSchema} />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/:slug" element={<BrandDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
