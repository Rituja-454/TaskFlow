import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import TaskTable from './pages/TaskTable'
import AddTask from './pages/AddTask'
import EditTask from './pages/EditTask'

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
      <Header />
      <main style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: '20px 0' }}>404</h1>
        <p style={{ fontSize: '20px', margin: '20px 0' }}>Page Not Found</p>
        <p style={{ color: '#666', marginBottom: '30px' }}>The page you're looking for doesn't exist.</p>
        <a href="/" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
          Go Home
        </a>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tasks" element={<TaskTable />} />
      <Route path="/tasks/add" element={<AddTask />} />
      <Route path="/tasks/edit/:id" element={<EditTask />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
