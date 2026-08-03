export default function Countdown() {
  return (
    <section className="bg-red-700 py-16 text-center text-white">
      <h2 className="text-4xl font-bold">Revival Fire Begins In</h2>

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 max-w-4xl mx-auto">
        <div className="rounded-xl bg-black/20 p-6">
          <h3 className="text-5xl font-bold">00</h3>
          <p className="mt-2 uppercase">Days</p>
        </div>

        <div className="rounded-xl bg-black/20 p-6">
          <h3 className="text-5xl font-bold">00</h3>
          <p className="mt-2 uppercase">Hours</p>
        </div>

        <div className="rounded-xl bg-black/20 p-6">
          <h3 className="text-5xl font-bold">00</h3>
          <p className="mt-2 uppercase">Minutes</p>
        </div>

        <div className="rounded-xl bg-black/20 p-6">
          <h3 className="text-5xl font-bold">00</h3>
          <p className="mt-2 uppercase">Seconds</p>
        </div>
      </div>
    </section>
  );
}