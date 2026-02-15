export default function MapSection() {
  return (
    <section className="w-full">

<div className="w-full aspect-[16/9] grayscale-[100%] contrast-[105%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90325.77072126171!2d-93.34400306043058!3d44.970488873685625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN%2C%20USA!5e0!3m2!1sen!2sin!4v1771145338556!5m2!1sen!2sin"
          className="w-full h-full"

          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Business Location"
        />
      </div>

    </section>
  );
}
