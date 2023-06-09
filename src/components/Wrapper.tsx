import { WrapperProps } from "@/utils/type";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Wrapper({ children, className }: WrapperProps) {
  const socialClassNames = "text-3xl cursor-pointer text-White xl:w-14 xl:h-14";
  return (
    <section className={className}>
      <div className="fixed w-[20rem] h-[20rem] xs:w-[28rem] xs:h-[28rem] md:w-[50rem] md:h-[50rem]  md:-left-10 md:-top-40 -z-10 bg-Blur rounded-full blur-3xl"></div>
      <>{children}</>

      <div className="fixed bottom-12 left-6 hidden md:flex items-center flex-col gap-4">
        <Link href={"https://github.com/Damsbot64"} target={"_blank"}>
          <AiFillGithub className={socialClassNames} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/damien-durand-952515247/"}
          target={"_blank"}
        >
          <AiFillLinkedin className={socialClassNames} />
        </Link>
      </div>
    </section>
  );
}
