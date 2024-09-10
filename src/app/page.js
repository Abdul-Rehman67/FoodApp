import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeMenu />
      <section className="text-center my-10">
        <SectionHeaders mainHeader={"About us"} subHeader={"Our Story"} />
        <div className="gap-4 flex flex-col mx-auto text-gray-500 my-5 -auto mx-w-md">
          <p>Welcome to Pizza ST, where passion for pizza meets perfection! We started with a simple mission: to craft the finest, freshest pizzas and deliver them straight to your door. Every pizza we create is a masterpiece, made with hand-stretched dough, top-quality ingredients, and our signature sauces, ensuring each bite bursts with flavor. Whether you're a fan of classic Margherita, crave the spice of a pepperoni, or want to explore bold new toppings, we’ve got something for everyone.</p>
          <p>Our journey began with a love for authentic pizza and a commitment to excellence. From sourcing the best local ingredients to perfecting our cooking techniques, we ensure that every pizza reflects the care and craftsmanship we put into it. We believe in offering more than just a meal—our goal is to provide a memorable experience. That’s why we’ve designed an easy, user-friendly online ordering system, so you can customize your pizza just the way you like it and have it delivered hot and fresh, right to your doorstep.</p>
        </div>
      </section>
      <section className="text-center my-10">
  <SectionHeaders mainHeader={"Contact Us"} subHeader={"We’d love to hear from you!"} />
  <div className="gap-4 flex flex-col mx-auto text-gray-500 my-5 max-w-sm">
    <p>If you have any questions, feedback, or special requests, feel free to get in touch with us.</p>
    <div>
      <p><strong>Phone:</strong> (123) 456-7890</p>
      <p><strong>Email:</strong> contact@pizzast.com</p>
      <p><strong>Address:</strong> 123 Pizza Lane, Flavor Town, FT 12345</p>
    </div>
  </div>
</section>

    </>
  );
}
