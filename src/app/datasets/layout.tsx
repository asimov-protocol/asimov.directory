import { BreadcrumbProvider } from "@/context/BreadcrumbContext";

type Props = {
  children: Readonly<React.ReactNode>;
};

export default function Layout({ children }: Props) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-linear-170 from-oOrange-500/45 to-transparent to-50% -z-1 w-full h-80 pointer-events-none" />
      <BreadcrumbProvider>
        <div className="container-default">
          {children}
        </div>
      </BreadcrumbProvider>
    </section>
  )
}
