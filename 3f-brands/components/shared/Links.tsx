
import Link from 'next/link';

interface CustomLinkProps {
  text: string;
  href: string;
  textColor?: string; 
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, href, textColor = 'text-primary' }) => {
  return (
    <Link href={href} className={`${textColor} hover:underline`}>
      {text}
    </Link>
  );
};

export default CustomLink;


