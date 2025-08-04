import ReactPlayer from 'react-player';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export function VideoModal({ video }: { video: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className='font-sans font-bold cursor-pointer'>Listen now</span>
      </DialogTrigger>
      <DialogContent className='ata-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-full max-h-96 max-w-screen-md w-full translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-300 p-[5px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
        <ReactPlayer
          width='100%'
          height='100%'
          url={`https://www.youtube.com/watch?v=${video}`}
        />
      </DialogContent>
    </Dialog>
  );
}
