import Image from "next/image";

import tsIcon from '../public/ts-icon.png'
import chromeIcon from '../public/chrome-icon.png';
import braveIcon from '../public/brave-icon.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-gray-800">
      <div className="flex items-center mb-8">
        <Image
          src={tsIcon}
          alt=".truespace Icon"
          width={50}
          height={50}
          className="mr-2"
        />
        <h1 className="text-4xl font-bold">truespace</h1>
      </div>
      <div className="text-center font-light max-w-[80ch]">
        <h5 className="mt-12 text-lg">
          Welcome to a unique platform designed to give you a personal, private space on the internet — completely free from outside influence, corporate agendas, social media noise, and ads. Here, your content and interests take center stage.
        </h5>
        <h5 className="mt-8 text-lg">
          Above all, <b>.truespace</b> is secure and private. Your data is yours alone, with full control to manage and delete it at any time.
        </h5>
      </div>
      <div className="group mt-16 rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <a
          href="https://chromewebstore.google.com/detail/truespace/bflicohjlcnnopbpbofikndjgphdacmb?authuser=0&hl=en-GB"
          target="_blank"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Let's go{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Download the browser extension.
          </p>
          <div className="flex items-center mt-4">
            <Image
              src={chromeIcon}
              alt="Chrome Icon"
              height={24}
              className="mr-2"
            />
            <Image
              src={braveIcon}
              alt="Brave Icon"
              height={24}
            />
          </div>
        </a>
      </div>
    </main>
  );
}