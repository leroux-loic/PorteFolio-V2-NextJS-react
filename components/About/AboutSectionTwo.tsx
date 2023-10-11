/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  1er Site Gratuit
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  En effet rien de plus frurstant pour une petite entreprise que
                  de ne pas avoir de visibilité alors profité d'un site gratuit
                  sans hébergement.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  3 Retouche Gratuite
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Et oui, chez L.Corp, les 3 première retouche du site sont
                  gratuite pour vous aider à faire un choix unique. Vous avez la
                  possibilité d'ajouter une section, un bouton ou d'autres
                  éléments sans frais supplémentaires.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Retouche Majoré avec Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Toutes les retouches achetées sont soumises à un contrat. Par
                  conséquent, vous bénéficiez d'un support quotidien. Il est
                  important de noter que toute retouche doit être effectuée par
                  le développeur du code,ce même code est profégé et sous licence, sauf en cas d'option a l'achat(code source).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
