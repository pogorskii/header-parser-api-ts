import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <div className="flex bg-white rounded-[24px] p-5 justify-between">
        <div className="flex flex-col justify-center p-10">
          <h1 className="font-bold text-4xl mb-4">Stay updated!</h1>
          <p className="mb-4">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="ms-6 mb-8 list-image-check leading-normal">
            <li>
              <span className="inline-block align-top leading-none">
                Product discovery and building what matters
              </span>
            </li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <form className="flex flex-col">
            <label htmlFor="email" className="text-sm font-bold mb-2">
              Email address
            </label>
            <input
              className="mb-5  block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              type="email"
              name="email"
              placeholder="email@company.com"
            />
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </form>
        </div>
        <div>
          <Image
            src="/illustration-sign-up-desktop.svg"
            width={400}
            height={593}
            alt="Sign up for out newsletter"
            priority
          />
        </div>
      </div>
    </main>
  );
}
