// import WidgetCategory from "./WidgetCategory";
// import WidgetInstagramPost from "./WidgetInstagramPost";
import WidgetNewsletter from "./WidgetNewsletter";
import WidgetPostList from "./WidgetPostList";
// import WidgetSearch from "./WidgetSearch";
import WidgetSocialShare from "./WidgetSocialShare";

const SidebarOne = ({ dataPost }) => {
  return (
    <div className="sidebar-inner">
      {/* <WidgetCategory catData={dataPost} /> */}
      {/* <WidgetSearch /> */}
      <WidgetPostList postData={dataPost} />
      <WidgetSocialShare />
      <WidgetNewsletter />
      {/* <WidgetInstagramPost /> */}
    </div>
  );
};

export default SidebarOne;
