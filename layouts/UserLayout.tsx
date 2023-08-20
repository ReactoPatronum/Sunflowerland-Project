interface LayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: LayoutProps) {
  return (
    <>
      <main className="p-3">{children}</main>
    </>
  );
}
