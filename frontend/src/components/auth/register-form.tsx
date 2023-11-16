import { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { AuthType } from "../../pages/auth";

interface RegisterFormProps {
  setAuth: (type: AuthType) => void;
}

type FormData = {
  nickname: string;
  username: string;
  password: string;
  passwordConfirm: string;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ setAuth }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const loginData = await axios
        .post(
          "http://localhost:8080/api/signup",
          {
            data,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((data) => data);
      console.log(loginData);
      toast.success("로그인에 성공하셨습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
      toast.error("로그인 실패", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="mt-8 w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold">닉네임</span>
        </label>
        <input
          type="text"
          placeholder="열심이"
          className="input input-primary input-bordered w-full"
          disabled={isLoading}
          {...register("nickname", {
            required: "닉네임을 입력해 주세요",
            minLength: {
              value: 2,
              message: "최소 2글자 이상 입력해야 합니다.",
            },
            maxLength: {
              value: 15,
              message: "15글자 이상은 입력하실 수 없습니다.",
            },
          })}
        />
        <label className="label">
          <span className="label-text-alt text-error">
            {errors.nickname?.message}
          </span>
        </label>
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold">이메일</span>
        </label>
        <input
          type="email"
          placeholder="example@naver.com"
          className="input input-primary input-bordered w-full"
          disabled={isLoading}
          {...register("username", {
            required: "이메일을 입력해 주세요",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "유효한 이메일 형식이 아닙니다.",
            },
          })}
        />
        <label className="label">
          <span className="label-text-alt text-error">
            {errors.username?.message}
          </span>
        </label>
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold">비밀번호</span>
        </label>
        <input
          type="password"
          placeholder="**********"
          className="input input-primary input-bordered w-full"
          {...register("password", {
            required: "비밀번호를 입력해 주세요",
            minLength: {
              value: 8,
              message: "비밀번호는 8글자 이상이어야 합니다.",
            },
            pattern: {
              value:
                /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
              message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
            },
          })}
          disabled={isLoading}
        />
        <label className="label">
          <span className="label-text-alt text-error">
            {errors.password?.message}
          </span>
        </label>
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold">비밀번호 확인</span>
        </label>
        <input
          type="password"
          placeholder="**********"
          className="input input-primary input-bordered w-full"
          {...register("passwordConfirm", {
            required: "비밀번호 확인을 입력해 주세요",
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "비밀번호가 일치하지 않습니다.";
              }
            },
          })}
          disabled={isLoading}
        />
        <label className="label">
          <span className="label-text-alt text-error">
            {errors.passwordConfirm?.message}
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 btn btn-primary w-full text-white"
        disabled={isLoading}
      >
        회원가입
      </button>
      <div className="mt-4 flex items-center gap-x-3">
        <p className="text-xs text-neutral">아직 계정이 없으신가요?</p>
        <span
          className="link-primary text-xs cursor-pointer "
          onClick={() => setAuth("login")}
        >
          로그인 하러 가기
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;
