


async function takeTime(){
  await new Promise((resolve)=>{

   setTimeout(resolve,1000);
  });
}

  
export default async function Home() {
  await takeTime();
  
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>hai</h1>
      </div>
    );
  }
  