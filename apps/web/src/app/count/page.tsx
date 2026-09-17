export default function CountPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-warm-900 sm:text-2xl">
          Count Flow
        </h1>
        <p className="mt-1 text-sm text-warm-600">
          Vista placeholder — la búsqueda de bin y el envío de conteo llegan
          en una fase posterior.
        </p>
      </div>

      <label className="flex flex-col gap-1.5 text-sm text-warm-700">
        Buscar bin por código
        <input
          type="text"
          disabled
          placeholder="Ej. A2-R2-B04"
          className="rounded-md border border-warm-200 bg-warm-50 px-3 py-2 text-warm-900 placeholder:text-warm-400 disabled:opacity-60"
        />
      </label>

      <div className="rounded-lg border border-dashed border-warm-300 p-6 text-center text-sm text-warm-500">
        Ningún bin seleccionado todavía.
      </div>
    </div>
  );
}
