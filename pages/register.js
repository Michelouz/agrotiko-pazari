export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">Εγγραφή Παραγωγού</h1>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Ονοματεπώνυμο" className="border rounded-md p-2" />
          <input type="email" placeholder="Email" className="border rounded-md p-2" />
          <input type="password" placeholder="Κωδικός" className="border rounded-md p-2" />
          <input type="tel" placeholder="Κινητό" className="border rounded-md p-2" />
          <button className="bg-green-600 text-white py-2 rounded-md">Εγγραφή</button>
        </form>
      </div>
    </div>
  );
}