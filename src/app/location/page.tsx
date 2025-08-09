// components/MapSection.tsx
const MapSection = () => {
  return (
    <section
      id="location"
      className="relative w-full py-16 px-6 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto z-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-8 text-center pb-2">
          My Location
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-lg">
          {/* Google Map Embed (No API key needed) */}
          <div className="w-full md:w-2/3 h-[350px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217716.48147261634!2d71.52491518671876!3d29.39584942186206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b947f1d6d8b0d%3A0x3b9a4e43d7b5ef51!2sBahawalpur%2C%20Punjab!5e0!3m2!1sen!2s!4v1692729183135!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">Get in Touch</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              📍 Bahawalpur, Punjab, Pakistan
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              📧 Email: <a href="mailto:developerik404@gmail.com" className="underline">developerik404@gmail.com</a>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              📞 Phone: +92 300 1234567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
