// Komponen ui Admin View
import Sidebar from "../components/ui/Sidebar";
import Header from "../components/ui/Header";

export default function Layout({ title, note, children }) {
  return (
    <div className="flex">
      <Sidebar role="admin" />
      <div className="ml-[20rem] w-full min-h-screen">
        <Header title={title} note={note} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
