import SectionLayout from "../components/home/section-layout";

export default function Home() {
  return (
    <>
      <div className="bg-primary">
        <SectionLayout
          title={`효과적인
                  영어 복습을 위한 
                  최고의 도구`}
          desc={`시간과 장소에 구애받지 않는 온라인 학습 환경에서, 자신만의 학습 진도를 추적하고 평가하세요. 무료 체험 기간을 통해 지금 바로 학습을 시작할 수 있습니다!`}
          imgUrl="/images/banner_study.png"
          bgColor="bg-primary"
          isImage
        />
      </div>
      <div className="bg-white">
        <SectionLayout
          title={`망각 곡선 알림`}
          desc={`잊어버린 지식을 회상하고 신뢰성 있는 영어 능력을 구축하세요.

          망각곡선 알림으로 지속적인 복습을 통해 언어 실력을 향상시키세요.`}
          imgUrl="/logo512.png"
          textColor="text-black"
          isReverse
          isImage={false}
          isSecondary
        />
      </div>
      <div className="bg-white">
        <SectionLayout
          title={`학습 추적`}
          desc={`학습의 흔적을 남기고 성장을 확인하세요. 

        1년 동안의 학습 활동을 기록하고, 자신만의 학습 장소를 꾸미는 즐거움을 느껴보세요.`}
          imgUrl="/images/banner_calendar.png"
          textColor="text-black"
          isImage
          isLast
          isSecondary
        />
      </div>
    </>
  );
}
