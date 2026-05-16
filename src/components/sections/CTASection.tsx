"use client";

export function CTASection() {
  return (
    <section className="section-gap section-pad bg-[var(--cream)]">
      <div className="mx-auto max-w-xl text-center">
        <p className="label-tech">Acesso exclusivo</p>
        <h2 className="mt-6 font-serif-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-[var(--ink)]">
          Para o paciente que não abre mão do resultado
        </h2>
        <p className="mt-5 text-sm text-[var(--stone)]">
          Sem urgência. Convite a iniciar o protocolo com acompanhamento clínico.
        </p>

        <form
          className="mx-auto mt-12 flex max-w-md flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="seu@email.com"
            className="h-12 border-hairline bg-[var(--white)] px-5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--stone)] focus:border-[var(--gold)]"
          />
          <button type="submit" className="btn-gold py-4">
            Iniciar protocolo
          </button>
        </form>

        <p className="mt-12 text-[10px] tracking-[0.32em] text-[var(--stone)] uppercase">
          Casa Ritual · São Paulo
        </p>
      </div>
    </section>
  );
}
