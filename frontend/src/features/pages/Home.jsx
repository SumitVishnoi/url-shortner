import ShortUrlForm from "../components/ShortUrlForm";

const Home = () => {
  return (
    <main className="min-h-[calc(100vh-81px)] bg-slate-50">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
        <div className="mb-5 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
          Simple. Fast. Trackable.
        </div>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Turn long URLs into
          <span className="text-indigo-600"> short links.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
          Create clean, shareable short URLs and keep track of how many times
          they are visited.
        </p>

        <div className="mt-10 w-full flex justify-center">
          <ShortUrlForm />
        </div>

        <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
          <Feature
            number="01"
            title="Paste"
            description="Enter any valid long URL."
          />

          <Feature
            number="02"
            title="Shorten"
            description="Get a clean short URL instantly."
          />

          <Feature
            number="03"
            title="Track"
            description="Monitor clicks through analytics."
          />
        </div>
      </section>
    </main>
  );
};

const Feature = ({ number, title, description }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
      <span className="text-sm font-bold text-indigo-600">{number}</span>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
};

export default Home;