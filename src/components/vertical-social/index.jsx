const Li_A = ({ nameIco, extlink }) => (
  <li>
    <a href={extlink} target="_blank" rel="noreferrer noopener">
      <i className={nameIco} aria-hidden="true"></i>
    </a>
  </li>
);

const SecVerticalSocial = ({ data }) => {
  return (
    <div className="vertical-social">
      <ul>
        {data &&
          data.map((item, key) => (
            <Li_A nameIco={item.nameIco} extlink={item.extlink} key={key} />
          ))}
      </ul>
    </div>
  );
};

export default SecVerticalSocial;
