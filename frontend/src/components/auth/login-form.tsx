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
  const handleSubmit = () => {};

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
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold">비밀번호</span>
        </label>
        <input
          name="username"
          type="password"
          placeholder="**********"
          className="input input-primary input-bordered w-full"
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
