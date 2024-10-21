// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">.truespace</h1>
      <h3 className="text-1xl pt-2">
        Get exclusive access to the alpha version.
      </h3>
      <a
        href="https://chromewebstore.google.com/detail/truespace/bflicohjlcnnopbpbofikndjgphdacmb?authuser=0&hl=en-GB"
        className="group mt-24 rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Let&apos;s go{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Download the extension and start minding your .truespace.
        </p>
      </a>
    </main>
  );
}
