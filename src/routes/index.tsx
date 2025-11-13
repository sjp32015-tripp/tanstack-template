import { createFileRoute } from '@tanstack/react-router'
import { Users, Shield, Heart, Check } from 'lucide-react'

function LandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Ground Game Guidance</h1>
            <a 
              href="https://buy.stripe.com/bJe4gydsSikr7o1dxZgjc00"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-sm font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Join Now
            </a>
          </div>
        </div>
      </header>

      <section className="px-6 pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Join The Movement
            </h2>
            <p className="mb-10 text-xl text-slate-300 md:text-2xl">
              A welcoming community dedicated to personal growth, healing, and collective empowerment through trauma-informed support and guidance.
            </p>
            <a 
              href="https://buy.stripe.com/bJe4gydsSikr7o1dxZgjc00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-lg font-semibold text-white transition-all duration-200 transform rounded-lg shadow-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              Join Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-slate-800/50">
        <div className="container mx-auto">
          <h3 className="mb-12 text-4xl font-bold text-center text-white">
            Choose Your Path
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 transition-all duration-300 border rounded-2xl bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-600/20">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="mb-4 text-2xl font-bold text-center text-white">
                Community
              </h4>
              <div className="mb-6 text-center">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start text-slate-300">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-400" />
                  <span>Access to supportive community forums</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-400" />
                  <span>Monthly group sessions</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-400" />
                  <span>Resource library access</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-400" />
                  <span>Safe and welcoming space</span>
                </li>
              </ul>
              <a 
                href="https://buy.stripe.com/fZu6oG1JT4gngY8bpRgjc01"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 font-semibold text-center text-white transition-all duration-200 border-2 rounded-lg border-blue-600/50 hover:bg-blue-600/20 hover:border-blue-500"
              >
                Get Started
              </a>
            </div>

            <div className="relative p-8 transition-all duration-300 border-2 rounded-2xl bg-gradient-to-br from-blue-900/30 to-slate-900/50 border-blue-500/50 hover:border-blue-400/70 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105">
              <div className="absolute px-4 py-1 text-sm font-semibold text-white transform -translate-x-1/2 rounded-full -top-3 left-1/2 bg-gradient-to-r from-blue-600 to-blue-700">
                Most Popular
              </div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500/30">
                <Shield className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="mb-4 text-2xl font-bold text-center text-white">
                All Access
              </h4>
              <div className="mb-6 text-center">
                <span className="text-5xl font-bold text-white">$79</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start text-slate-200">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-300" />
                  <span>Everything in Community tier</span>
                </li>
                <li className="flex items-start text-slate-200">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-300" />
                  <span>Weekly guided sessions</span>
                </li>
                <li className="flex items-start text-slate-200">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-300" />
                  <span>Priority support access</span>
                </li>
                <li className="flex items-start text-slate-200">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-300" />
                  <span>Exclusive workshops and events</span>
                </li>
                <li className="flex items-start text-slate-200">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-300" />
                  <span>Personalized growth tracking</span>
                </li>
              </ul>
              <a 
                href="https://buy.stripe.com/bJe4gydsSikr7o1dxZgjc00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 font-semibold text-center text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Get Started
              </a>
            </div>

            <div className="p-8 transition-all duration-300 border rounded-2xl bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-600/20">
                <Heart className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="mb-4 text-2xl font-bold text-center text-white">
                Single Session
              </h4>
              <div className="mb-6 text-center">
                <span className="text-5xl font-bold text-white">$60</span>
                <span className="text-slate-400">/session</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start text-slate-300">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-400" />
                  <span>One-time guided session</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-400" />
                  <span>Personalized attention</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-400" />
                  <span>No commitment required</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <Check className="flex-shrink-0 w-5 h-5 mr-3 text-blue-400" />
                  <span>Perfect for trying us out</span>
                </li>
              </ul>
              <a 
                href="https://buy.stripe.com/7sY5kCgENfZ50ZD8dFgjc02"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 font-semibold text-center text-white transition-all duration-200 border-2 rounded-lg border-blue-600/50 hover:bg-blue-600/20 hover:border-blue-500"
              >
                Book Session
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-slate-900/30">
        <div className="container mx-auto">
          <h3 className="mb-4 text-4xl font-bold text-center text-white">
            Our Commitment to You
          </h3>
          <p className="max-w-3xl mx-auto mb-16 text-xl text-center text-slate-300">
            We create a safe, supportive environment where everyone can heal and grow at their own pace
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center transition-all duration-200 border rounded-xl bg-slate-800/30 border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/50">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600/20">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">Trauma-Informed</h4>
              <p className="text-slate-400">
                Every interaction is designed with sensitivity, respect, and understanding of healing journeys
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-200 border rounded-xl bg-slate-800/30 border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/50">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600/20">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">Welcoming Space</h4>
              <p className="text-slate-400">
                A judgment-free environment where you can be authentic and feel accepted exactly as you are
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-200 border rounded-xl bg-slate-800/30 border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/50">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600/20">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">Community Support</h4>
              <p className="text-slate-400">
                Connect with others who understand your journey and share in collective growth and healing
              </p>
            </div>

            <div className="p-6 text-center transition-all duration-200 border rounded-xl bg-slate-800/30 border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/50">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600/20">
                <Check className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">Empowerment Focus</h4>
              <p className="text-slate-400">
                Tools and guidance designed to help you reclaim your power and create positive change
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 border-t bg-slate-900 border-slate-800">
        <div className="container mx-auto">
          <div className="grid gap-8 mb-8 md:grid-cols-3">
            <div>
              <h5 className="mb-4 text-xl font-bold text-white">Ground Game Guidance</h5>
              <p className="text-slate-400">
                Building a community of healing, growth, and empowerment through trauma-informed support.
              </p>
            </div>
            <div>
              <h5 className="mb-4 text-lg font-semibold text-white">Quick Links</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="transition-colors hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">Our Approach</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">Community Guidelines</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 text-lg font-semibold text-white">Resources</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="transition-colors hover:text-blue-400">Getting Started</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">FAQs</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 text-center border-t border-slate-800">
            <p className="text-slate-500">
              &copy; 2024 Ground Game Guidance. All rights reserved. Your journey to healing and empowerment starts here.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: LandingPage,
})
