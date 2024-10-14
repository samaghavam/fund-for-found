
interface TitleProps {
    title: string;
    desc?: string; // Optional description
  }
  
  const Title: React.FC<TitleProps> = ({ title, desc }) => {
    return (
      <>
        <h1 className="text-primary text-3xl font-semibold text-center">{title}</h1>
        {desc && (
          <p className="text-gray4 font-light text-[20px] text-justify md:text-center">
            {desc}
          </p>
        )}
      </>
    );
  };
  
  export default Title;
  