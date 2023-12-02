import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Inner from "../../components/common/inner";
import Title from "../../components/common/title";
import StudyForm from "../../components/study/study-form";
import { MyStudyFormData } from "../../types/interface";
import Priview from "../../components/study/priview";

export default function MyStudyWrite() {
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get("id");
  const title = postId
    ? "공부에 잘못된 내용이 있었나요?"
    : "오늘은 어떤 공부를 하셨나요?";

  // 데이터를 가져오기 가져온 데이터가 있으면 그대로 아니면 초기 값 설정
  const [myStudyData, setMyStudyData] = useState<MyStudyFormData>({
    content: "",
    isAlram: false,
    title: "",
    tagList: [],
  });

  return (
    <Inner>
      <div className="flex flex-col gap-2 md:flex-row">
        <section className="flex-1">
          {/* 글쓰기 */}
          <div className="sm:max-w-[266px]">
            <Title title={title} />
          </div>
          <StudyForm
            myStudyData={myStudyData}
            setMyStudyData={setMyStudyData}
          />
        </section>
        <div className="hidden lg:divider lg:divider-horizontal"></div>
        <section className="hidden lg:block flex-1 border-2 border-primary border-dashed rounded-lg ">
          {/* 미리보기 */}
          <Priview priviewData={myStudyData} />
        </section>
      </div>
    </Inner>
  );
}
