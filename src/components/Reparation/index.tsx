import React from "react";
import Breadcrumb from "../Common/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Breadcrumb
        title={"Réparation"}
        pages={["reparation"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-7.5">
            <div className="xl:max-w-[370px] w-full bg-white rounded-xl shadow-1">
              <div className="py-5 px-4 sm:px-7.5 border-b border-gray-3">
                <p className="font-medium text-xl text-dark">Informations de contact</p>
              </div>
              <div className="p-4 sm:p-7.5">
                <div className="flex flex-col gap-4">
                  <p className="flex items-center gap-4">
                    <strong>Nom:</strong> MonTech
                  </p>
                  <p className="flex items-center gap-4">
                    <strong>Téléphone:</strong> +1 (000) 000-0000
                  </p>
                  <p className="flex items-center gap-4">
                    <strong>Email:</strong> support@tpmyshop.com
                  </p>
                  <p className="flex items-center gap-4">
                    <strong>Adresse:</strong> UDS - Campus Longueuil
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-xl shadow-1 p-7.5">
              <p className="font-medium text-xl text-dark mb-5">Demander un devis</p>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nom" className="border border-gray-3 p-3 rounded-lg" required />
                  <input type="email" placeholder="Email" className="border border-gray-3 p-3 rounded-lg" required />
                </div>
                <input type="tel" placeholder="Numéro de téléphone" className="border border-gray-3 p-3 rounded-lg w-full mt-4" required />
                <textarea placeholder="Decrivez votre probleme" className="border border-gray-3 p-3 rounded-lg w-full mt-4" rows={5} required></textarea>
                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4">
                  Envoyer
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1 mt-5 bg-white rounded-xl shadow-1 p-7.5">
            <div className="py-5 px-1 sm:px-1.5 border-b border-gray-3">
              <p className="font-medium text-xl text-dark">Estimation Tarifs des réparations</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mt-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Type de réparation</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Estimation du prix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Réparation écran smartphone</td>
                    <td className="border border-gray-300 px-4 py-2">$80 - $200</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Remplacement batterie</td>
                    <td className="border border-gray-300 px-4 py-2">$50 - $120</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Réparation carte mère</td>
                    <td className="border border-gray-300 px-4 py-2">$100 - $300</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Désoxydation (dommages liquides)</td>
                    <td className="border border-gray-300 px-4 py-2">$60 - $150</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Réparation connecteur de charge</td>
                    <td className="border border-gray-300 px-4 py-2">$40 - $100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex-1 mt-5 bg-white rounded-xl shadow-1 p-7.5">
            <div className="py-5 px-4 sm:px-7.5 border-b border-gray-3">
              <p className="font-medium text-xl text-dark">Localisation</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.2555800356563!2d-73.52298562378282!3d45.52506217107517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b136c172609%3A0xc576f9c61ec8d407!2sUniversit%C3%A9%20de%20Sherbrooke%20%E2%80%93%20Campus%20de%20Longueuil!5e0!3m2!1sfr!2sca!4v1743309065782!5m2!1sfr!2sca"
              className="w-full h-[400px] rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>


    </>
  );
};

export default Contact;
