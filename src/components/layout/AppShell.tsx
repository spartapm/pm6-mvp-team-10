import BottomNav from "./BottomNav";

type AppShellProps = {
  children: React.ReactNode;
  showNav?: boolean;
};

export default function AppShell({ children, showNav = true }: AppShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="flex-1">{children}</div>
      {showNav ? <BottomNav /> : null}
    </div>
  );
}
