import { useState } from "react";
import { useForm } from "react-hook-form";

import clsx from "clsx";

import ReactQuill from "react-quill";
import { modules } from "../../utils/editor";

import { TagsInput } from "react-tag-input-component";

import { Switch } from "@headlessui/react";

import "./custom-quill.css";
import "./tag-input.css";
import { MyStudyFormData } from "../../types/interface";

interface StudyFormProps {
  initialData?: StudyFormProps;
}

const StudyForm: React.FC<StudyFormProps> = ({ initialData }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm<MyStudyFormData>();

  const [value, setValue] = useState("");
  const enabled = true;
  const btnName = initialData ? "수정하기" : "저장하기";

  const [tagNames, setTagNames] = useState<string[]>([]);

  const onSubmit = async (data: MyStudyFormData) => {
    console.log(data);
    try {
    } catch (error: any) {
    } finally {
    }
  };

  return (
    <section className="my-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="title"
          className="w-full text-center text-2xl py-2 px-2 outline-none bg-transparent border-primary
          sm:text-left
          focus:ring-2 focus:ring-primary focus:rounded-md
          "
          placeholder="제목을 입력해 주세요"
        />
        <div
          className="flex justify-center my-4
        sm:justify-start
        "
        >
          <TagsInput
            value={tagNames}
            onChange={setTagNames}
            name="tagList"
            placeHolder="태그를 입력하세요"
          />
        </div>
        <div className="w-full flex justify-end my-3">
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
        </div>
        <ReactQuill
          theme="snow"
          modules={modules}
          value={value}
          onChange={setValue}
          placeholder="복습할 내용을 적어보세요"
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        />
        <div className="w-full flex justify-end">
          <button type="submit" className="w-full btn btn-primary  sm:btn-wide">
            {btnName}
          </button>
        </div>
      </form>
    </section>
  );
};

export default StudyForm;
