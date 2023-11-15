import axios from "axios";
import { AuthType, FormData } from "../../pages/auth";

interface LoginFormProps {
  formData: FormData;
  setAuth: (type: AuthType) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  reset: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  formData,
  setFormData,
  reset,
  setAuth,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 서버와 통신 시작
    console.log(formData);
    axios
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
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
    reset();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="mt-8 w-full" onSubmit={handleSubmit}>
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
        />
      </div>
      <button type="submit" className="mt-4 btn btn-primary w-full">
        로그인
      </button>
      <div className="mt-4 flex items-center gap-x-3">
        <p className="text-xs text-neutral">아직 계정이 없으신가요?</p>
        <span
          className="link-primary text-xs cursor-pointer"
          onClick={() => setAuth("register")}
        >
          회원가입
        </span>
      </div>
      <div className="divider text-neutral">OR</div>
      <div className="flex items-center justify-center gap-x-4">
        <button type="button" className="btn-square ">
          <img src="/images/Naver.png" alt="btn" />
        </button>
        <button type="button" className="btn-square">
          <img src="/images/Kakao.png" alt="btn" />
        </button>
        <button type="button" className="btn-square ">
          <img src="/images/Instagram.png" alt="btn" />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
