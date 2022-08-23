const Span = () => <span></span>;

const SectionHeading = ({ title, text }) => {
  return (
    <div className="section-heading text-center text-white-75">
      <div
        className="dream-dots justify-content-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {Array(7)
          .fill()
          .map((item, key) => (
            <Span key={key} />
          ))}
      </div>
      <h2 className="text-white-75" data-aos="fade-up" data-aos-delay="300">
        {title}
      </h2>
      <p data-aos="fade-up" data-aos-delay="400">
        {text}
      </p>
    </div>
  );
};

export default SectionHeading;
