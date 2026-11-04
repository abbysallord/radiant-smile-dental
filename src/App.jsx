import React, { useState } from 'react';
import { 
  Sparkles, ShieldCheck, Clock, MapPin, Phone, Calendar, 
  CheckCircle2, Star, ChevronRight, Stethoscope, Smile, 
  Activity, Award, HeartHandshake, UserCheck, X, Menu
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Checkup',
    date: '',
    notes: ''
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingModalOpen(false);
      setFormData({ name: '', phone: '', email: '', service: 'General Checkup', date: '', notes: '' });
    }, 3000);
  };

  const services = [
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      desc: 'Transform your smile with porcelain veneers, professional teeth whitening, and precision bonding.',
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      tag: 'Most Popular',
      price: 'From $299'
    },
    {
      id: 'implants',
      title: 'Dental Implants',
      desc: 'Permanent, natural-looking tooth replacement using 3D guided surgery and titanium anchors.',
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      tag: 'Lifetime Warranty',
      price: 'From $1,200'
    },
    {
      id: 'ortho',
      title: 'Clear Aligners',
      desc: 'Straighten your teeth discreetly with invisible aligners tailored for comfort and speed.',
      icon: <Smile className="w-6 h-6 text-cyan-400" />,
      tag: 'Zero Metal',
      price: 'From $1,800'
    },
    {
      id: 'preventive',
      title: 'Preventive & Cleanings',
      desc: 'Comprehensive ultrasonic scaling, oral cancer screenings, and deep gum health maintenance.',
      icon: <Stethoscope className="w-6 h-6 text-cyan-400" />,
      tag: 'Essential Care',
      price: '$150'
    },
    {
      id: 'emergency',
      title: '24/7 Emergency Care',
      desc: 'Urgent pain relief, chipped tooth restoration, and same-day emergency appointments.',
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
      tag: 'Immediate Response',
      price: 'Same Day'
    },
    {
      id: 'surgery',
      title: 'Oral Surgery & Root Canal',
      desc: 'Painless microscopic root canals and gentle wisdom tooth extractions with sedation options.',
      icon: <HeartHandshake className="w-6 h-6 text-cyan-400" />,
      tag: 'Painless Sedation',
      price: 'From $450'
    }
  ];

  const doctors = [
    {
      name: 'Dr. Sarah Jenkins, DDS',
      role: 'Lead Cosmetic & Implant Surgeon',
      exp: '15+ Years Exp.',
      bio: 'Alumna of Harvard School of Dental Medicine, specialized in full-mouth reconstructions and aesthetics.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Dr. Michael Chen, DMD',
      role: 'Orthodontics & Aligner Specialist',
      exp: '12+ Years Exp.',
      bio: 'Pioneered digital 3D smile design protocols and certified Invisalign Elite provider.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Dr. Elena Rostova, DDS',
      role: 'Pediatric & Preventive Dentistry',
      exp: '10+ Years Exp.',
      bio: 'Dedicated to anxiety-free dental experiences for children and holistic preventive care.',
      image: 'https://images.unsplash.com/photo-1594824813575-298a0f283287?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const testimonials = [
    {
      quote: 'I used to have crippling dental anxiety. The team at Radiant Smile used sedation dentistry for my implants and I felt literally zero pain. Absolute life changer!',
      author: 'Marcus Vance',
      role: 'Tech Executive',
      rating: 5
    },
    {
      quote: 'Got porcelain veneers done before my wedding. The results look so natural and vibrant. Everyone keeps complimenting my smile!',
      author: 'Jessica Alpert',
      role: 'Fashion Designer',
      rating: 5
    },
    {
      quote: 'State-of-the-art clinic with zero wait times. Dr. Jenkins explained every step with 3D scans. Best dental experience of my life.',
      author: 'David Sterling',
      role: 'Venture Capitalist',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs sm:text-sm py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 text-slate-400">
            <span className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
              <MapPin className="w-4 h-4 text-cyan-400" /> 450 Park Avenue, Suite 1200, New York, NY
            </span>
            <span className="hidden md:flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
              <Clock className="w-4 h-4 text-cyan-400" /> Mon-Sat: 8:00 AM - 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:18005552345" className="flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300">
              <Phone className="w-4 h-4" /> (800) 555-SMILE
            </a>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-1 rounded-full text-xs transition-all shadow-lg shadow-cyan-500/20"
            >
              Emergency Call
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
                RADIANT SMILE
              </span>
              <span className="block text-[10px] tracking-widest text-cyan-400 font-semibold uppercase">Advanced Dental Aesthetics</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#technology" className="hover:text-cyan-400 transition-colors">Technology</a>
            <a href="#doctors" className="hover:text-cyan-400 transition-colors">Our Team</a>
            <a href="#reviews" className="hover:text-cyan-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full animate-pulse"></span>
              <span className="relative px-6 py-2.5 rounded-full bg-slate-950 text-cyan-400 font-semibold text-sm flex items-center gap-2 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-teal-400 group-hover:text-slate-950 transition-all duration-300">
                <Calendar className="w-4 h-4" /> Book Appointment
              </span>
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">Services</a>
            <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">Technology</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">Our Team</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-slate-300 hover:text-cyan-400">Contact</a>
            <button
              onClick={() => { setMobileMenuOpen(false); setBookingModalOpen(true); }}
              className="w-full bg-cyan-500 text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Calendar className="w-5 h-5" /> Book Appointment
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-36 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4" /> Voted #1 Dental Clinic in New York 2026
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Redefining Your <br />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-white bg-clip-text text-transparent">
                  Smile & Confidence
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal">
                Experience pain-free, state-of-the-art dentistry with world-class specialists, 3D precision imaging, and luxurious comfort in the heart of Manhattan.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-bold text-base hover:opacity-90 transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-3 group"
                >
                  <Calendar className="w-5 h-5" /> Book Your Visit Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-base hover:bg-slate-800 hover:text-white transition-all text-center"
                >
                  Explore Treatments
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">15K+</div>
                  <div className="text-xs sm:text-sm text-slate-400">Smiles Restored</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">4.9 ★</div>
                  <div className="text-xs sm:text-sm text-slate-400">Google Rating</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs sm:text-sm text-slate-400">Pain-Free Guarantee</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 to-teal-400 opacity-30 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                    alt="Modern Dental Clinic Interior" 
                    className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">AI-Powered Diagnostics</div>
                      <div className="text-xs text-slate-400">Sub-millimeter precision 3D CBCT scans</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">World-Class Treatments</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Specialized Care Tailored For You
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              From routine cleanings to complex full-mouth rehabilitations, we utilize cutting-edge dental technology for optimal results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div 
                key={idx}
                className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-300">{item.price}</span>
                  <button 
                    onClick={() => setBookingModalOpen(true)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Book Now <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Advanced Technology</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Painless Dentistry Powered by Innovation
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                We believe going to the dentist should feel like a spa visit. That is why we invested in state-of-the-art equipment designed to eliminate discomfort and cut procedure times in half.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: 'CEREC Same-Day Crowns', desc: 'Custom ceramic crowns milled in 15 minutes right in front of you. No temporary crowns needed.' },
                  { title: 'Waterlase Laser Dentistry', desc: 'No drills, no needles, and no numbness for most cavity preparations and soft tissue treatments.' },
                  { title: '3D CBCT Digital Impressions', desc: 'No gooey impression trays. Ultra-fast optical scanning creates a precise 3D model in seconds.' }
                ].map((tech, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{tech.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" 
                  alt="Dental Equipment" 
                  className="rounded-3xl object-cover h-64 sm:h-80 w-full border border-slate-800 shadow-xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce6395?auto=format&fit=crop&q=80&w=600" 
                  alt="Dental Care" 
                  className="rounded-3xl object-cover h-64 sm:h-80 w-full border border-slate-800 shadow-xl mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-24 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">World-Class Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Meet Our Expert Dental Surgeons
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Internationally recognized specialists dedicated to precision, aesthetics, and patient comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <span className="absolute bottom-4 left-4 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow">
                    {doc.exp}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white">{doc.name}</h3>
                  <div className="text-cyan-400 text-sm font-semibold">{doc.role}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{doc.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Patient Testimonials</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Loved By Thousands of Patients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between relative">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-sm">{t.author}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-xs">
                    ✓
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-slate-950" />
                </div>
                <span className="text-xl font-extrabold tracking-tight text-white">RADIANT SMILE</span>
              </div>
              <p className="text-slate-400 text-sm">
                Next-generation dental clinic delivering impeccable oral aesthetics and pain-free treatments in New York.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
                <li><a href="#technology" className="hover:text-cyan-400">Technology</a></li>
                <li><a href="#doctors" className="hover:text-cyan-400">Our Doctors</a></li>
                <li><a href="#reviews" className="hover:text-cyan-400">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Treatments</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-cyan-400">Cosmetic Dentistry</a></li>
                <li><a href="#services" className="hover:text-cyan-400">Dental Implants</a></li>
                <li><a href="#services" className="hover:text-cyan-400">Clear Aligners</a></li>
                <li><a href="#services" className="hover:text-cyan-400">Emergency Care</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact & Hours</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /> 450 Park Avenue, NY</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" /> (800) 555-SMILE</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" /> Mon-Sat: 8AM - 8PM</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            © 2026 Radiant Smile Dental Clinic. All rights reserved. Built with precision and care.
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2"
            >
              <X className="w-6 h-6" />
            </button>

            {bookingSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto text-cyan-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Appointment Confirmed!</h3>
                <p className="text-slate-400 text-sm">
                  We have received your request and will call you within 15 minutes to confirm your time slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Book Your Visit</h3>
                  <p className="text-slate-400 text-xs">Fill out the form below and our concierge will contact you.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(555) 000-0000" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Select Service</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option>General Checkup & Cleaning</option>
                    <option>Cosmetic Dentistry & Veneers</option>
                    <option>Dental Implants</option>
                    <option>Clear Aligners / Orthodontics</option>
                    <option>Emergency Pain Relief</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Notes (Optional)</label>
                  <textarea 
                    rows="2"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Any specific symptoms or requests..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:opacity-90 transition-opacity"
                >
                  Confirm Appointment Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
