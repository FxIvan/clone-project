import { useRouter } from "next/router";
import DetailBanner from "/component/app/detailBanner";
import DetailContent from "/component/app/detailContent";

export default function TokenInfo() {
  const router = useRouter();
  //console.log(router.query.id);
  return (
    <div className="bg-black">
      <DetailBanner />
      <DetailContent />
    </div>
  );
}
