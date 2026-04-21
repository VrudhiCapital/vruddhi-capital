import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-display text-8xl md:text-9xl font-light text-brand-orange/20 mb-4">
          404
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-light text-brand-off-white mb-4">
          Page Not Found
        </h1>
        <p className="body-text max-w-md mx-auto mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home →
        </Link>
      </div>
    </section>
  );
}
