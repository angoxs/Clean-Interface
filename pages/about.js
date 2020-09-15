import Header from "../components/header";
import Hero from "../components/hero";

export default function about() {
  return (
    <div>
      <Header />
      <Hero
        title="Making beautiful things across the web"
        subtitle="Anything you might have in mind."
      />
    </div>
  );
}
