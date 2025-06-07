import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WorldWise helps you track your travels, relive your adventures, and
            plan new ones — all from an interactive world map. Whether you’re a
            casual tourist or a seasoned globetrotter, WorldWise is your
            personal travel journal in the cloud.
          </p>
        </div>
      </section>
    </main>
  );
}
