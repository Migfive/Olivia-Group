// Datos centrales de la marca y contacto: se mantienen aquí para reutilizar la
// misma información en múltiples lugares del sitio, evitando duplicación y
// reduciendo riesgo de inconsistencias durante el mantenimiento del proyecto.
export const contactInfo = {
  emailPrimary: 'info@oliviasgroup.com',
  emailSecondary: 'consultoria.d.oliviasgroup@gmail.com',
  phone: '3204553927',
  website: 'https://www.oliviasgroup.com',
  phoneHref: 'tel:+573204553927',
}

// Pilares corporativos de la marca. Esta estructura define el posicionamiento de la
// empresa en temas de sostenibilidad, cumplimiento, innovación y responsabilidad.
export const pillars = [
  { name: 'Sostenibilidad', icon: '🌱' },
  { name: 'Cumplimiento Normativo', icon: '✅' },
  { name: 'Excelencia Técnica', icon: '⚙️' },
  { name: 'Compromiso', icon: '🤝' },
  { name: 'Innovación', icon: '💡' },
  { name: 'Responsabilidad', icon: '🛡️' },
  { name: 'Mejora Continua', icon: '📈' },
]

// Catálogo principal del sitio. Se almacena como fuente de verdad para renderizar
// las tarjetas de productos y también para generar los enlaces de compra por WhatsApp.
export const catalogProducts = [
  {
    name: 'Detergente Multiuso Eco',
    category: 'Limpieza General',
    description:
      'Fórmula biodegradable para superficies y espacios de uso diario con acción desengrasante efectiva.',
  },
  {
    name: 'Desinfectante Natural',
    category: 'Higiene',
    description:
      'Ideal para ambientes domésticos y comerciales, elimina bacterias sin daño para superficies sensibles.',
  },
  {
    name: 'Lavaloza Ecológico',
    category: 'Cocina',
    description:
      'Solución suave y poderosa para platos y utensilios, con aroma limpio y bajo impacto ambiental.',
  },
  {
    name: 'Limpiador de Vidrios Verde',
    category: 'Cristales',
    description:
      'Deja brillo profesional en ventanas, espejos y accesorios sin residuos ni olor fuerte.',
  },
  {
    name: 'Jabón Industrial Bio',
    category: 'Industrial',
    description:
      'Preparado para tareas de alto rendimiento con enfoque en reducción de residuos químicos.',
  },
  {
    name: 'Abrillantador Natural',
    category: 'Superficies',
    description:
      'Aporta brillo, limpieza y protección para muebles, pisos y acabados de madera.',
  },
]

// Genera enlaces orientados a venta o consulta para cada producto. La función
// codifica el mensaje para que WhatsApp reciba textos seguros y legibles.
export const formatWhatsAppLink = (productName: string) => {
  const baseUrl = 'https://wa.me/573204553927?text='
  const message = `Hola, me interesa comprar el producto ${productName}. Quisiera más información.`
  return `${baseUrl}${encodeURIComponent(message)}`
}

// Navegación por anclas del landing page. Este arreglo centraliza los links para
// mantener coherencia entre versión desktop y mobile.
const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' },
]

