import { useLocation, useSearchParams } from "react-router-dom";
import Inner from "../../components/common/inner";
import Title from "../../components/common/title";
import StudyForm from "../../components/study/study-form";

export default function MyStudyWrite() {
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get("id");
  const title = postId
    ? "공부에 잘못된 내용이 있었나요?"
    : "오늘은 어떤 공부를 하셨나요?";

  return (
    <Inner>
      <section className="sm:max-w-[266px]">
        <Title title={title} />
      </section>
      <StudyForm />
    </Inner>
  );
}
