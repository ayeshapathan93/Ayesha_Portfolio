export default function PlaceholderPreview({ project, compact = false }) {
  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#101624] text-white ${
        compact ? 'min-h-0 p-4' : 'min-h-[280px] p-6 sm:p-8'
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.45), transparent 42%), radial-gradient(circle at 80% 70%, rgba(34,197,94,0.28), transparent 36%)',
        }}
      />
      <div className="relative flex items-center justify-between gap-4">
        <p className="rounded-full border border-amber-200/30 bg-amber-200/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-amber-100 uppercase">
          Screenshot not added
        </p>
        <span className="display text-3xl text-white/80">{project.number}</span>
      </div>
      <div className="relative">
        <p className="text-sm text-white/60">{project.category}</p>
        <p className={`display mt-2 ${compact ? 'text-4xl' : 'text-5xl'}`}>{project.name}</p>
        <p className={`mt-3 max-w-md leading-relaxed text-white/75 ${compact ? 'line-clamp-3 text-xs' : 'text-sm'}`}>
          {compact
            ? `Screenshot not added yet. Place the image at ${project.image}.`
            : `This is a placeholder, not a product screenshot. Add the real landing-page image at ${project.image} and set hasImage to true in src/data/projects.js.`}
        </p>
      </div>
    </div>
  )
}
