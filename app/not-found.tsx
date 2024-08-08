import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-4">Oops! Cette page n&#39;existe pas.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Revenir à l&#39;accueil
      </Link>
    </div>
  );
}
