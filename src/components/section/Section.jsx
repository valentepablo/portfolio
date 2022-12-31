export const Section = ({ children }) => {
  return (
    <section className="flex min-h-screen items-center justify-center py-8">
      {children}
    </section>
  );
};

export const SectionLight = ({ children }) => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-100 bg-gradient-to-br from-zinc-50 to-zinc-300 py-8 text-zinc-900">
      {children}
    </section>
  );
};

export const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-center text-2xl font-semibold md:text-5xl">{title}</h2>
  );
};
