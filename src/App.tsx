import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Products from '@/pages/Products'
import Pricing from '@/pages/Pricing'
import Blog from '@/pages/Blog'
import Contact from '@/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#050505]">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
