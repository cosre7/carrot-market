
export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
        <input className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus: ring-offset-2 transition-shadow placeholder:drop-shadow-lg invalid:focus:ring-red-500 peer" required type="email" placeholder="Email address"/>
        <span className="text-red-500 font-medium hidden peer-invalid:block">Email is required.</span>
        <button className="bg-black text-white py-2 rounded-full active:scale-90  transition-transform font-medium outline-none md:px-10 peer-required:bg-green-500">Log In</button>
      </div>
    </main>
  );
}
