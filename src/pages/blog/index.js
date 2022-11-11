import React, { useState } from "react";
import PageHeaderBasic from "@components/common/PageHeaderBasic";
import PageMeta from "@components/common/PageMeta";
import FooterOne from "@layout/Footer/FooterOne";
import NavbarEvPages from "@layout/Header/NavbarEvPages";
import Layout from "@layout/Layout";
import ReactPaginate from "react-paginate";
import SidebarOne from "src/common/components/sidebar/SidebarOne";

import { SortingByDate } from "src/common/utils";

// import ColorSwitcher from "src/common/elements/color-switcher/ColorSwitcher";
import { getAllPosts } from "lib/api";
import PostLayoutTwo from "src/common/components/post/layout/PostLayoutTwo";

const PostListPage = ({ allPosts }) => {
  const [blogs] = useState(allPosts);
  const [pageNumber, setPageNumber] = useState(0);

  const blogsPerPage = 5;
  const pageVisited = pageNumber * blogsPerPage;

  const pageCount = Math.ceil(blogs.length / blogsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Layout>
      <PageMeta title="EV Initiative - eMobility Service Provider & Charge Port Operator" />
      {/* <ColorSwitcher /> */}
      <NavbarEvPages />
      <PageHeaderBasic title="EV Initiative Blog" desc="" />
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <PostLayoutTwo
                dataPost={allPosts}
                show={pageVisited + blogsPerPage}
                postStart={pageVisited}
              />

              {/* <ReactPaginate
                previousLabel={<i className="fas fa-arrow-left"></i>}
                nextLabel={<i className="fas fa-arrow-right"></i>}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                previousLinkClassName={"prev"}
                nextLinkClassName={"next"}
                disabledClassName={"disabled"}
                activeClassName={"current"}
              /> */}
            </div>
            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              <SidebarOne dataPost={allPosts} />
            </div>
          </div>
        </div>
      </div>
      <FooterOne footerLight />
    </Layout>
  );
};

export default PostListPage;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "id",
    "title",
    "featureImg",
    "featured",
    "sticky",
    "postFormat",
    "playBtn",
    "date",
    "slug",
    "cate",
    "cate_img",
    "author_img",
    "author_name",
    "post_views",
    "read_time",
    "author_social",
  ]);

  SortingByDate(allPosts);
  return {
    props: { allPosts },
  };
}
