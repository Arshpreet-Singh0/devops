import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {prisma} from "@repo/db/client";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};
export default async function Home() {
  const data = await prisma.user.findFirst();


  return (
    <div className="text-white text-4xl">
        {JSON.stringify(data)};
    </div>
  );
}
