import { useState } from 'react'
import { MonitorCheck, MousePointerClick, Server, Workflow } from 'lucide-react'

const localIcons = {
  workflow: Workflow,
  monitor: MonitorCheck,
  pointer: MousePointerClick,
  server: Server,
}

export default function TechIcon({ item, compact = false }) {
  const [failed, setFailed] = useState(false)
  const Local = item.icon ? localIcons[item.icon] : null
  const box = compact ? 'h-8 w-8 rounded-xl' : 'h-11 w-11 rounded-2xl'
  const glyph = compact ? 15 : 18

  return (
    <span className={`grid shrink-0 place-items-center bg-[#0B0F19] text-white shadow-inner ${box}`}>
      {Local ? (
        <Local size={glyph} aria-hidden="true" />
      ) : !failed && item.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${item.slug}/${item.color || 'F8FAFC'}`}
          alt=""
          width={compact ? 16 : 22}
          height={compact ? 16 : 22}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-xs font-semibold tracking-wide">{item.name.slice(0, 2).toUpperCase()}</span>
      )}
    </span>
  )
}
