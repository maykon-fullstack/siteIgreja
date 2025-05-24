
"use client";

import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, Calendar, MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


  

export default function Hero(){
const [isMenuOpen, setIsMenuOpen] = useState();
    return(
         
          <div>
      <nav className="fixed w-full z-50 bg-[#1a1333]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="relative">
                <HeartHandshake className="h-8 w-8 text-[#b624ff]" />
              
              </div>
              <span className="ml-3 text-2xl font-bold text-white">Dom de Deus</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Início</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Sobre</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Eventos</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Contato</Link>
              <Button className="bg-[#b624ff] hover:bg-[#9920d3]">Login</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="#"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Eventos
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
                <div className="px-3 py-2">
                  <Button className="bg-[#b624ff] hover:bg-[#9920d3] w-full">Login</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative pt-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(26, 19, 51, 0.8), rgba(26, 19, 51, 0.95)), url("https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Bem-vindo à Igreja<br />
            <span className="text-[#b624ff]">Dom de Deus</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Um lugar de paz, amor e renovação espiritual. Venha fazer parte da nossa comunidade e experimente o poder transformador de Deus.
          </p>
          <Button className="bg-[#b624ff] hover:bg-[#9920d3] text-lg px-8 py-6">
            Participe dos Nossos Cultos
          </Button>
        </div>
      </div>
      </div>
    )
}