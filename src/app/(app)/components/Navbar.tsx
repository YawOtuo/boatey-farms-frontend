import Link from "next/link";

function Navbar() {
  const urls = [
    { name: "Home", url: "" },
    { name: "Pricing", url: "" },
    { name: "Login", url: "" },
    { name: "Sign Up", url: "" },
  ];
  return (
    <div className="flex items-center justify-between px-10 py-3">
      <p className="font-bold text-lg">
        livestock<span className="text-green1">Diary</span>
      </p>

      <div className="hidden lg:flex items-center gap-5">
        {urls?.map((r, index) => (
          <Link href={r?.url} key={index} className="text-lg">{r?.name}</Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
