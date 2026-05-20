import { ChevronDown, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5514998377172'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Recebi uma citação de execução e preciso de orientação especializada.'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <img
          src="/logo.webp"
          alt="Paccola & Pelegrini Advogados Associados"
          className="h-9 md:h-11 w-auto object-contain"
        />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium px-4 py-2 border border-amber-500/70 text-amber-400 rounded-sm hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 tracking-widest uppercase whitespace-nowrap"
        >
          Falar com Especialista
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen bg-neutral-950 flex flex-col justify-center pt-16 px-5 overflow-hidden">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      {/* Radial gold glow, very subtle */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-3xl mx-auto text-center py-16 md:py-24">
        {/* Urgency tag */}
        <div className="inline-flex items-center gap-2.5 border border-red-900/60 bg-red-950/30 text-red-400 text-[11px] font-medium px-4 py-1.5 rounded-full mb-10 tracking-[0.15em] uppercase">
          <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
          Ação Urgente Necessária
        </div>

        <h1 className="font-serif text-[2rem] md:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] tracking-tight mb-7">
          <span className="text-white">Você recebeu uma </span>
          <em className="not-italic text-amber-400">citação de execução</em>
          <span className="text-white"> do oficial de justiça?</span>
        </h1>

        {/* Thin gold rule */}
        <div className="flex items-center gap-4 justify-center mb-7">
          <div className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-transparent to-amber-500/60" />
          <div className="w-1 h-1 bg-amber-500 rounded-full" />
          <div className="flex-1 max-w-[80px] h-px bg-gradient-to-l from-transparent to-amber-500/60" />
        </div>

        <p className="text-[0.95rem] md:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto font-light">
          Se um oficial de justiça foi até você informar que existe um processo de
          execução por dívida bancária, é importante{' '}
          <strong className="text-neutral-200 font-medium">agir rápido</strong>.
          Muitas dessas cobranças envolvem{' '}
          <strong className="text-amber-400 font-normal">juros abusivos</strong> e
          valores inflados que podem ser contestados.
        </p>

        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-amber-500 text-black font-semibold
              px-10 py-4 rounded-sm
              text-[0.8rem] tracking-[0.18em] uppercase
              transition-all duration-300
              shadow-[0_0_32px_rgba(212,175,55,0.3)]
              hover:bg-amber-400 hover:shadow-[0_0_48px_rgba(212,175,55,0.5)] hover:scale-[1.03]
              relative overflow-hidden group
            "
          >
            <span className="relative z-10">Analisar Meu Processo Agora</span>
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2 text-[0.72rem] text-neutral-600 tracking-widest uppercase">
          {['Análise Gratuita', 'Sigilo Total', 'Resposta em até 2h'].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-px h-2.5 bg-amber-500/40" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => document.getElementById('defesa')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-neutral-700 hover:text-amber-500 transition-colors animate-bounce"
        aria-label="Ver mais"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}

const points = [
  {
    num: '01',
    title: 'Defender seu Patrimônio',
    text: 'Quanto antes o processo for analisado, maiores são as chances de proteger seus bens. O tempo é o principal fator quando há risco de penhora ou bloqueio de ativos.',
  },
  {
    num: '02',
    title: 'Reduzir o Valor Cobrado',
    text: 'Contratos bancários frequentemente acumulam encargos irregulares. Existem medidas legais para contestar cláusulas abusivas e reduzir substancialmente a dívida cobrada.',
  },
  {
    num: '03',
    title: 'Análise Técnica Especializada',
    text: 'Avaliamos cada detalhe do processo: irregularidades processuais, prescrição, excesso de execução. Brechas que só um olhar especializado encontra.',
  },
]

function DefenseSection() {
  return (
    <section id="defesa" className="bg-neutral-950 border-t border-neutral-800/50 py-16 md:py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-amber-500 text-[0.65rem] font-semibold tracking-[0.25em] uppercase mb-3">
            O que podemos fazer por você
          </p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white max-w-lg leading-snug">
            Sua defesa começa com a análise certa
          </h2>
        </div>

        <div className="space-y-0">
          {points.map(({ num, title, text }, i) => (
            <div
              key={num}
              className="group grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr_auto] gap-x-6 md:gap-x-10 items-start py-8 border-t border-neutral-800/60 hover:border-amber-500/20 transition-colors duration-500"
            >
              {/* Number */}
              <span className="font-serif text-2xl md:text-3xl text-amber-500/30 group-hover:text-amber-500/60 transition-colors duration-500 pt-0.5 select-none">
                {num}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-amber-50 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-xl group-hover:text-neutral-400 transition-colors duration-300">
                  {text}
                </p>
              </div>

              {/* Arrow indicator desktop */}
              <span className="hidden md:block text-amber-500/0 group-hover:text-amber-500/50 transition-all duration-500 pt-1 text-lg self-start">
                →
              </span>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-neutral-800/60" />
        </div>

        <div className="mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-amber-500/60 text-amber-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 font-medium px-8 py-3.5 rounded-sm text-[0.75rem] tracking-[0.18em] uppercase transition-all duration-300"
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
    <section className="bg-neutral-900/40 border-t border-neutral-800/50 py-16 md:py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

          {/* Photo */}
          <div className="w-full md:w-[42%] flex-shrink-0">
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="/socias.webp"
                alt="Paccola & Pelegrini — Advogadas Sócias"
                className="w-full object-cover"
                loading="lazy"
              />
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/50" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/50" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/50" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/50" />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-[58%]">
            <p className="text-amber-500 text-[0.65rem] font-semibold tracking-[0.25em] uppercase mb-5">
              Sobre o escritório
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-snug mb-5">
              Estratégia e rigor técnico em cada defesa
            </h2>

            <div className="w-10 h-px bg-amber-500 mb-6" />

            <p className="text-neutral-400 leading-relaxed text-sm md:text-[0.95rem]">
              Atuamos de forma estratégica e especializada na defesa contra execuções
              bancárias. Nosso foco é proteger o patrimônio dos nossos clientes com
              agilidade, seriedade e o rigor técnico que o seu caso exige.
            </p>
            <p className="text-neutral-400 leading-relaxed text-sm md:text-[0.95rem] mt-4">
              Cada processo é tratado com atenção individualizada — porque sabemos
              que por trás de cada dívida existe uma família, um negócio e um
              futuro que merece ser defendido.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-neutral-800/50 pt-8">
              {[
                ['Direito Bancário', 'Especialidade'],
                ['Execuções Fiscais', 'Atuação'],
                ['Defesa Patrimonial', 'Foco'],
              ].map(([label, tag]) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-[0.6rem] text-amber-500/60 uppercase tracking-[0.2em]">{tag}</span>
                  <span className="text-sm text-neutral-200 font-medium">{label}</span>
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
    <footer className="bg-neutral-950 border-t border-neutral-800/50 py-10 px-5">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
        <img
          src="/logo.webp"
          alt="Paccola & Pelegrini"
          className="h-8 w-auto object-contain opacity-60"
        />
        <p className="text-[0.72rem] text-neutral-600 leading-relaxed max-w-lg">
          © 2026 Paccola & Pelegrini Advogados Associados. Todos os direitos reservados.
          Atendimento especializado em Direito Bancário. Este site tem finalidade
          informativa e não constitui consultoria jurídica. A contratação de serviços
          advocatícios está sujeita à análise prévia do caso.
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
        fixed bottom-5 right-4 md:bottom-8 md:right-8 z-50
        w-14 h-14
        bg-[#25D366] hover:bg-[#20BC5A]
        rounded-full
        shadow-[0_4px_20px_rgba(37,211,102,0.4)]
        hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)]
        flex items-center justify-center
        transition-all duration-300 hover:scale-110
      "
    >
      <MessageCircle size={26} className="text-white fill-white" />
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <DefenseSection />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
