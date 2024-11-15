import Image from "next/image";
import Redirect from "../_components/redirect";

export default function Assets() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Redirect href="/">
          <Image
            src="/logo-low-racing.svg"
            alt="Logo LowRacing"
            width={300}
            height={300}
            quality={100}
          />
        </Redirect>
        <Image
          src="/coroa.svg"
          alt="Logo LowRacing"
          width={170}
          height={170}
          quality={100}
        />
      </div>
      <Image
        src="/raio.svg"
        alt="Logo LowRacing"
        width={170}
        height={170}
        quality={100}
        className="absolute bottom-20 left-0"
      />
    </div>
  );
}
