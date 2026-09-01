import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-14">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        {/* BRAND */}
        <div className="lg:col-span-2">
          <Image
            className="w-auto h-12 object-contain"
            src="/logo.svg"
            alt="upchar footer logo"
            width={100}
            height={100}
          />
          <p className="mt-4 text-sm text-gray-400 max-w-sm">
            Redefining healthcare access with intelligent doctor discovery,
            seamless booking, and premium patient experience.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className=" font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover: cursor-pointer">Find Doctors</li>
            <li className="hover: cursor-pointer">Book Appointment</li>
            <li className="hover: cursor-pointer">Reviews</li>
            <li className="hover: cursor-pointer">Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className=" font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover: cursor-pointer">About Us</li>
            <li className="hover: cursor-pointer">Careers</li>
            <li className="hover: cursor-pointer">Blog</li>
            <li className="hover: cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className=" font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover: cursor-pointer">Help Center</li>
            <li className="hover: cursor-pointer">Terms of Service</li>
            <li className="hover: cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Upchar. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-400">
          <span className="hover: cursor-pointer">Terms</span>
          <span className="hover: cursor-pointer">Privacy</span>
          <span className="hover: cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
}
