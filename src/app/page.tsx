import Header from "@/app/_components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const stats = [
    {
      value: "1K+",
      label: "Jogadores Ativos",
    },
    {
      value: "50+",
      label: "Carros Disponíveis",
    },
    {
      value: "10+",
      label: "Pistas Únicas",
    },
  ];
  
  const features = [
    {
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Apostas Rápidas",
      description: "Faça suas apostas em segundos com nossa interface intuitiva e rápida.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "100% Seguro",
      description: "Sua segurança é nossa prioridade. Todas as transações são criptografadas.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Pagamentos Instantâneos",
      description: "Receba seus ganhos instantaneamente em sua conta após cada vitória.",
    },
  ];
  

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background com efeito parallax */}
        <div className="absolute inset-0">
          <Image
            src="/background.svg"
            alt="Background"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex  max-w-7xl flex-col items-center justify-center gap-20 px-4 py-12 lg:flex-row lg:justify-between lg:gap-12">
          {/* Text Content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="bg-gradient-to-r from-[#40D040] to-[#030903] bg-clip-text text-6xl font-bold text-transparent sm:text-7xl md:text-8xl lg:max-w-3xl">
              O Melhor Jogo de Corrida do Brasil
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">
              LowRacing é um jogo de corrida único, desenvolvido por jogadores para jogadores. 
              Com gráficos impressionantes e jogabilidade viciante, prepare-se para uma experiência 
              que vai revolucionar sua forma de jogar.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className="group relative overflow-hidden rounded-[10px] bg-gradient-to-r from-[#40D040] to-[#004B00] px-8 py-4 text-lg font-medium uppercase text-white transition-all hover:brightness-75"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity group-hover:opacity-20" />
                <span className="flex items-center gap-2">
                  Baixar Launcher
                  <svg 
                    className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/about"
                className="rounded-[10px] border border-zinc-700 bg-zinc-900/30 px-8 py-4 text-lg font-medium uppercase text-white backdrop-blur-sm transition-colors hover:bg-zinc-800/50"
              >
                Saiba Mais
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-[#40D040]">{stat.value}</div>
                  <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex-1">
            <Image
              src="/hero-car.png" // Adicione uma imagem de carro aqui
              alt="Low Racing Car"
              width={600}
              height={400}
              className="animate-float object-contain"
              priority
            />
            
            {/* Decorative Elements */}
            <div className="absolute -left-4 top-1/2 h-32 w-32 animate-pulse rounded-full bg-[#40D040]/20 blur-3xl" />
            <div className="absolute -right-4 top-1/4 h-24 w-24 animate-pulse rounded-full bg-[#004B00]/20 blur-3xl" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            className="h-6 w-6 text-zinc-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Por que escolher a Low Racing?
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-zinc-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#40D040] to-[#004B00]">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Pronto para começar?
              </h2>
              <p className="mt-4 text-lg text-zinc-400">
                Junte-se a milhares de apostadores e comece a ganhar hoje mesmo!
              </p>
              <Link
                href="/register"
                className="mt-8 inline-block rounded-[10px] bg-gradient-to-r from-[#40D040] to-[#004B00] px-8 py-3 text-lg font-medium uppercase text-white transition-all hover:brightness-75"
              >
                Criar Conta Grátis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-zinc-400">
          <p>© 2024 Low Racing. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

