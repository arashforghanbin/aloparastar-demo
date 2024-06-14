import HomeLayout from "@/app/(routes)/(home)/layout";
import styles from "./page.module.css";
import Home from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}

HomePage.getLayout = function getLayout(page: any) {
  return <HomeLayout>{page}</HomeLayout>;
};
