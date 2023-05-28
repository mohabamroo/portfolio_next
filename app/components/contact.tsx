export default function ContactSection() {
  return (
    <div id="contact" className="card w-full bg-base-100 h-96 shadow-xl image-full">
      <figure>
        <img
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            filter: "brightness(0.3)"
          }}
          src="/img/background.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl">Got a new project idea?</h2>
        <p className="text-2xl my-4">Don't hesitate to contact me!</p>
        <div className="card-actions justify-end">
          <a href="tel:+1100828725" className="btn btn-light">
            Call Phone
          </a>
          <a href="mailto:mohabamr1@gmail.com" className="btn btn-primary">
            Send Mail
          </a>
        </div>
      </div>
    </div>
  );
}
