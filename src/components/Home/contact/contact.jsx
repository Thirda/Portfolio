import { useState, React } from "react";

import PopUpContact from "../popupcontact/PopUpContact";

import "./contact.css";

function Contact() {
  const [buttonPopup, setButtonPopup] = useState(false);

  function handleSubmit(f) {
    f.preventDefault();
    setButtonPopup(true);
  }
  return (
    <div>
      <h2 id="contact" className="contact-title">
        Contact
      </h2>
      <div className="contact-text">Sur ce formulaire vous pouvez me contacter je recevrai le message dans ma boite mail. Je réponds sous 24h maximum.</div>
      <div className="contact-container">
        <form className="formContact" onSubmit={(f) => handleSubmit(f)}>
          <label htmlFor="label-name" className="label-name">
            Name
          </label>
          <input
            className="Name-comment"
            placeholder="titre.."
            required
            type="text"
          />

          <label htmlFor="label-email" className="label-email">
            Email
          </label>
          <input
            className="Email-comment"
            placeholder="yourmail@mail.com.."
            required
            type="text"
          />

          <label htmlFor="label-comment" className="label-comment">
            Message
          </label>
          <textarea
            className="Message-comment"
            placeholder="message.."
            required
            type="text"
          />

          <div className="openpopup">
            <button className="btn-sub-contact">Envoyer</button>
            <div className="center">
              <PopUpContact
                trigger={buttonPopup}
                close={setButtonPopup}
              ></PopUpContact>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
