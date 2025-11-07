"use client";

import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useContactStore } from "@/store/useContactStore";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { submitContact, loading, success, error } = useContactStore();
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await submitContact(formData);
    reset(); 
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="relative flex flex-col md:flex-row text-center md:text-left max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16 justify-evenly items-center mx-auto min-h-screen py-20"
    >
      {/* Header */}
      <h3 className="absolute top-16 sm:top-20 uppercase tracking-[15px] text-gray-500 text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-10 w-full max-w-lg md:max-w-2xl z-10 mt-16 sm:mt-24">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-tight">
          I’ve got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Let’s Talk</span>
        </h4>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center md:justify-start space-x-4"
          >
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg sm:text-xl">+62 859-2104-8700</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center md:justify-start space-x-4"
          >
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg sm:text-xl">azizirfan60@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center md:justify-start space-x-4"
          >
            <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg sm:text-xl">BSD</p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput min-h-[120px]"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            type="submit"
            className={` cursor-pointer py-4 px-8 rounded-md text-black font-bold text-lg shadow-md transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#F7AB0A] hover:bg-[#f9bb1c]"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </motion.button>

          {success && (
            <p className="text-green-400 text-center pt-2">
              ✅ Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-400 text-center pt-2">
              ❌ Failed to send message.
            </p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}
