import { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import { AuthType } from "../../pages/auth";

interface RegisterFormProps {
  setAuth: (type: AuthType) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ setAuth }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    nickname: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const reset = () => {
    setFormData({
      nickname: "",
      username: "",
      password: "",
      passwordConfirm: "",
    });
    setErrorMsg("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = (password: string) => {
    const minLength = 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (minLength <= password.length && hasNumber && hasSpecialChar) {
      return true;
    }
    return false;
  };

  const validateForm = () => {
    const { nickname, username, password, passwordConfirm } = formData;

    if (!nickname || !username || !password || !passwordConfirm) {
      setErrorMsg("모든 필드가 입력되어야 합니다.");
      return false;
    }

    if (validatePassword(password)) {
      setErrorMsg(
        "비밀번호는 숫자와 영문 8글자 이상 특수문자가 포함되어야 합니다."
      );
      return false;
    }

    if (password !== passwordConfirm) {
      setErrorMsg("비밀번호가 일치하지 않습니다.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 서버와 통신 시작

    if (validateForm()) {
      try {
        setIsLoading(true);
        const loginData = await axios
          .post(
            "http://localhost:8080/api/login",
            {
              formData,
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
        reset();
      }
    }
  };

  return (
    <form className="mt-8 w-full" onSubmit={handleSubmit}>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold">닉네임</span>
        </label>
        <input
          name="nickname"
          type="text"
          placeholder="열심이"
          className="input input-primary input-bordered w-full"
          value={formData.nickname}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold">이메일</span>
        </label>
        <input
          name="username"
          type="email"
          placeholder="example@naver.com"
          className="input input-primary input-bordered w-full"
          value={formData.username}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold">비밀번호</span>
        </label>
        <input
          name="password"
          type="password"
          placeholder="**********"
          className="input input-primary input-bordered w-full"
          value={formData.password}
          required
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold">비밀번호 확인</span>
        </label>
        <input
          name="passwordConfirm"
          type="password"
          placeholder="**********"
          className="input input-primary input-bordered w-full"
          value={formData.passwordConfirm}
          required
          onChange={handleChange}
          disabled={isLoading}
        />
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
