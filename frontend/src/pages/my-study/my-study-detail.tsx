import { Switch } from "@headlessui/react";
import { PenSquare, Trash2 } from "lucide-react";

import Inner from "../../components/common/inner";
import clsx from "clsx";

export default function MyStudyDetail() {
  // 데이터 가져오기
  const enabled = true;

  return (
    <Inner>
      <div className="min-h-screen">
        <section>
          <h1
            className="text-2xl font-bold text-center
          sm:text-3xl
          lg:text-4xl
          "
          >
            나의 첫 영어 공부
          </h1>
          <p className="mt-10 text-end text-neutral md:text-lg tracking-widest">
            2023.11.12 에 작성
          </p>
        </section>
        <section className="w-full flex justify-end mt-2">
          <div className="flex items-center gap-x-2">
            <Switch.Group>
              <Switch.Label
                className={clsx(
                  "mr-1 font-bold sm:text-lg transition-all",
                  enabled ? " text-primary " : "text-neutral"
                )}
              >
                {enabled ? "망각곡선 알림 On" : "망각곡선 알림 Off"}
              </Switch.Label>
              <Switch
                checked={enabled}
                onChange={() => {}}
                className={`${
                  enabled ? "bg-primary" : "bg-neutral"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </Switch.Group>
            <PenSquare className="text-neutral hover:text-primary transition-colors cursor-pointer" />
            <Trash2 className="text-neutral hover:text-primary transition-colors cursor-pointer" />
          </div>
        </section>
        <section className="mt-8">위지윅으로 불러온 데이터</section>
      </div>
    </Inner>
  );
}
