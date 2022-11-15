// import Link from "next/link";
// import { slugify } from "../../../../utils";

const PostTagShare = () => {
  return (
    <>
      {/* <div className="tagcloud">
        {postTags.tags.map((data, index) => (
          <Link href={`/tag/${slugify(data)}`} key={index}>
            <a>{data}</a>
          </Link>
        ))}
      </div> */}
      <div className="social-share-block">
        <div className="post-like">
          {/* <link href="#" />
          <a>
            <i className="fal fa-thumbs-up" />
            <span>2.2k Like</span>
          </a> */}
        </div>
        <ul className="social-icon icon-rounded-transparent md-size">
          <li>
            <a href="https://www.instagram.com/ev_initiative/">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/EV_Initiative">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@ev_initiative">
              <i className="fab fa-tiktok" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/ev-initiative/about/">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PostTagShare;
