import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import clsx from "clsx";

import ReactQuill, { Quill } from "react-quill";
import { ImageActions } from "@xeger/quill-image-actions";
import { ImageFormats } from "@xeger/quill-image-formats";

import { TagsInput } from "react-tag-input-component";

import { Switch } from "@headlessui/react";

import "./custom-quill.css";
import "./tag-input.css";

import { MyStudyFormData } from "../../types/interface";
import { useMyStudyPostMutation } from "../../hooks/useStudy";
import useEditor from "../../hooks/useEditor";

interface StudyFormProps {
  initialData?: MyStudyFormData;
}

// quill 초기화
Quill.register("modules/imageActions", ImageActions);
Quill.register("modules/imageFormats", ImageFormats);

const StudyForm: React.FC<StudyFormProps> = ({ initialData }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
    setValue,
  } = useForm<MyStudyFormData>();

  const btnName = initialData ? "수정하기" : "저장하기";

  const [tagNames, setTagNames] = useState<string[]>([]);
  const [isAlram, setIsAlram] = useState<boolean>(false);
  const [contentsValue, setContentsValue] = useState("");

  const editorRef = useRef(null);
  const { modules, formats } = useEditor(editorRef);

  const mutation = useMyStudyPostMutation();
  const onSubmit = async (data: MyStudyFormData) => {
    console.log(data);

    // const test = mutation.mutate(data);
    // console.log(test);
  };

  return (
    <section className="my-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            className="w-full text-center text-2xl py-2 px-2 outline-none bg-transparent border-primary
          sm:text-left
          focus:ring-2 focus:ring-primary focus:rounded-md
          "
            placeholder="제목을 입력해 주세요"
            {...register("title", {
              required: "닉네임을 입력해 주세요",
              minLength: {
                value: 3,
                message: "최소 3글자 이상 입력해야 합니다.",
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.title?.message}
            </span>
          </label>
        </div>
        <div
          className="flex justify-center my-4
        sm:justify-start
        "
        >
          <TagsInput
            value={tagNames}
            placeHolder="태그를 입력하세요"
            {...(register("tagList"),
            {
              onChange(tags) {
                setTagNames(tags);
                setValue("tagList", tags);
              },
            })}
          />
        </div>
        <div className="w-full flex justify-end my-3">
          <Switch.Group>
            <Switch.Label
              className={clsx(
                "mr-1 font-bold sm:text-lg transition-all",
                isAlram ? " text-primary " : "text-neutral"
              )}
            >
              {isAlram ? "망각곡선 알림 On" : "망각곡선 알림 Off"}
            </Switch.Label>
            <Switch
              checked={isAlram}
              className={`${
                isAlram ? "bg-primary" : "bg-neutral"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
              {...(register("isAlram"),
              {
                onChange(checked) {
                  setIsAlram(!isAlram);
                  setValue("isAlram", !isAlram);
                },
              })}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  isAlram ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </Switch.Group>
        </div>
        <div>
          <ReactQuill
            theme="snow"
            ref={editorRef}
            value={contentsValue}
            modules={modules}
            formats={formats}
            placeholder="복습할 내용을 적어보세요"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            {...(register("content", {
              required: "내용을 입력해 주세요",
              minLength: {
                value: 10,
                message: "최소 10글자 이상 입력해야 합니다.",
              },
            }),
            {
              onChange(content) {
                setContentsValue(content);
                setValue("content", contentsValue);
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.title?.message}
            </span>
          </label>
        </div>
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
