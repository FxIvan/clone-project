import { useRouter } from "next/router";
import DetailBanner from "/component/app/detailBanner";
import DetailContent from "/component/app/detailContent";

export default function TokenInfo() {
  const router = useRouter();

  return (
    <>
      <DetailBanner />
      <DetailContent />
    </>
  );
}
