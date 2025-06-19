import { useState } from "react";
import { ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/router";

const products = [
  {
    id: 1,
    name: "Μέλι Πορτοκαλιάς",
    description: "Από τη Λακωνία",
    price: 8,
    image: "https://images.unsplash.com/photo-1589987607627-437e5efbb9b6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Ελαιόλαδο Extra Παρθένο",
    description: "Κρήτη - Βιολογικό",
    price: 12,
    image: "https://images.unsplash.com/photo-1615484477691-f2d246a0d065?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Χειροποίητο Σαπούνι Ελιάς",
    description: "Χωρίς χημικά πρόσθετα",
    price: 5,
    image: "https://images.unsplash.com/photo-1590080876853-5ca34f008bf2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <img
            src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-farmer-agriculture-flatart-icons-flat-flatarticons.png"
            alt="Λογότυπο"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold">Αγροτικό Παζάρι</h1>
        </div>
      </header>
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6">Δημοφιλή Προϊόντα</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-2xl shadow">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="font-semibold">{product.price}€</span>
                <button className="text-sm text-white bg-green-500 px-3 py-1 rounded-full">
                  Προσθήκη
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
