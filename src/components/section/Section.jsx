export const Section = ({ children }) => {
  return <section className="h-screen py-8">{children}</section>;
};

export const SectionTitle = ({ title }) => {
  return <h2 className="text-center text-3xl font-extrabold">{title}</h2>;
};
