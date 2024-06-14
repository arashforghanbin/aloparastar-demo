import HomeLayout from "@/app/(routes)/(home)/layout";
import Caring from "@/components/Caring";

export default function CaringPage() {
  return (
    <>
      <Caring />
    </>
  );
}

CaringPage.getLayout = function getLayout(page: any) {
  return <HomeLayout>{page}</HomeLayout>;
};
