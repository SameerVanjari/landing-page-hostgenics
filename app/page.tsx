import { Disclosure } from "@headlessui/react";
import {
  ArrowUpRightIcon,
  Check,
  ChevronDown,
  LineChart,
  MemoryStick,
  Search,
  Server,
  ServerCog,
  ServerCrash,
  ShieldCheck,
  Star,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import FAQs from "./components/FAQs";

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container grid sm:grid-cols-2 place-items-center py-12 px-6 sm:px-0">
          <div className="order-2 sm:order-1 space-y-8">
            <h1 className="text-5xl font-semibold text-white">
              Give your website the best place to Host.
            </h1>
            <div className="grid grid-cols-2 gap-y-4">
              <div className="font-medium text-white flex space-x-2">
                <Check color="yellow" /> <span>Free Domain</span>
              </div>
              <div className="font-medium text-white flex space-x-2">
                <Check color="yellow" /> <span>Free SSL Certificate</span>
              </div>
              <div className="font-medium text-white flex space-x-2">
                <Check color="yellow" /> <span>Free Daily Backup</span>
              </div>
              <div className="font-medium text-white flex space-x-2">
                <Check color="yellow" /> <span>Free Site Migration</span>
              </div>
            </div>

            <p className="text-white">
              Enjoy the lighting fast performance, loading speed, top-notch
              security and 24/7 customer support with Hostgenics reliable and
              stable web hosting plans.
            </p>

            <div className="flex space-x-6">
              <button
                type="button"
                className="px-4 py-3 rounded-lg bg-yellow-300 hover:bg-yellow-100"
              >
                Get Started
              </button>
              <button
                type="button"
                className="px-4 py-3 rounded-lg border border-yellow-200 text-white hover:bg-blue-300"
              >
                Compare plans
              </button>
            </div>
          </div>

          <img
            src="https://webcloudindia.in/wp-content/uploads/2023/10/man-smile.png"
            className="order-1 sm:order-2 sm:w-3/4"
          />
        </div>
      </div>

      {/* Search domain */}
      <div id="search" className="w-full bg-blue-100 py-10 scroll-mt-16">
        <div className="container flex flex-col justify-center items-center space-y-4 px-6 sm:px-0">
          <h3 className="text-2xl font-medium ">
            Get The Perfect Domain Name For Your Brand
          </h3>
          <p className="text-sm text-slate-600 ">
            The first step in your online journey is getting a domain name.
            Choose from our wide range of top-level domain extensions for your
            biz
          </p>

          <div className="bg-white flex flex-col sm:flex-row items-center rounded-lg  p-1 sm:w-1/2">
            <div className="flex-1 flex items-center py-1">
              <Search size={18} color="gray" className="mx-3" />
              <input
                className="focus:outline-none px-2 "
                placeholder="Search a domain..."
              />
            </div>
            <button className="rounded-lg py-3 mt-3 sm:mt-0 w-full sm:w-fit px-6 capitalize bg-blue-600 text-white">
              search
            </button>
          </div>

          <div className="flex flex-wrap sm:w-3/4 gap-6 pt-6 px-6 sm:px-0">
            <div className="flex-grow rounded-lg border text-center border-blue-700 p-6 ">
              <p className="text-3xl font-mono font-bold text-blue-700">.com</p>
              <p className="text-lg font-semibold">₹799/year</p>
            </div>
            <div className="flex-grow rounded-lg border text-center border-blue-700 p-6 ">
              <p className="text-3xl font-mono font-bold text-blue-700">.in</p>
              <p className="text-lg font-semibold">₹499/year</p>
            </div>
            <div className="flex-grow rounded-lg border text-center border-blue-700 p-6 ">
              <p className="text-3xl font-mono font-bold text-blue-700">.xyz</p>
              <p className="text-lg font-semibold">₹199/year</p>
            </div>
            <div className="flex-grow rounded-lg border text-center border-blue-700 p-6 ">
              <p className="text-3xl font-mono font-bold text-blue-700">
                .online
              </p>
              <p className="text-lg font-semibold">₹149/year</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div id="hosting-plans" className="w-full py-12 scroll-mt-16">
        <div className="container space-y-6 px-6 sm:px-0">
          <h3 className="text-2xl font-medium text-center">
            Choose Your Web Hosting Plan
          </h3>
          <p className="text-center text-slate-600 font-medium">
            We provide various types of web hosting plans like Shared,
            WordPress, Cloud and Premium hosting. Choose your plan according to
            your needs.
          </p>

          <div className="grid sm:grid-cols-4 gap-5">
            <div className="shadow-lg shadow-blue-200 text-center pt-8 px-4 pb-5 rounded-lg hover:border transition border-blue-500 space-y-6">
              <p className="text-xl font-bold">Shared Hosting</p>
              <p className="text-sm ">Idaeal solution for beginners</p>
              <div className="flex items-center justify-center space-x-3">
                <p className="text-sm line-through">₹799</p>
                <p className="font-black text-red-600 bg-red-300 rounded-full p-3">
                  SAVE 35%
                </p>
              </div>

              <p className="pb-4 border-b">7-days Money back gurantee</p>

              <p className="font-semibold text-start w-full">Features:</p>
              <ul className="space-y-4 px-3 ">
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>1</strong> Website
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> GB Nvme SSD
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>Unlimited</strong> Bandwidth
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>Unlimited</strong> Traffic
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-90">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Sub Domains
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-70">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Databases
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-50">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong>FTP Accounts
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-20">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Email Accounts
                  </p>
                </li>
              </ul>

              <button type="button" className="capitalize text-lg font-medium">
                learn more
              </button>
            </div>

            <div className="shadow-lg shadow-blue-200 text-center pt-8 px-4 pb-5 rounded-lg hover:border transition border-blue-500 space-y-6">
              <p className="text-xl font-bold">WordPress Hosting</p>
              <p className="text-sm ">Idaeal solution for beginners</p>
              <div className="flex items-center justify-center space-x-3">
                <p className="text-sm line-through">₹799</p>
                <p className="font-black text-red-600 bg-red-300 rounded-full p-3">
                  SAVE 35%
                </p>
              </div>

              <p className="pb-4 border-b">7-days Money back gurantee</p>

              <p className="font-semibold text-start w-full">Features:</p>
              <ul className="space-y-4 px-3 ">
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>1</strong> Website
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> GB Nvme SSD
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>Unlimited</strong> Bandwidth
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>Unlimited</strong> Traffic
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-90">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Sub Domains
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-70">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Databases
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-50">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong>FTP Accounts
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-20">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Email Accounts
                  </p>
                </li>
              </ul>

              <button type="button" className="capitalize text-lg font-medium">
                learn more
              </button>
            </div>

            <div className="shadow-lg shadow-blue-200 text-center pt-8 px-4 pb-5 rounded-lg hover:border transition border-blue-500 space-y-6">
              <p className="text-xl font-bold">Cloud Hosting</p>
              <p className="text-sm ">Idaeal solution for beginners</p>
              <div className="flex items-center justify-center space-x-3">
                <p className="text-sm line-through">₹799</p>
                <p className="font-black text-red-600 bg-red-300 rounded-full p-3">
                  SAVE 35%
                </p>
              </div>

              <p className="pb-4 border-b">7-days Money back gurantee</p>

              <p className="font-semibold text-start w-full">Features:</p>
              <ul className="space-y-4 px-3 ">
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>1</strong> Website
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> GB Nvme SSD
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>Unlimited</strong> Bandwidth
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>Unlimited</strong> Traffic
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-90">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Sub Domains
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-70">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Databases
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-50">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong>FTP Accounts
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-20">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Email Accounts
                  </p>
                </li>
              </ul>

              <button type="button" className="capitalize text-lg font-medium">
                learn more
              </button>
            </div>

            <div className="shadow-lg shadow-blue-200 text-center pt-8 px-4 pb-5 rounded-lg hover:border transition border-blue-500 space-y-6">
              <p className="text-xl font-bold">Premium Hosting</p>
              <p className="text-sm ">Idaeal solution for beginners</p>

              <div className="flex items-center justify-center space-x-3">
                <p className="text-sm line-through">₹799</p>
                <p className="font-black text-red-600 bg-red-300 rounded-full p-3">
                  SAVE 35%
                </p>
              </div>

              <p className="pb-4 border-b">7-days Money back gurantee</p>

              <p className="font-semibold text-start w-full">Features:</p>
              <ul className="space-y-4 px-3 ">
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>1</strong> Website
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> GB Nvme SSD
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>Unlimited</strong> Bandwidth
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>Unlimited</strong> Traffic
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-90">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Sub Domains
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-70">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Databases
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-50">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong>FTP Accounts
                  </p>
                </li>
                <li className="flex space-x-2 items-center opacity-20">
                  <Check size={18} color="blue" />{" "}
                  <p>
                    <strong>10</strong> Email Accounts
                  </p>
                </li>
              </ul>

              <button type="button" className="capitalize text-lg font-medium">
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* From support section */}
      <div className="w-full py-12">
        <h3 className="text-2xl font-semibold tracking-wider text-center text-gray-800">
          From <span className="font-bold text-black">Performance</span> to{" "}
          <span className="font-bold text-black">24/7 Support</span>
        </h3>
        <h4 className="text-2xl font-medium text-center pt-3">
          You get <strong>EVERYTHING</strong>
        </h4>

        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 px-6 sm:px-0">
          <div className="p-8 flex flex-col justify-center items-center border text-center space-y-4 rounded-lg border-gray-200 hover:border-blue-500 transition">
            <Server size={50} color="#2563eb" />
            <p className="font-bold">Free Migration</p>
            <p className="text-gray-800">
              Move your website to Hostgenics easily without any data loss. Our
              experts will help you to migrate your website.
            </p>
          </div>

          <div className="p-8 flex flex-col justify-center items-center border text-center space-y-4 rounded-lg border-gray-200 hover:border-blue-500 transition">
            <MemoryStick size={50} color="#2563eb" />
            <p className="font-bold">NVMe SSD</p>
            <p className="text-gray-800">
              Get more efficient data transport with the latest NVMe SSD storage
              drives that make website loading speed much faster!
            </p>
          </div>

          <div className="p-8 flex flex-col justify-center items-center border text-center space-y-4 rounded-lg border-gray-200 hover:border-blue-500 transition">
            <ServerCrash size={50} color="#2563eb" />
            <p className="font-bold">Lightspeed Web Server</p>
            <p className="text-gray-800">
              LiteSpeed web server is one of the fastest webservers that makes
              your website lightening fast with smart cache storage!
            </p>
          </div>

          <div className="p-8 flex flex-col justify-center items-center border text-center space-y-4 rounded-lg border-gray-200 hover:border-blue-500 transition">
            <Wallet size={50} color="#2563eb" />
            <p className="font-bold">Money Back Gurantee</p>
            <p className="text-gray-800">
              Hostgenics offers a confidence-boosting 7-day money-back guarantee
              on their web hosting services.
            </p>
          </div>

          <div className="p-8 flex flex-col justify-center items-center border text-center space-y-4 rounded-lg border-gray-200 hover:border-blue-500 transition">
            <ShieldCheck size={50} color="#2563eb" />
            <p className="font-bold">Top Notch Security</p>
            <p className="text-gray-800">
              We provide Bitninja security which includes WAF (Web Application
              Firewall), DDoS Protection, Malware Scanner Etc.
            </p>
          </div>

          <div className="p-8 flex flex-col justify-center items-center border text-center space-y-4 rounded-lg border-gray-200 hover:border-blue-500 transition">
            <LineChart size={50} color="#2563eb" />
            <p className="font-bold">99.9% Uptime</p>
            <p className="text-gray-800">
              Our services come with 99.99% uptime guarantee to ensure that your
              website is running round the clock.
            </p>
          </div>
        </div>
      </div>

      {/* tile section */}
      <div className="w-full bg-blue-100 py-12">
        <div className="container grid sm:grid-cols-2 gap-y-6 place-items-center my-4 px-6 sm:px-0">
          <div className="">
            <h4 className="text-3xl font-medium ">
              All-In-One Website Solution
            </h4>
            <ul className="mt-6 space-y-4">
              <li className="text-slate-800 space-x-3 flex items-center">
                <Check size={18} color="green" />{" "}
                <span>Manage up to Unlimited websites.</span>
              </li>
              <li className="text-slate-800 space-x-3 flex items-center">
                <Check size={18} color="green" />{" "}
                <span> Register a domain name for free. </span>
              </li>
              <li className="text-slate-800 space-x-3 flex items-center">
                <Check size={18} color="green" />{" "}
                <span>Set up a professional business email address.</span>
              </li>
              <li className="text-slate-800 space-x-3 flex items-center">
                <Check size={18} color="green" />{" "}
                <span>Optimize your managed WordPress hosting.</span>
              </li>
              <li className="text-slate-800 space-x-3 flex items-center">
                <Check size={18} color="green" />{" "}
                <span>Launch websites quickly with our Website Builder.</span>
              </li>
            </ul>
          </div>

          <img
            src="/image1.jpg"
            className="sm:w-4/5 rounded-2xl object-cover "
          />
        </div>

        <div className="container grid sm:grid-cols-2 gap-y-6 place-items-center my-4 px-6 sm:px-0">
          <div className="order-1 sm:order-2">
            <h4 className="text-3xl font-medium ">
              Advanced Security & Fast Performance
            </h4>
            <p className="text-slate-800 sm:w-4/5 pt-4">
              We provide BitNinja security, which is the best security in the
              world, offering protection for our servers and your websites. It
              has lots of features like DDoS protection, malware scanner, WAF,
              database cleaner, and more. Also we provide LiteSpeed Web Server
              which offers various products and services designed to improve
              website performance, security, and scalability. One of its most
              well-known products is LiteSpeed Web Server (LSWS), but they also
              offer other tools and solutions for optimizing web applications
              and servers.
            </p>
          </div>

          <img
            src="/image2.jpg"
            className="sm:w-4/5 rounded-2xl object-cover order-2 sm:order-1"
          />
        </div>
      </div>

      {/* Testimonial section */}
      <div className="w-full py-12">
        <div className="container flex flex-col items-center space-y-4 px-6 sm:px-0">
          <p className="text-center px-5 py-2 rounded-xl bg-blue-200 w-fit text-blue-600 font-medium ">
            Our Testimonials
          </p>
          <h4 className="text-3xl font-medium">Featured Client Stories</h4>

          <div className="grid sm:grid-cols-3 gap-8 pt-10">
            <div className="border rounded-xl">
              <div className="border-b py-8 px-12">
                <div className="flex items-center pb-6 space-x-2">
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                </div>

                <p className="italic text-lg text-slate-800">
                  Hosting perfection! Their servers are super-fast, and their
                  technical support is truly exceptional. Intuitive control
                  panel. Managing our hosting settings has never been easier
                </p>
              </div>

              <div className="px-12 py-8 flex space-x-6 items-center">
                <img
                  src="https://source.unsplash.com/300x300?portrait,photographer"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="space-y-1">
                  <p className="text-lg font-semibold">William Turner</p>
                  <p className="text-slate-800">Owner of retail business</p>
                </div>
              </div>
            </div>

            <div className="border rounded-xl">
              <div className="border-b py-8 px-12">
                <div className="flex items-center pb-6 space-x-2">
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                </div>

                <p className="italic text-lg text-slate-800">
                  Hosting perfection! Their servers are super-fast, and their
                  technical support is truly exceptional. Intuitive control
                  panel. Managing our hosting settings has never been easier
                </p>
              </div>

              <div className="px-12 py-8 flex space-x-6 items-center">
                <img
                  src="https://source.unsplash.com/300x300?portrait,engineer"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="space-y-1">
                  <p className="text-lg font-semibold">Rachel Stevens</p>
                  <p className="text-slate-800">Product Development</p>
                </div>
              </div>
            </div>

            <div className="border rounded-xl">
              <div className="border-b py-8 px-12">
                <div className="flex items-center pb-6 space-x-2">
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                  <Star size={22} color="#2563eb" className="fill-blue-600" />
                </div>

                <p className="italic text-lg text-slate-800">
                  Hosting perfection! Their servers are super-fast, and their
                  technical support is truly exceptional. Intuitive control
                  panel. Managing our hosting settings has never been easier
                </p>
              </div>

              <div className="px-12 py-8 flex space-x-6 items-center">
                <img
                  src="https://source.unsplash.com/300x300?portrait,doctor"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="space-y-1">
                  <p className="text-lg font-semibold">Lisa Brown</p>
                  <p className="text-slate-800">Human Resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full py-14">
        <div className="container space-y-10 px-6 sm:px-0">
          <h4 className="text-3xl font-medium text-center">
            Frequently Asked Questions
          </h4>
          <p className="text-lg text-slate-800 text-center">
            Have questions about working with WordPress or WordPress Hosting?
            Here are some that we get asked from time-to-time.{" "}
          </p>

          <FAQs />
        </div>
      </div>

      {/* CTA */}
      <div className="w-full bg-gradient-to-r from-blue-700 to-blue-500 py-14">
        <div className="container space-y-6 flex flex-col items-center">
          <h4 className="text-3xl font-medium text-center w-[26rem] text-white">
            Take your website online with Hostgenics
          </h4>
          <p className="text-center text-white">
            Enjoy special introductory pricing starting at ₹59.00/month*
          </p>
          <button
            type="button"
            className="px-4 py-3 flex item-center space-x-2 rounded-lg bg-yellow-300 hover:bg-yellow-100"
          >
            <span>Get Started</span> <ArrowUpRightIcon size={18} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-12">
        <div className="container grid sm:grid-cols-4 gap-y-8 border-b pb-6 px-6 sm:px-0">
          <div>
            <p className="font-semibold">Hosting</p>
            <ul className="mt-3 space-y-2">
              <li>Shared Hosting</li>
              <li>WordPress Hosting</li>
              <li>VPS Hosting</li>
              <li>Virtual Dedicated (VDS)</li>
              <li>Dedicated Server</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Information</p>
            <ul className="mt-3 space-y-2">
              <li>Affiliate Program</li>
              <li>Data Center & Servers</li>
              <li>Payment Methods</li>
              <li>Servers Status</li>
              <li>Free Website Migration</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Company</p>
            <ul className="mt-3 space-y-2">
              <li>About</li>
              <li>Affiliates</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Help</p>
            <ul className="mt-3 space-y-2">
              <li>Tutorials</li>
              <li>Knowledge Base</li>
              <li>Report Abuse</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="container pt-4 text-xs px-6 sm:px-0">
          Copyright © 2022-2023 Hasibul Technology Private Limited
        </div>
      </div>
    </div>
  );
}
