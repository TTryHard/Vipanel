import React from 'react';
import emailjs from 'emailjs-com';

const Contacto = () =>{

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_hngl83g', 'template_y99fhrg', e.target, 'user_r7qhRVjuZbx765hgTPolv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }


    return(
        <div>
            <div className="container">
                <form onSubmit={sendEmail} className="pt-5 pb-5">
                    <div className="row pt-5 mx-auto">

                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control"
                            placeholder="Nombre" name="name"
                            />
                        </div>

                        <div className="col-8 form-group pt-5 mx-auto">
                            <input type="email" className="form-control"
                            placeholder="Correo" name="email"
                            />
                        </div>

                        <div className="col-8 form-group pt-5 mx-auto">
                            <input type="text" className="form-control"
                            placeholder="asunto" name="subject"
                            />
                        </div>

                        <div className="col-8 form-group pt-5 mx-auto">
                        <textarea name="message" id="" cols="30" rows="8"
                        className="form-control"
                        ></textarea>
                        </div>

                        <div className="col-8 form-group pt-6 mx-auto text-center">
                            <input type="submit" className="btn btn-primary"
                            value="Enviar"
                            />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacto;