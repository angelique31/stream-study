import React from "react";
import Link from "next/link";

const RichBanner = () => {
  return (
    <div>
      <p> Le Netflix que vous aimez pour juste 5,99 €. </p>
      <p>{`Choisissez l'offre Standard avec pub.`}</p>
      {/* <button>En savoir plus</button> */}
      <Link href="/auth/signup/signup-details" passHref>
        <button>En savoir plus</button>
      </Link>
    </div>
  );
};

export default RichBanner;
