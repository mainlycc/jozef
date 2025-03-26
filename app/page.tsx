'use client'
import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ImageModal } from "@/components/ImageModal"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-semibold">
              Józef Blicharski
            </Link>
            <div className="hidden space-x-8 md:flex">
              <Link href="#biografia" className="text-sm hover:text-neutral-600">
                Biografia
              </Link>
              <Link href="#dziela" className="text-sm hover:text-neutral-600">
                Dzieła
              </Link>
              <Link href="#wystawy" className="text-sm hover:text-neutral-600">
                Wystawy
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f8f5f2] py-20">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-no-repeat opacity-30"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
                Józef Blicharski
              </h1>
              <p className="mt-2 text-xl text-neutral-600 md:text-2xl">1886 - 1941</p>
              <p className="mt-6 max-w-md text-neutral-600">
                Wybitny polski malarz XX wieku, którego twórczość łączyła tradycyjne techniki z nowoczesnymi prądami
                artystycznymi. Jego dzieła odzwierciedlają burzliwe dzieje Polski i Europy w minionym stuleciu.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-[#8c7851] hover:bg-[#6a5b3d]">
                  Odkryj twórczość
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Biografia</Button>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-neutral-200 shadow-lg">
              <Image
                src="/jozef_auto.jpg"
                alt="Józef Blicharski - autoportret"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section id="biografia" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">Biografia</h2>

            {/* Timeline */}
            <div className="mt-16 relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#8c7851]/30 -translate-x-1/2 hidden md:block"></div>

              <div className="space-y-12 md:space-y-0">
                {/* Timeline item 1 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="md:text-right">
                    <div className="bg-[#f8f5f2] p-6 rounded-lg shadow-sm border border-neutral-200 relative">
                      <div className="absolute top-1/2 -right-4 w-8 h-8 bg-[#8c7851] rounded-full transform -translate-y-1/2 hidden md:flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-graduation-cap"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl font-semibold">Edukacja i wczesne lata</h3>
                      <p className="text-sm text-[#8c7851] font-medium mt-1">1905 - 1910</p>
                      <p className="mt-3 text-neutral-700">
                        Józef Blicharski studiował na Akademii Sztuk Pięknych w Krakowie pod kierunkiem wybitnych
                        mistrzów, m.in. Józefa Mehoffera i Jacka Pankiewicza, uzyskując dyplom nauczyciela rysunków. Po
                        studiach zorganizował w Krakowie pierwszą wystawę współczesnej sztuki kościelnej, co świadczyło
                        o jego innowacyjnym podejściu do sztuki sakralnej.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/asp.jpg"
                        alt="Historyczne zdjęcie budynku Akademii Sztuk Pięknych w Krakowie z początku XX wieku"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline item 2 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="md:order-2">
                    <div className="bg-[#f8f5f2] p-6 rounded-lg shadow-sm border border-neutral-200 relative">
                      <div className="absolute top-1/2 -left-4 w-8 h-8 bg-[#8c7851] rounded-full transform -translate-y-1/2 hidden md:flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-plane"
                        >
                          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl font-semibold">Paryż i początki kariery</h3>
                      <p className="text-sm text-[#8c7851] font-medium mt-1">1910 - 1914</p>
                      <p className="mt-3 text-neutral-700">
                        Kontynuował edukację w Paryżu, gdzie studiował malarstwo, rzeźbę i sztukę użytkową, poszerzając
                        swoje artystyczne horyzonty. W 1911 roku rozpoczął karierę pedagogiczną jako asystent w katedrze
                        rysunków odręcznych na Politechnice Lwowskiej. W 1914 roku objął posadę nauczyciela rysunków w
                        Gimnazjum Macierzy Polskiej w Kijowie.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:order-1">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Paryż na początku XX wieku"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline item 3 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="md:text-right">
                    <div className="bg-[#f8f5f2] p-6 rounded-lg shadow-sm border border-neutral-200 relative">
                      <div className="absolute top-1/2 -right-4 w-8 h-8 bg-[#8c7851] rounded-full transform -translate-y-1/2 hidden md:flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-landmark"
                        >
                          <path d="M3 22h18" />
                          <path d="M6 18h12" />
                          <path d="M4 10v8" />
                          <path d="M20 10v8" />
                          <path d="M12 2v8" />
                          <path d="M2 14h20" />
                          <path d="M12 2 2 14" />
                          <path d="M12 2l10 12" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl font-semibold">Okres białostocki</h3>
                      <p className="text-sm text-[#8c7851] font-medium mt-1">1920 - 1939</p>
                      <p className="mt-3 text-neutral-700">
                        W 1920 roku przybył do Białegostoku i został nauczycielem w Męskim Seminarium Nauczycielskim
                        oraz w Gimnazjum im. Józefa Piłsudskiego. Skupił wokół siebie grono artystów i entuzjastów
                        sztuki, z którymi planował stworzyć wzorcowe centrum szkolenia nauczycieli. W 1930 roku
                        zorganizował wystawę swoich prac w sali pałacu Branickich.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/okres_bialostocki.jpg"
                        alt="Józef Blicharski z uczniami Seminarium Nauczycielskiego w Białymstoku, lata 20. XX wieku"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline item 4 */}
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className="md:order-2">
                    <div className="bg-[#f8f5f2] p-6 rounded-lg shadow-sm border border-neutral-200 relative">
                      <div className="absolute top-1/2 -left-4 w-8 h-8 bg-[#8c7851] rounded-full transform -translate-y-1/2 hidden md:flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-church"
                        >
                          <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
                          <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
                          <path d="M18 22V5l-6-3-6 3v17" />
                          <path d="M12 7v5" />
                          <path d="M10 9h4" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl font-semibold">Ostatnie lata i dziedzictwo</h3>
                      <p className="text-sm text-[#8c7851] font-medium mt-1">1939 - 1941</p>
                      <p className="mt-3 text-neutral-700">
                        W latach 1939-1941, podczas okupacji, Blicharski poświęcił się dekoracji wnętrz sakralnych,
                        tworząc m.in. elementy wystroju kościoła św. Rocha oraz kościoła w Niewolnicy. Jego życie
                        zakończyło się tragicznie – 25 czerwca 1941 roku został rozstrzelany przez wycofujących się z
                        Białegostoku Rosjan. Jego spuścizna artystyczna stanowi ważny element polskiego dziedzictwa
                        kulturowego.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:order-1">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Kościół św. Rocha w Białymstoku"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legacy */}
            <div className="mt-16 bg-[#8c7851]/10 p-8 rounded-lg border border-[#8c7851]/20">
              <h3 className="font-serif text-2xl font-semibold text-center">Dziedzictwo artystyczne</h3>
              <p className="mt-4 text-center text-neutral-700">
                Józef Blicharski pozostawił po sobie bogaty dorobek artystyczny, obejmujący malarstwo, rzeźbę, projekty
                mebli i polichromie. Jego wszechstronność i zaangażowanie w edukację artystyczną wywarły znaczący wpływ
                na rozwój kultury w Białymstoku w okresie międzywojennym. Choć wiele jego prac zostało zniszczonych
                podczas wojny, te które przetrwały, świadczą o jego talencie i wrażliwości artystycznej.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#8c7851] flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-palette"
                    >
                      <circle cx="13.5" cy="6.5" r=".5" />
                      <circle cx="17.5" cy="10.5" r=".5" />
                      <circle cx="8.5" cy="7.5" r=".5" />
                      <circle cx="6.5" cy="12.5" r=".5" />
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm font-medium">Malarstwo</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#8c7851] flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-hammer"
                    >
                      <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
                      <path d="M17.64 15 22 10.64" />
                      <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm font-medium">Rzeźba</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#8c7851] flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-armchair"
                    >
                      <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                      <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                      <path d="M5 18v2" />
                      <path d="M19 18v2" />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm font-medium">Projektowanie mebli</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#8c7851] flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-brush"
                    >
                      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
                      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm font-medium">Polichromie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="dziela" className="bg-[#f8f5f2] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">Dzieła</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Wybrane prace Józefa Blicharskiego z różnych okresów jego twórczości, ukazujące ewolucję stylu i tematyki.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Portret Ojca",
                year: "1930",
                description: "Intymny portret ojca artysty, ukazujący głębokie zrozumienie psychologiczne portretowanej osoby oraz mistrzowskie operowanie światłocieniem.",
                image: "/ojciec.png"
              },
              {
                title: "Autoportret",
                year: "1935",
                description: "Autoportret artysty w średnim wieku, ukazujący charakterystyczne cechy jego stylu malarskiego - precyzyjne oddanie rysów twarzy i głębię psychologiczną portretowanej osoby.",
                image: "/autoportrert.jpg"
              },
              {
                title: "Patent na aparat kinematograficzny",
                year: "1925",
                description: "Patent nr 2046 przyznany przez Urząd Patentowy Rzeczypospolitej Polskiej w Warszawie, świadczący o innowacyjności i wszechstronności zainteresowań artysty.",
                image: "/patent.jpg"
              },
              {
                title: "Portret Mariana Zyndrama-Kościałkowskiego",
                year: "1933",
                description: "Portret wojewody białostockiego w mundurze oficerskim z orderami. Obraz przedstawia jedną z najważniejszych postaci międzywojennego Białegostoku.",
                image: "/Koscialkowski_by_Blicharski.jpg"
              },
              {
                title: "Portret kobiety",
                year: "1932",
                description: "Portret wykonany w technice olejnej, ukazujący elegancką kobietę w futrze, charakterystyczny dla stylu lat 30.",
                image: "/portretkobiety.jpg"
              },
              {
                title: "Panorama Białegostoku",
                year: "1928",
                description: "Historyczny widok miasta ukazujący jego architekturę i charakter w okresie międzywojennym",
                image: "/białystok.jpg"
              },
              {
                title: "Pejzaż podkrakowski",
                year: "1908",
                description: "Praca z okresu studiów, wpływy impresjonizmu",
              },
              {
                title: "Wnętrze kościoła",
                year: "1912",
                description: "Studium architektury sakralnej, inspirowane sztuką francuską",
              },
              {
                title: "Portret profesora",
                year: "1920",
                description: "Portret wykonany po przybyciu do Białegostoku",
              },
              {
                title: "Projekt polichromii",
                year: "1935",
                description: "Szkic do dekoracji wnętrza Seminarium Nauczycielskiego",
              },
              {
                title: "Kościół św. Rocha",
                year: "1940",
                description: "Ostatnie prace artysty, dekoracje sakralne",
              },
            ].map((artwork, index) => {
              const [isModalOpen, setIsModalOpen] = useState(false)
              const imageSrc = artwork.image || '/placeholder.svg?height=600&width=800'
              
              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div 
                    className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Image
                      src={imageSrc}
                      alt={artwork.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-xl font-semibold">{artwork.title}</h3>
                    <p className="text-sm text-neutral-500">{artwork.year}</p>
                    <p className="mt-2 text-sm text-neutral-600">{artwork.description}</p>
                  </div>

                  {isModalOpen && (
                    <ImageModal
                      src={imageSrc}
                      alt={artwork.title}
                      onClose={() => setIsModalOpen(false)}
                    />
                  )}
                </div>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-[#8c7851] text-[#8c7851] hover:bg-[#8c7851] hover:text-white">
              Zobacz więcej dzieł
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section id="wystawy" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">Wystawy</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Najważniejsze wystawy prac Józefa Blicharskiego, zarówno za jego życia, jak i pośmiertne retrospektywy.
          </p>
          <div className="mt-12">
            <div className="mx-auto max-w-3xl space-y-8">
              {[
                {
                  title: "Wystawa sztuki kościelnej",
                  location: "Kraków",
                  year: "1910",
                  description:
                    "Pierwsza w Krakowie wystawa współczesnej sztuki kościelnej, zorganizowana przez Blicharskiego po ukończeniu studiów.",
                },
                {
                  title: "Wystawa prac artystycznych",
                  location: "Pałac Branickich, Białystok",
                  year: "1930",
                  description:
                    "Znacząca wystawa prac Blicharskiego w reprezentacyjnej sali pałacu Branickich, prezentująca jego dorobek artystyczny mieszkańcom Białegostoku.",
                },
                {
                  title: "Józef Blicharski - Nauczyciel i Artysta",
                  location: "Muzeum Podlaskie, Białystok",
                  year: "1960",
                  description:
                    "Pierwsza pośmiertna wystawa upamiętniająca twórczość artysty i jego wkład w rozwój edukacji artystycznej w regionie.",
                },
                {
                  title: "Sztuka sakralna Józefa Blicharskiego",
                  location: "Muzeum Archidiecezjalne, Białystok",
                  year: "1981",
                  description:
                    "Wystawa poświęcona pracom sakralnym artysty, w tym projektom dla kościoła św. Rocha i innych świątyń.",
                },
                {
                  title: "Blicharski i jego uczniowie",
                  location: "Galeria Arsenał, Białystok",
                  year: "1991",
                  description:
                    "Wystawa prezentująca prace Blicharskiego oraz jego uczniów, ukazująca wpływ artysty na rozwój sztuki w regionie.",
                },
                {
                  title: "Józef Blicharski - w 80. rocznicę śmierci",
                  location: "Muzeum Podlaskie, Białystok",
                  year: "2021",
                  description:
                    "Retrospektywna wystawa upamiętniająca 80. rocznicę tragicznej śmierci artysty, prezentująca zachowane prace oraz dokumenty związane z jego życiem i twórczością.",
                },
              ].map((exhibition, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-lg border border-neutral-200 bg-[#f8f5f2] p-6 shadow-sm transition-all hover:shadow-md md:flex-row"
                >
                  <div className="shrink-0 text-center md:w-24">
                    <span className="inline-block rounded-full bg-[#8c7851] px-3 py-1 text-sm font-medium text-white">
                      {exhibition.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">{exhibition.title}</h3>
                    <p className="text-sm text-neutral-500">{exhibition.location}</p>
                    <p className="mt-2 text-neutral-600">{exhibition.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#8c7851] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-6 h-12 w-12 opacity-80"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
            <blockquote className="font-serif text-2xl font-light italic leading-relaxed md:text-3xl">
              Sztuka jest najwyższą formą edukacji. Poprzez piękno kształtujemy nie tylko przestrzeń, ale przede
              wszystkim dusze młodych pokoleń.
            </blockquote>
            <p className="mt-6 font-medium">— Józef Blicharski, 1935</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-[#f8f5f2] py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Józef Blicharski</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Strona poświęcona życiu i twórczości wybitnego polskiego malarza XX wieku.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Kontakt</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Fundacja im. Józefa Blicharskiego
                <br />
                ul. Artystyczna 12
                <br />
                31-157 Kraków
                <br />
                fundacja@blicharski.pl
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Nawigacja</h3>
              <nav className="mt-2 flex flex-col space-y-2">
                <Link href="#biografia" className="text-sm text-neutral-600 hover:text-neutral-900">
                  Biografia
                </Link>
                <Link href="#dziela" className="text-sm text-neutral-600 hover:text-neutral-900">
                  Dzieła
                </Link>
                <Link href="#wystawy" className="text-sm text-neutral-600 hover:text-neutral-900">
                  Wystawy
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Fundacja im. Józefa Blicharskiego. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

