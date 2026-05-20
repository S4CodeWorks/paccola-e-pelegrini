import { Shield, Scale, Search, ChevronDown, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5500000000000' // Substituir pelo número real
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Recebi uma citação de execução e preciso de orientação especializada.'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-white">
            Paccola <span className="text-amber-500">&</span> Pelegrini
          </span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm font-medium px-3 py-2 md:px-4 border border-amber-500 text-amber-400 rounded hover:bg-amber-500 hover:text-black transition-all duration-300 tracking-wide whitespace-nowrap"
        >
          Falar com Especialista
        </a>
      </div>
    </header>
  )
}

function Hero() {
  const scrollToRights = () => {
    document.getElementById('seus-direitos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-neutral-950 flex flex-col justify-center pt-16 px-4 overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #D4AF37 0px,
            #D4AF37 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Gold accent line top */}
      <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="relative max-w-3xl mx-auto text-center py-12 md:py-20">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/50 text-red-300 text-xs font-medium px-4 py-2 rounded-full mb-8 tracking-wider uppercase">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          Ação Urgente Necessária
        </div>

        {/* H1 */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-shadow-gold">
          <span className="text-white">Você recebeu uma</span>{' '}
          <span className="text-amber-400">citação de execução</span>{' '}
          <span className="text-white">do oficial de justiça?</span>
        </h1>

        <div className="gold-divider" />

        {/* Subtitle */}
        <p className="mt-6 text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto font-light">
          Se um oficial de justiça foi até você informar que existe um processo de
          execução por dívida bancária, é importante{' '}
          <strong className="text-neutral-200 font-medium">agir rápido</strong>. Muitas
          dessas cobranças envolvem{' '}
          <strong className="text-amber-400 font-medium">juros abusivos</strong> e
          valores inflados que podem ser contestados.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative w-full sm:w-auto
              bg-amber-500 hover:bg-amber-400
              text-black font-semibold
              px-8 py-4 rounded
              text-sm md:text-base tracking-widest uppercase
              transition-all duration-300
              animate-[pulseGold_2s_ease-in-out_infinite]
              shadow-[0_4px_24px_rgba(212,175,55,0.35)]
              hover:shadow-[0_6px_32px_rgba(212,175,55,0.55)]
              hover:scale-105
            "
          >
            Analisar Meu Processo Agora
            <span className="absolute inset-0 rounded overflow-hidden">
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </span>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-neutral-500 tracking-wide">
          {['Análise Gratuita', 'Atendimento Sigiloso', 'Resposta em até 2h'].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-amber-500" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToRights}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 hover:text-amber-500 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}

const rights = [
  {
    icon: Shield,
    title: 'Defender seu Patrimônio',
    text: 'Quanto antes o processo for analisado, maiores são as chances de proteger seus bens e organizar a situação antes que medidas mais severas sejam tomadas.',
  },
  {
    icon: Scale,
    title: 'Reduzir a Dívida',
    text: 'Existem medidas legais cabíveis para se defender de cobranças com cláusulas irregulares e reduzir substancialmente o valor real que está sendo cobrado.',
  },
  {
    icon: Search,
    title: 'Análise Especializada',
    text: 'Avaliamos cada detalhe do processo de execução para encontrar brechas técnicas e irregularidades que jogam a seu favor e que passam despercebidas.',
  },
]

function RightsSection() {
  return (
    <section id="seus-direitos" className="bg-neutral-900 py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Conheça seus direitos
          </p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white">
            O que podemos fazer por você
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {rights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="
                card-hover
                bg-neutral-800/60 border border-neutral-700/50
                hover:border-amber-500/40
                rounded-lg p-6 md:p-8
                flex flex-col gap-4
              "
            >
              <div className="w-12 h-12 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Icon size={22} className="text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              border border-amber-500 text-amber-400
              hover:bg-amber-500 hover:text-black
              font-medium px-8 py-3.5 rounded
              text-sm tracking-wider uppercase
              transition-all duration-300
            "
          >
            Quero Analisar Meu Caso
          </a>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="bg-neutral-950 py-16 md:py-24 px-4 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          {/* Photo placeholder — troque pelo src real da imagem das sócias */}
          <div className="w-full md:w-5/12 flex-shrink-0">
            <div className="relative rounded-lg overflow-hidden border border-neutral-700 shadow-[0_0_60px_rgba(212,175,55,0.08)]">
              {/* Substitua a div abaixo por <img src="..." alt="Paccola & Pelegrini" className="w-full object-cover" /> */}
              <div className="aspect-[4/3] bg-neutral-800 flex flex-col items-center justify-center gap-3 text-neutral-600">
                <Scale size={40} className="text-neutral-700" />
                <span className="text-xs text-center px-8">
                  Coloque aqui a foto das sócias<br />(substitua este bloco por uma tag &lt;img&gt;)
                </span>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/60 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/60 rounded-br-lg" />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-7/12">
            <p className="text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Sobre o escritório
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
              Paccola & Pelegrini<br />
              <span className="text-xl text-neutral-400 font-normal">Advogados Associados</span>
            </h2>
            <div className="w-12 h-0.5 bg-amber-500 mb-6" />
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
              Atuamos de forma estratégica e especializada na defesa contra execuções
              bancárias. Nosso foco é proteger o patrimônio dos nossos clientes com
              agilidade, seriedade e o rigor técnico que o seu caso exige.
            </p>
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base mt-4">
              Cada processo é tratado com atenção individualizada, porque sabemos que
              por trás de cada dívida existe uma família, um negócio e um futuro que
              merece ser protegido.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                ['Direito Bancário', 'Especialidade'],
                ['Execuções Fiscais', 'Atuação'],
                ['Defesa Patrimonial', 'Foco'],
              ].map(([label, tag]) => (
                <div key={label} className="flex flex-col">
                  <span className="text-xs text-amber-500/70 uppercase tracking-widest">{tag}</span>
                  <span className="text-sm text-neutral-200 font-medium mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-serif text-base text-neutral-300 mb-1">
          Paccola <span className="text-amber-500">&</span> Pelegrini Advogados Associados
        </p>
        <p className="text-xs text-neutral-600 mt-3 leading-relaxed max-w-xl mx-auto">
          © 2026. Todos os direitos reservados. Atendimento especializado em Direito Bancário.
          Este site tem finalidade meramente informativa e não constitui consultoria jurídica.
          A contratação de serviços advocatícios está sujeita à análise prévia do caso.
        </p>
        <p className="text-xs text-neutral-700 mt-4">
          OAB/PR — Paccola & Pelegrini Advogados Associados
        </p>
      </div>
    </footer>
  )
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="
        fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50
        w-14 h-14 md:w-16 md:h-16
        bg-[#25D366] hover:bg-[#20BC5A]
        rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)]
        hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)]
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110
        animate-[float_3s_ease-in-out_infinite]
      "
    >
      <MessageCircle size={28} className="text-white fill-white" />
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <RightsSection />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
