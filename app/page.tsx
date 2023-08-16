import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { GiFlamer } from "react-icons/gi";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <header className='grid grid-cols-4 items-center border-4 border-black border-solid rounded-lg mx-2 mt-2'>
        <div className='flex justify-around items-center w-full col-span-3'>
          <div>
            <p className='flex items-center p-3 text-3xl'>E-Bodega</p>
          </div>
          <div className='flex w-full max-w-sm items-center space-x-2'>
            <Input type='input' placeholder='search items' />
            <Button type='submit'>Search</Button>
          </div>
        </div>
        <nav className='text-center'>
          <p>Products</p>
        </nav>
      </header>
      <div className='grid grid-cols-6'>
        <aside className='border-4 border-black border-solid rounded-lg mx-2 mt-2'>
          <p className='text-center p-3'>Aside</p>
        </aside>
        <main className='col-span-5 flex flex-col justify-center items-center border-4 border-black border-solid rounded-lg mx-2 mt-2 py-4'>
          <div className='flex flex-col items-center gap-5'>
            <h2>
              Enjoy the experience of stepping into a bodega in New York online!
            </h2>
            <p>
              With all the conveniences of purchasing a fake iPod and a Goya
              Beans all at the same time!
            </p>
          </div>
          <div className='grid grid-cols-3 gap-3 items-center'>
            <Image
              src='https://images.unsplash.com/photo-1518208682109-c56c3f9c3178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
              alt='hotdawg'
              width={250}
              height={200}
              className='rounded-lg object-cover'
              priority
            />
            <Image
              src='https://images.unsplash.com/photo-1518208682109-c56c3f9c3178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
              alt='hotdawg'
              width={250}
              height={200}
              className='rounded-lg object-cover'
              priority
            />
            <Image
              src='https://images.unsplash.com/photo-1518208682109-c56c3f9c3178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
              alt='hotdawg'
              width={250}
              height={200}
              className='rounded-lg object-cover'
              priority
            />
            <Image
              src='https://images.unsplash.com/photo-1518208682109-c56c3f9c3178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
              alt='hotdawg'
              width={250}
              height={200}
              className='rounded-lg object-cover'
              priority
            />
            <Image
              src='https://images.unsplash.com/photo-1518208682109-c56c3f9c3178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
              alt='hotdawg'
              width={250}
              height={200}
              className='rounded-lg object-cover'
              priority
            />
            <Image
              src='https://images.unsplash.com/photo-1518208682109-c56c3f9c3178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
              alt='hotdawg'
              width={250}
              height={200}
              className='rounded-lg object-cover'
              priority
            />
          </div>
        </main>
      </div>
      <footer className='border-4 border-black border-solid rounded-lg mx-2 mt-2'>
        <p className='text-center p-3'>Footer</p>
      </footer>
    </div>
  );
}
