"use client";

import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, Calendar, MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Hero from "./_components/Hero";

export default function Home() {
  // const [isMenuOpen, setIsMenuOpen] = useState();

  return (
    
    <main className="min-h-screen bg-[#1a1333]">
     <Hero />
   

      {/* Features Section */}
      <div className="bg-[#241947] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-[#b624ff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Horários dos Cultos</h3>
              <p className="text-gray-300">Domingo: 9h e 18h<br />Quarta: 19h30</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[#b624ff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Ministérios</h3>
              <p className="text-gray-300">Jovens, Famílias, Crianças<br />e muito mais</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-[#b624ff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Localização</h3>
              <p className="text-gray-300">Venha nos visitar<br />e seja bem-vindo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#1a1333] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Faça Parte da Nossa Família</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a nós nesta jornada de fé e descubra o propósito que Deus tem para sua vida.
          </p>
          <Link href="/sobre">
          <Button    className="bg-[#b624ff] hover:bg-[#9920d3] text-lg px-8 py-6">
            Entre em Contato
          </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}