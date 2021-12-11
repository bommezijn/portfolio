export default function Home() {
  const test = ["nathan bommezijn", "projects", "info"];
  return (
    <main className='w-screen h-screen bg-gray-50 px-8 pt-6'>
      <nav className='w-full'>
        <ul className='flex flex-row justify-between py-2'>
          {test.map((e, i) => {
            return (
              <li
                key={i}
                className='first:text-[#FFCC00] first:font-bold first:text-2xl hover:first:text-red-400 text-l capitalize text-gray-400 transition delay-150 ease-in hover:text-black'>
                {e}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className='border-dashed border-2 border-red-900'>
        {/* <section className='flex flex-row justify-center items-center'> */}
        <div className='l-0 m-auto max-w-7xl bg-yellow-400'>
          {/* <h1>Introduction</h1> */}
          <section className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 border-dotted border-2 border-gray-400 py-2 min-w-full'>
            <article className='bg-red-200 border-solid border-2 border-black p-4'>
              <p>Hello Card</p>
              <a href='#'>test link</a>
            </article>
            <article className='bg-red-200 border-solid border-2 border-black p-4'>
              <p>Introduction bout me</p>
              <a href='#'>test link</a>
            </article>
          </section>
        </div>
        <h1>Projects</h1>
        <section className='grid gap-4 grid-cols-3'>
          <article className='bg-green-200 border-solid border-2 border-black p-4 transition ease-in hover:shadow-md'>
            <p>Project</p>
            <a href='#'>test link</a>
          </article>
          <article className='bg-green-200 border-solid border-2 border-black p-4'>
            <p>Project</p>
            <a href='#'>test link</a>
          </article>
          <article className='bg-green-200 border-solid border-2 border-black p-4'>
            <p>Project</p>
            <a href='#'>test link</a>
          </article>
        </section>
      </section>
    </main>
  );
}
