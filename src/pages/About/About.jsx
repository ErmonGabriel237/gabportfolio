import HeroImg from "@/assets/images/myPhoto.jpg";
import AdComponent from "@/components/AdComponent";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={500}
                />
              </div>
            </div>

            <div className="relative sm:pt-0 lg:pt-16 space-y-4">
              <p className="text-white">
                Hello! I&apos;m Ermon Gabriel, a passionate JavaScript, PHP
                developer specializing in creating innovative web solutions and
                user-friendly interfaces. I&apos;m dedicated to simplifying
                development workflows.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I&apos;m a lifelong learner and innovator, driven by a
                    desire to contribute to the developer community with new
                    ideas and tools that deliver real value.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Ermon Gabriel
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <AdComponent slot="YOUR_AD_SLOT_ID_HERE" />
      </section>
    </>
  );
}
