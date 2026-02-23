import "./Credits.css";

export default function Credits() {

  return (

    <section className="credits-page">

      <div className="credits-container">

        <h1>Credits & Attribution</h1>

        <p className="credits-updated">
          Last updated: March 2026
        </p>


        <h2>Images</h2>

        <p>
          Some images used on this website are provided by{" "}
          <a
            href="https://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>.
          These images are used under Freepik license.
        </p>


        <h2>News Content</h2>

        <p>
          News articles displayed on this website are powered by{" "}
          <a
            href="https://gnews.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            GNews API
          </a>.
        </p>


        <h2>Maps and Location</h2>

        <p>
          Location services are provided using{" "}
          <a
            href="https://www.openstreetmap.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenStreetMap
          </a>{" "}
          and related open-source services.
        </p>


        <h2>Icons</h2>

        <p>
          Icons used on this website are provided by{" "}
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Icons
          </a>.
        </p>


        <h2>Website Technology</h2>

        <ul>

          <li>React.js – Frontend framework</li>

          <li>Firebase – Database and backend services</li>

          <li>Cloudinary – Image hosting and optimization</li>

          <li>Vercel – Website hosting and deployment</li>

        </ul>


        <h2>Clinic Information</h2>

        <div className="credits-contact">

          <p>
            <strong>
              Dr Vikas Homoeopathy and Naturopathy Clinic
            </strong>
          </p>

          <p>
            Chirala, Andhra Pradesh, India
          </p>

          <p>
            Email: vikashomoeopathy@gmail.com
          </p>

          <p>
            Phone: +91 7396803203
          </p>

        </div>

      </div>

    </section>

  );

}