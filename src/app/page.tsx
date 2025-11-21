import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-300 font-sans">
      <main className="flex flex-col items-center justify-center w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-10 gap-8">
        <div className="flex items-center gap-4 mb-4">
          <Image src="/window.svg" alt="KellyOS Logo" width={48} height={48} />
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">KellyOS</h1>
        </div>
        <p className="text-lg text-gray-700 text-center">
          KellyOS builds powerful operating systems for companies, designed to simplify and streamline your operations. We help you manage everything from accounting and inventory to manufacturing and HR management—all in one place.
        </p>
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="flex flex-col items-center">
            <Image src="/file.svg" alt="Accounting" width={32} height={32} />
            <span className="mt-2 text-base font-medium text-gray-800">Accounting</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/globe.svg" alt="Inventory" width={32} height={32} />
            <span className="mt-2 text-base font-medium text-gray-800">Inventory</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/next.svg" alt="Manufacturing" width={32} height={32} />
            <span className="mt-2 text-base font-medium text-gray-800">Manufacturing</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/vercel.svg" alt="HR Management" width={32} height={32} />
            <span className="mt-2 text-base font-medium text-gray-800">HR Management</span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-8">
          <span className="text-lg font-semibold text-gray-900">Contact Us</span>
          <span className="text-xl font-bold text-blue-600 mt-2">0798293831</span>
        </div>
      </main>
    </div>
  );
}
      </main>
    </div>
  );
}
