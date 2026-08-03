export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-red-950 px-6 text-center text-white">
      <h1 className="text-5xl font-extrabold md:text-7xl">
        REVIVAL FIRE 2026
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-300">
        But his word was in mine heart as a burning fire shut up in my bones.
      </p>

      <p className="mt-2 text-red-500 font-semibold">
        Jeremiah 20:9
      </p>

      <button className="mt-10 rounded-xl bg-red-600 px-8 py-4 text-lg font-bold hover:bg-red-700 transition">
        Register Now
      </button>
    </section>
  );
}