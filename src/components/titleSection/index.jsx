const TitleSection = ({ titleSectionData }) => {
  return (
    <>
      <div className="section-title-area ltn__section-title-2--- text-center">
        <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
          {titleSectionData.subTitle}
        </h6>
        <h1 className="section-title"> {titleSectionData.title}</h1>
      </div>
    </>
  );
};

export default TitleSection;