function App() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1B4332]">
      {/* Encabezado institucional y navegación del sitio. Mantiene el branding y
      facilita la exploración de las secciones clave del contenido. */}
      <header className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between rounded-full border border-[#1B4332]/10 bg-[#F4F1EA]/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1B4332]/15 bg-white text-lg font-bold text-[#1B4332] shadow-sm">
              OG
            </div>
            <div>
              <p className="text-base font-semibold tracking-wide text-[#1B4332]">
                Olivia&apos;s Group
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#1B4332]/80 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#1B4332]">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="hidden rounded-full border border-[#1B4332]/30 bg-white px-4 py-2 text-sm font-semibold text-[#1B4332] transition hover:bg-[#1B4332] hover:text-white md:inline-flex"
          >
            Contáctanos
          </a>

          <details className="group relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-[#1B4332]/20 bg-white">
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-[#1B4332]" />
                <span className="block h-0.5 w-5 rounded-full bg-[#1B4332]" />
                <span className="block h-0.5 w-5 rounded-full bg-[#1B4332]" />
              </span>
            </summary>

            <div className="absolute right-0 top-14 z-20 w-56 overflow-hidden rounded-2xl border border-[#1B4332]/10 bg-[#F4F1EA] p-3 shadow-[0_20px_50px_rgba(27,67,50,0.15)]">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-[#1B4332] transition hover:bg-white hover:text-[#1B4332]"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  className="mt-1 rounded-xl bg-[#1B4332] px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </details>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
        {/* Hero principal: presenta el propósito de la empresa y guía la primera acción
        del visitante hacia servicios o contacto. */}
        <section id="inicio" className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-[#1B4332]/10 bg-[#F4F1EA] px-6 py-10 shadow-[0_20px_60px_rgba(27,67,50,0.08)] md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-16">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-[#1B4332]/10 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1B4332]/70">
              Soluciones sostenibles
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#1B4332] sm:text-5xl lg:text-6xl">
              Transformamos el conocimiento técnico en soluciones integrales para el
              desarrollo sostenible
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#1B4332]/70 sm:text-lg">
              Acompañamos organizaciones y proyectos con estrategia, innovación y
              acompañamiento para crear impacto real y crecimiento sostenible.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#1B4332] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1B4332]/20 transition hover:bg-[#173c2d]"
              >
                Servicios de Consultoría
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-[#1B4332]/40 bg-transparent px-6 py-3.5 text-sm font-semibold text-[#1B4332] transition hover:bg-white/50"
              >
                Ver Catálogo de Productos
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative flex h-[320px] w-full max-w-[420px] items-center justify-center rounded-[2rem] border border-[#1B4332]/10 bg-white p-8 shadow-[0_25px_60px_rgba(27,67,50,0.10)]">
              <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-[#D9E2D8] blur-xl" />
              <div className="absolute bottom-10 right-8 h-24 w-24 rounded-full bg-[#EADCC5] blur-2xl" />

              <div className="relative flex h-56 w-56 items-center justify-center rounded-[2rem] border border-[#1B4332]/10 bg-[#F4F1EA] shadow-inner">
                <div className="flex h-40 w-40 flex-col items-center justify-center rounded-[1.5rem] border border-[#1B4332]/10 bg-white text-center shadow-md">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B4332] text-2xl font-bold text-white">
                    O
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1B4332]/70">
                    Olivia&apos;s
                  </span>
                  <span className="mt-1 text-lg font-black text-[#1B4332]">
                    Group
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de empresa: comunica la misión, visión y los principios que sustentan
        la identidad de la marca. Esto ayuda a fortalecer la confianza y a diferenciar
        la propuesta de valor frente a otros actores del mercado. */}
        <section id="empresa" className="mt-20">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#40916C]">
              Quiénes Somos
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1B4332] sm:text-4xl">
              Construimos valor con propósito y sostenibilidad
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-[#40916C]/40 bg-white p-6 shadow-[0_18px_40px_rgba(64,145,108,0.08)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF6F0] text-2xl shadow-sm">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-[#1B4332]">Misión</h3>
              <p className="mt-3 text-base leading-7 text-[#1B4332]/70">
                Impulsar soluciones técnicas, estratégicas y sostenibles que ayuden a
                organizaciones a crecer con impacto positivo, eficiencia y responsabilidad.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-[#40916C]/40 bg-white p-6 shadow-[0_18px_40px_rgba(64,145,108,0.08)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF6F0] text-2xl shadow-sm">
                👁️
              </div>
              <h3 className="text-2xl font-bold text-[#1B4332]">Visión</h3>
              <p className="mt-3 text-base leading-7 text-[#1B4332]/70">
                Ser un referente en el desarrollo sostenible y la innovación aplicada,
                creando alianzas que transformen desafíos complejos en oportunidades de valor.
              </p>
            </article>
          </div>

          <div className="mt-10">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-black text-[#1B4332] sm:text-3xl">
                Nuestros pilares
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.name}
                  className="rounded-[1.5rem] border border-[#40916C]/40 bg-white p-5 shadow-[0_12px_32px_rgba(64,145,108,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(64,145,108,0.1)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF6F0] text-2xl">
                    {pillar.icon}
                  </div>
                  <p className="text-base font-semibold text-[#1B4332]">{pillar.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de servicios: organiza la oferta de consultoría ambiental en bloques
        claros para que el visitante entienda el alcance del acompañamiento que ofrece la firma. */}
        <section id="servicios" className="mt-20 scroll-mt-24">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#40916C]">
              Servicios de Consultoría Ambiental
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1B4332] sm:text-4xl">
              Soluciones integrales para el entorno y la sostenibilidad
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[1.75rem] border border-[#40916C]/40 bg-white p-6 shadow-[0_18px_40px_rgba(64,145,108,0.08)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF6F0] text-3xl shadow-sm">
                📋
              </div>
              <h3 className="text-2xl font-bold text-[#1B4332]">
                Planificación y Cumplimiento Normativo
              </h3>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[#1B4332]/75">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#40916C]" />
                  Estudios Ambientales
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#40916C]" />
                  Licenciamiento
                </li>
              </ul>
            </article>

            <article className="rounded-[1.75rem] border border-[#40916C]/40 bg-white p-6 shadow-[0_18px_40px_rgba(64,145,108,0.08)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF6F0] text-3xl shadow-sm">
                🌍
              </div>
              <h3 className="text-2xl font-bold text-[#1B4332]">
                Intervención en el Territorio
              </h3>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[#1B4332]/75">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#40916C]" />
                  Riesgo Ambiental
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#40916C]" />
                  Servicios Forestales Ley 2173
                </li>
              </ul>
            </article>

            <article className="rounded-[1.75rem] border border-[#40916C]/40 bg-white p-6 shadow-[0_18px_40px_rgba(64,145,108,0.08)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF6F0] text-3xl shadow-sm">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-[#1B4332]">
                Estrategia y Futuro
              </h3>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[#1B4332]/75">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#40916C]" />
                  SIG
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#40916C]" />
                  Cambio Climático
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#40916C]" />
                  Gestión Empresarial
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Sección de productos: actúa como catálogo comercial para marcas eco-friendly,
        con un CTA directo a WhatsApp que convierte la exploración en una conversación comercial. */}
        <section id="productos" className="mt-20 scroll-mt-24">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#40916C]">
              Catálogo de productos
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1B4332] sm:text-4xl">
              Productos de limpieza y cuidado ecológico
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {catalogProducts.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-[1.75rem] border border-[#40916C]/40 bg-white shadow-[0_18px_40px_rgba(64,145,108,0.08)]"
              >
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[#EAF6F0] via-[#F7FBF8] to-[#EEF1EC]">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-[#40916C]/30 bg-white text-5xl shadow-sm">
                    🧴
                  </div>
                </div>

                <div className="p-5">
                  <span className="inline-flex rounded-full border border-[#40916C]/40 bg-[#EAF6F0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#1B4332]">
                    {product.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-[#1B4332]">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#1B4332]/70">
                    {product.description}
                  </p>

                  <a
                    href={formatWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1fbf5a]"
                  >
                    Pedir por WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer institucional: cierra el recorrido del usuario con identidad visual,
      mensaje de marca y acceso a canales de contacto. */}
      <footer id="contacto" className="mt-20 scroll-mt-24 bg-[#1B4332] text-[#F4F1EA]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-bold text-[#1B4332]">
                  OG
                </div>
                <h3 className="text-lg font-bold">Olivia&apos;s Group</h3>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#F4F1EA]/80">
                Soluciones integrales para un desarrollo sostenible, responsable y con impacto real.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F4F1EA]/70">
                Contacto
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-[#F4F1EA]/90">
                <li>
                  <a href="mailto:info@oliviasgroup.com" className="transition hover:text-white">
                    info@oliviasgroup.com
                  </a>
                </li>
                <li>
                  <a href="mailto:consultoria.d.oliviasgroup@gmail.com" className="transition hover:text-white">
                    consultoria.d.oliviasgroup@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+573204553927" className="transition hover:text-white">
                    3204553927
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.oliviasgroup.com"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    www.oliviasgroup.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F4F1EA]/70">
                Inspiración
              </h4>
              <p className="mt-4 text-sm leading-7 italic text-[#F4F1EA]/90">
                “La naturaleza no es un lujo; es la base de toda vida y el futuro de nuestro planeta.”
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-[#F4F1EA]/70">
            © 2026 Olivia&apos;s Group. Cuidando el entorno, impulsando el futuro.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
