import SubscribeFormStacked from "@components/forms/SubscribeFormStacked";

const WidgetNewsletter = () => {
  return (
    <div className="axil-single-widget widget widget_newsletter mb--30">
      <div className="newsletter-inner text-center">
        <h4 className="title mb--15">Never Miss A Post!</h4>
        <p className="b2 mb--30">
          Sign up for free and be the first to <br /> get notified about
          updates.
        </p>
        <SubscribeFormStacked />
      </div>
    </div>
  );
};

export default WidgetNewsletter;
