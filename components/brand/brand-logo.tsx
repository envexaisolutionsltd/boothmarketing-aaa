import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <span className={`relative block aspect-[409/156] overflow-hidden ${className}`}>
      <Image
        src="/booth-marketing-logo.png"
        alt="Booth Marketing"
        width={500}
        height={500}
        priority={priority}
        sizes="(max-width: 640px) 120px, 200px"
        className="absolute left-[-10.5%] top-[-97.4%] h-auto w-[122.25%] max-w-none"
      />
    </span>
  );
}

export function RoseMark({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`relative block aspect-[81/119] overflow-hidden ${className}`}>
      <Image
        src="/booth-marketing-logo.png"
        alt=""
        width={500}
        height={500}
        sizes="96px"
        className="absolute left-[-458%] top-[-127.7%] h-auto w-[617.3%] max-w-none"
      />
    </span>
  );
}
