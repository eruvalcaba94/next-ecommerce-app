export default function page() {
  return (
    <div>
      <header className='grid grid-cols-4 border-4 border-black border-solid rounded-lg mx-2 mt-2'>
        <div className='col-span-3'>
          <p className='text-center p-3'>Header</p>
        </div>
        <nav className='border-4 border-red-300 border-solid rounded-lg mx-2'>
          <p className='text-center p-3'>Nav Bar</p>
        </nav>
      </header>
      <div className='grid grid-cols-6'>
        <aside className='border-4 border-black border-solid rounded-lg mx-2 mt-2'>
          <p className='text-center p-3'>Aside</p>
        </aside>
        <main className='col-span-5 border-4 border-black border-solid rounded-lg mx-2 mt-2'>
          <p className='text-center p-3'>Body</p>
        </main>
      </div>
      <footer className='border-4 border-black border-solid rounded-lg mx-2 mt-2'>
        <p className='text-center p-3'>Footer</p>
      </footer>
    </div>
  );
}
