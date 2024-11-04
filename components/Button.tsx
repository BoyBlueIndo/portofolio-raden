import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  href?: string;
};

const Button = ({ type, title, icon, variant, href }: ButtonProps) => {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flexCenter gap-2 rounded-full border ${variant}`}
    >
      <label className='font-[500] whitespace-nowrap cursor-pointer'>
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={16} height={16} />}
    </a>
  ) : (
    <button
      className={`flexCenter gap-2 rounded-full border ${variant}`}
      type={type}
    >
      <label className='font-[500] whitespace-nowrap cursor-pointer'>
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={16} height={16} />}
    </button>
  );
};


export default Button;
