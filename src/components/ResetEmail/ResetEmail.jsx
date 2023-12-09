import React from "react";
import Link from "next/link";

const ResetEmail = ({ username, resetLink }) => {
  return (
    <table
      width="100%"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      style={{ backgroundColor: "#eaeaea", height: "550px" }}
    >
      <tbody>
        <tr>
          <td align="center" style={{ backgroundColor: "#eaeaea" }}>
            <table
              align="center"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              style={{
                backgroundColor: "#ffffff",
                width: "500px",
                height: "500px",
              }}
            >
              <tbody>
                <tr>
                  <td>
                    {/* Logo et Titre */}
                    <table width="100%" cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            style={{
                              paddingLeft: "40px",
                              paddingRight: "40px",
                              paddingTop: "20px",
                            }}
                          >
                            {/* Insérez le logo ici */}
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style={{
                              paddingLeft: "40px",
                              paddingRight: "40px",
                              fontSize: "36px",
                              fontWeight: "700",
                              lineHeight: "43px",
                              paddingTop: "20px",
                              color: "#221f1f",
                            }}
                          >
                            Réinitialisation du mot de passe
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Contenu */}
                    <table
                      align="left"
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            style={{
                              paddingLeft: "40px",
                              paddingRight: "40px",
                              fontSize: "16px",
                              lineHeight: "21px",
                              paddingTop: "20px",
                              paddingBottom: "20px",
                              color: "#221f1f",
                            }}
                          >
                            Bonjour {username},
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style={{
                              paddingLeft: "40px",
                              paddingRight: "40px",
                            }}
                          >
                            Réinitialisons votre mot de passe afin que vous
                            puissiez continuer à regarder Netflix.
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Bouton de Réinitialisation */}
                    <table
                      align="center"
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            style={{
                              paddingLeft: "40px",
                              paddingRight: "40px",
                              paddingTop: "20px",
                            }}
                          >
                            <a
                              href={resetLink}
                              style={{
                                backgroundColor: "#e50914",
                                color: "white",
                                textDecoration: "none",
                                padding: "14px 40px",
                                borderRadius: "4px",
                                display: "inline-block",
                              }}
                            >
                              Réinitialiser le mot de passe
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Texte de suivi */}
                    <table
                      align="left"
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            style={{
                              paddingLeft: "40px",
                              paddingRight: "40px",
                              fontSize: "16px",
                              lineHeight: "21px",
                              paddingTop: "20px",
                              color: "#221f1f",
                            }}
                          >
                            {`Si vous n'avez pas demandé à réinitialiser votre mot
                            de passe, nous vous conseillons de consulter `}
                            <Link
                              href="http://localhost:3000/auth/login"
                              style={{ textDecoration: "underline" }}
                            >
                              {`les derniers accès au compte `}
                            </Link>
                            afin de détecter toute éventuelle activité
                            inhabituelle.
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table width="100%" cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td
                            style={{
                              paddingLeft: "40px",
                              paddingRight: "40px",
                              paddingTop: "30px",
                            }}
                          >
                            <table
                              align="center"
                              width="100%"
                              cellPadding="0"
                              cellSpacing="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      fontSize: "0",
                                      lineHeight: "0",
                                      borderTop: "2px solid #221F1F",
                                    }}
                                  >
                                    {/* Espace décoratif */}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Informations supplémentaires */}
                    <table
                      align="left"
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            style={{
                              paddingLeft: "40px",
                              paddingRight: "40px",
                              fontSize: "14px",
                              lineHeight: "17px",
                              paddingTop: "20px",
                              color: "#221f1f",
                            }}
                          >
                            {`L'équipe Netflix`}
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td align="center" style={{ padding: "20px" }}>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://1D9VF.trk.elasticemail.com/tracking/unsubscribe?d=sdUhzIpwcbCINNKiwSxFHZqUv122gz7I7XNPzlbunTz5XUkTcmpJfeMDrI36XiJ_kQoABCVSZTm983l5SopsX2xL7Kuda5XPgCyYwx_VVeuG0"
                              style={{
                                textDecoration: "underline",
                                display: "inline-block",
                                fontSize: "0.7rem",
                              }}
                            >
                              Se désabonner
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResetEmail;
