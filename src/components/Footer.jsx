import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer page-footer #00796b teal darken-2 text-white">
      <div className="container">
        <div className="row">
          <div className="col l4 s12">
            <h4>Email</h4>
            <ul className="list-unstyled">
              <li>
                <div>
                  <MdMail></MdMail> gustavojimenezdm@unimagdalena.edu.co
                </div>
              </li>
              <li>
                <div>
                  <SiGmail></SiGmail> gusjim71@gmail.com
                </div>
              </li>
            </ul>
          </div>

          <div className="col l3 offset-l1 s12">
            <h4>Social</h4>
            <ul className="list-unstyled">
              <li>
                <div>
                  <AiFillGithub></AiFillGithub>
                  <a href="https://github.com/tavowb" className="text-white">
                    {" "}
                    Gustavo Jimenez
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <AiFillInstagram></AiFillInstagram>
                  <a
                    href="https://www.instagram.com/morasouya/"
                    className="text-white"
                  >
                    {" "}
                    Gustavo Jimenez
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="col l3 offset-l1 s12">
            <h4>Phone</h4>
            <ul className="list-unstyled">
              <li>
                <div>
                  <BsPhoneFill></BsPhoneFill>
                  +57 3053058528
                </div>
              </li>
              <li>
                <div>
                  <BsPhoneFill></BsPhoneFill>
                  +57 3124341827
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <p className="center-align">
            Developed and maintained by:{" "}
            <a
              className="text-white"
              href="https://www.instagram.com/morasouya/"
            >
              Gustavo Jimenez
            </a>{" "}
            &copy; {new Date().getFullYear()}{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
