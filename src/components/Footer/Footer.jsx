import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              We are committed to providing the best healthcare services. Book
              your appointments online and experience seamless healthcare.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-300">
              <li className="mb-2">
                <a
                  href="/"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/services"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/doctors"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Doctors
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/appointments"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Appointments
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="text-sm text-gray-300">
              <li className="mb-2">123 Medical Drive, Health City</li>
              <li className="mb-2">Phone: (123) 456-7890</li>
              <li className="mb-2">Email: info@medicalappointment.com</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Medical Appointment. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
