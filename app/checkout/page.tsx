"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import "../globals.css";
import Header from "../(site)/components/Header";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    paymentMethod: "Visa",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    vodafoneNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Order submitted successfully!");
    console.log("Order Data:", { ...formData, cartItems });
    clearCart();
  };

  const paymentMethods = [
    { name: "Visa / Mastercard", img: "/visa.png" },
    { name: "Fawry", img: "/fawry.png" },
    { name: "Vodafone Cash", img: "/vodafone.png" },
    { name: "Paymob", img: "/paymob.png" },
    { name: "Cash on Delivery", img: "/cod.png" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* 🖼️ Header background */}
      <Header />

      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-black text-center mb-16">
          Checkout
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto space-y-8"
        >
          {/* 👤 Customer Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Customer Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-400"
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-400"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-400"
              />
              <input
                name="company"
                placeholder="Company Name (optional)"
                value={formData.company}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-400"
              />
              <input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg w-full md:col-span-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* 💳 Payment Methods */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Payment Method
            </h2>

            <div className="flex flex-wrap gap-4 mb-4">
              {paymentMethods.map((method) => (
                <label
                  key={method.name}
                  className={`flex items-center gap-2 border px-4 py-2 rounded-lg cursor-pointer transition ${
                    formData.paymentMethod === method.name
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.name}
                    checked={formData.paymentMethod === method.name}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <Image
                    src={method.img}
                    alt={method.name}
                    width={40}
                    height={40}
                  />
                  <span>{method.name}</span>
                </label>
              ))}
            </div>

            {/* 🧾 Dynamic Fields based on method */}
            {["Visa / Mastercard", "Paymob"].includes(
              formData.paymentMethod
            ) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
                <input
                  name="cardName"
                  placeholder="Name on Card"
                  value={formData.cardName}
                  onChange={handleChange}
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
                <input
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
                <input
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>
            )}

            {formData.paymentMethod === "Vodafone Cash" && (
              <div className="mt-4">
                <input
                  name="vodafoneNumber"
                  placeholder="Vodafone Cash Number"
                  value={formData.vodafoneNumber}
                  onChange={handleChange}
                  className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-red-400"
                />
                <p className="text-sm text-gray-500 mt-2">
                  A confirmation message will be sent after payment.
                </p>
              </div>
            )}
          </div>

          {/* 🛍️ Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Order Summary
            </h2>
            <ul className="divide-y">
              {cartItems.map((item) => (
                <li key={item.id} className="py-2 flex justify-between">
                  <span>{item.title}</span>
                  <span>{item.price || 0} EGP</span>
                </li>
              ))}
            </ul>
            <p className="text-right font-bold mt-4 text-lg">
              Total:{" "}
              {cartItems.reduce((acc, item) => acc + (item.price || 0), 0)} EGP
            </p>
          </div>

          {/* 🔘 Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}
