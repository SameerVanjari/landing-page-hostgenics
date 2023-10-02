"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

const FAQs = () => {
  return (
    <div className="w-full space-y-2 flex flex-col items-center">
      <Disclosure>
        {({ open }) => (
          <div className="border w-full sm:w-3/5 border-blue-400 rounded-xl px-4">
            <Disclosure.Button className="w-full py-5 sm:px-4 flex justify-between">
              <p className={`font-semibold ${open && "text-blue-700"}`}>
                Why should I start with Hostgenics?
              </p>
              <ChevronDown size={20} color="#2563eb" />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 py-6 ">
                <p className="text-slate-800">
                  HostGenics proudly stands as the best web hosting and domain
                  provider in India, offering unmatched reliability, quality
                  services with a 99.9% uptime guarantee, 24/7 customer support,
                  affordability, and top-tier security. Our unwavering
                  commitment to ensuring your website runs seamlessly and
                  securely, coupled with cost-effective solutions, makes us the
                  ideal choice for individuals and businesses of all sizes
                  looking to establish a robust online presence.
                </p>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className="border w-full sm:w-3/5 border-blue-400 rounded-xl px-4">
            <Disclosure.Button className="w-full py-5 sm:px-4 flex justify-between">
              <p className={`font-semibold ${open && "text-blue-700"}`}>
                How can I contact your support in case of an enquiry?
              </p>
              <ChevronDown size={20} color="#2563eb" />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 py-6 ">
                <p className="text-slate-800">
                  Our team is highly professional, with a wealth of experience
                  and expertise in our respective fields. We take pride in
                  delivering top-notch service, adhering to the highest
                  standards of professionalism in every aspect of our work. Our
                  dedication to excellence is reflected in our commitment to
                  ongoing training and staying up-to-date with the latest
                  industry trends, ensuring that we provide you with the best
                  possible solutions and support. Your satisfaction is our
                  utmost priority, and we approach every task with the utmost
                  professionalism and dedication to achieving your goals. Plus,
                  with our 24x7 customer support, we are always available to
                  assist you whenever you need us, day or night, to address any
                  questions or concerns promptly.
                </p>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className="border w-full sm:w-3/5 border-blue-400 rounded-xl px-4">
            <Disclosure.Button className="w-full py-5 sm:px-4 flex justify-between">
              <p className={`font-semibold ${open && "text-blue-700"}`}>
                What kind of Web Hosting do I need?
              </p>
              <ChevronDown size={20} color="#2563eb" />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 py-6 ">
                <p className="text-slate-800">
                  There are many kinds of hosting like shared hosting which is
                  best for beginners, cloud hosting which is best for high
                  traffic sites, wordpress hosting which is best for bloggers,
                  premium hosting which is best for its high performance and for
                  its relaiblity, resseller hosting which is best for starting
                  web hosting businesses etc.
                </p>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className="border w-full sm:w-3/5 border-blue-400 rounded-xl px-4">
            <Disclosure.Button className="w-full py-5 sm:px-4 flex justify-between">
              <p className={`font-semibold ${open && "text-blue-700"}`}>
                Can I upgrade to more powerful hosting plan later?
              </p>
              <ChevronDown size={20} color="#2563eb" />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 py-6 ">
                <p className="text-slate-800">
                  Yes, you can upgrade your current hosting plan if you wish to
                  upgrade it to bigger plan which is very easy to do.
                </p>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className="border w-full sm:w-3/5 border-blue-400 rounded-xl px-4">
            <Disclosure.Button className="w-full py-5 sm:px-4 flex justify-between">
              <p className={`font-semibold ${open && "text-blue-700"}`}>
                Can I daily Backup my website?
              </p>
              <ChevronDown size={20} color="#2563eb" />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 py-6">
                <p className="text-slate-800">
                  Now worries of your data because we provide daily backup of
                  your site through Jetbackup. Jetbackup keeps your data safe
                  and secure and protect it from lossing it.
                </p>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default FAQs;
