export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-[1600px] text-zinc-50">
      {children}
    </section>
  );
}
