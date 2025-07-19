import Image from "next/image";
import Link from "next/link";
import SofiGif from "../assets/sofi-logo-gif.gif";
import SofiLogo from "../assets/sofi-logo.jpg";
import Wist from "../assets/sofi-wist.png";
import MainWindow from "./(components)/MainWindow";
import PageWrapper from "./(components)/PageWrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>

        <MainWindow>
          <div className="flex flex-col text-center">
            <p className="font-bold bg-gradient-to-r from-pink-400 via-pink-600 to-purple-900 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              SOFI CARD GUIDE
            </p>

            <Link href="https://portfolio-itsmeprince.vercel.app/" target="_blank" className="text-xs">
              Website Created by 🩷 @itsmeprinceyt
            </Link>
          </div>
        </MainWindow>

        <MainWindow>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="space-y-5">
              <p className="bg-stone-700/20 border-l-2 border-pink-600 text-pink-50 p-2 pl-4 rounded-sm">{`Hi, I'm Prince and today I'll be sharing my knowledge and experience to help you learn how to calculate your card's worth!`}<Image
                src={Wist}
                height={25}
                width={25}
                alt="Sofi Gif"
                className="spin-slow inline ml-1"
              />
              </p>

              <p className="bg-yellow-700/20 border-l-2 border-yellow-600 text-yellow-50 p-2 pl-4 rounded-sm">{`⚠️ Disclaimer: This guide is based on my personal knowledge, research, and experience. It does not constitute the official current market valuations. Card values may vary significantly due to market changes, individual perceptions, and other external factors. Please use this information as a general reference and consult multiple sources.`}</p>
            </div>
          </div>
        </MainWindow>

        <MainWindow>
          <div className="flex flex-col gap-4">
            <p className="font-bold bg-gradient-to-r from-pink-200 via-pink-300 to-purple-400 bg-clip-text text-transparent text-xl sm:text-2xl text-center">
              {`HOW I'LL DO THIS?`}
            </p>
            <p className="bg-stone-700/20 border-l-2 border-pink-600 text-pink-50 p-2 pl-4 rounded-sm">{`I will show many examples and cards of how I am pricing them so you can understand how to price them. So I want you to see all the examples and develop your own thinking capability so you can price them without any problem after reading this guide.`}</p>
          </div>
        </MainWindow>

                <MainWindow>
          <div className="flex flex-col gap-4">
            <p className="font-bold bg-gradient-to-r from-pink-200 via-pink-300 to-purple-400 bg-clip-text text-transparent text-xl sm:text-2xl text-center">
              {`NORMAL CARDS`}
            </p>
            <div className="bg-stone-700/20 border-l-2 border-pink-600 text-pink-50 p-2 pl-4 rounded-sm flex">
            ...

            </div>
          </div>
        </MainWindow>

      </PageWrapper>
    </>
  );
}
