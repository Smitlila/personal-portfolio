import { useEffect, useRef, useState } from 'react'
import { skillCards } from '../data/skills'

const SkillsSection = () => {
  const skillCardRefs = useRef<Array<HTMLDivElement | null>>([])
  const [skillVisible, setSkillVisible] = useState<boolean[]>([])

  useEffect(() => {
    if (!skillCardRefs.current.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = (entry.target as HTMLElement).dataset.idx
          const idx = idxAttr ? Number(idxAttr) : NaN
          if (Number.isNaN(idx)) return
          if (entry.isIntersecting) {
            setSkillVisible((prev) => {
              const next = prev.length ? [...prev] : Array(skillCardRefs.current.length).fill(false)
              next[idx] = true
              return next
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    skillCardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="scroll-mt-24 py-12 px-4 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Technical Skills</h2>
      <p className="text-sm text-gray-400 mb-4">Based on what I use every day </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCards.map((card, idx) => {
          const visible = skillVisible[idx]
          const delay = `${Math.min(120, 80 + idx * 20)}ms`
          return (
            <div
              key={card.title}
              ref={(el) => {
                skillCardRefs.current[idx] = el
              }}
              data-idx={idx}
              className={`rounded-xl p-6 border border-neutral-800 bg-neutral-900 text-white shadow-md transition hover:shadow-xl hover:-translate-y-1 hover:border-red-600 hover:bg-neutral-800/90 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: delay, transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <h3 className="font-bold text-lg mb-4 text-white">{card.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {card.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/80 px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:border-red-500 hover:bg-neutral-800"
                  >
                    {item.img ? (
                      <img src={`/skills/${item.img}`} alt={item.name} className="h-7 w-7 object-contain" />
                    ) : item.icon ? (
                      <span className="text-xl" aria-hidden="true">
                        {item.icon}
                      </span>
                    ) : (
                      <span className="text-xl" aria-hidden="true">
                        •
                      </span>
                    )}
                    <span className="text-sm font-semibold text-white">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection

