import { Plus } from "lucide-react";

const Avatar = () => {
  return (
    <div className="avatar indicator placeholder cursor-pointer">
      <span className="indicator-item badge badge-success text-white text-xs">
        <Plus size={10} />
        {99}
      </span>
      <div className="bg-neutral text-neutral-content rounded-full w-10 hover:border transition-all">
        <span className="text-xs">MX</span>
      </div>
    </div>
  );
};

export default Avatar;
