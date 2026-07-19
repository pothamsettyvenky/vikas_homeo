import "./HomeopathyKit.css";


// import Homekit from "../asessts/kit/homekit.png";
// import travelEco from "../asessts/kit/eco_freindly.png";

export default function HomeopathyKit() {

  const whatsappNumber = "918096050488"; // add your number later

  const handleWhatsApp = (kitName) => {
    const message = `Hello, I want to order the ${kitName}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const kits = [
    {
      title: "Children Kit (Pediatric Kit)",
      items: [
        {
          variant: "Basic Kit",
          price: "₹999",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482432/kit1_exxnnc.jpg",
          description: "Safe and gentle remedies for common childhood conditions.",
          features: [
            "Child safe",
            "Gentle remedies",
            "Fever relief",
            "Easy use"
          ]
        },
        {
          variant: "Eco-Friendly Kit",
          price: "₹1499",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482432/kit2_wymghl.jpg",
          description: "Premium eco-friendly pediatric homeopathy kit.",
          features: [
            "German remedies",
            "Eco storage",
            "Premium quality",
            "Child safe"
          ]
        }
      ]
    },

    {
      title: "First Aid Kit",
      items: [
        {
          variant: "Basic Kit",
          price: "₹1299",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773422576/FIRSTBASIC_zdstxq.png",
          description: "Natural emergency kit for injuries and pain.",
          features: [
            "Injury relief",
            "Pain support",
            "Quick recovery",
            "Emergency care"
          ]
        },
        {
          variant: "Eco-Friendly Kit",
          price: "₹1999",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773422578/FIRSTECO_qdjzd2.png ",
          description: "Premium eco-friendly emergency homeopathy kit.",
          features: [
            "German remedies",
            "Eco storage",
            "Emergency care",
            "Durable case"
          ]
        }
      ]
    },

    {
      title: "Travel Kit",
      items: [
        {
          variant: "Basic Kit",
          price: "₹699",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482432/kit3_x2rfov.jpg",
          description: "Compact homeopathic kit for safe travel care.",
          features: [
            "Compact size",
            "Travel safe",
            "Easy carry",
            "Quick relief"
          ]
        },
        {
          variant: "Eco-Friendly Kit",
          price: "₹999",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482433/kit4_lqagut.jpg",
          description: "Eco-friendly premium kit for travel health support.",
          features: [
            "Eco case",
            "German remedies",
            "Travel friendly",
            "Premium quality"
          ]
        }
      ]
    },

    {
      title: "Family Kit",
      items: [
        {
          variant: "Basic Kit",
          price: "₹1499",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482433/kit5_xjlkyu.jpg",
          description: "Complete homeopathy kit for family health care.",
          features: [
            "Family safe",
            "Daily care",
            "Common remedies",
            "Easy use"
          ]
        },
        {
          variant: "Eco-Friendly Kit",
          price: "₹2499",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482433/kit6_kbypaj.jpg",
          description: "Premium eco-friendly complete family care kit.",
          features: [
            "German remedies",
            "Eco storage",
            "Family safe",
            "Long shelf"
          ]
        }
      ]
    }
  ];

  return (
    <section className="kit-page">

      <div className="kit-header">
        <h1>Homeopathy Kits</h1>
        <p>
          Premium German-made homeopathic remedies for safe and effective care.
        </p>
      </div>

      {kits.map((section,index)=>(
        <div className="kit-section" key={index}>

          <h2 className="kit-section-title">{section.title}</h2>

          <div className="kit-grid">

            {section.items.map((kit,i)=>(
              <div className="kit-card" key={i}>

                <div className="kit-image">
                  <img src={kit.image} alt={kit.variant}/>
                </div>

                <div className="kit-card-inner">

                  <h3>{kit.variant}</h3>

                  <p className="desc">{kit.description}</p>

                  <div className="kit-price">{kit.price}</div>

                  <ul className="kit-features">
                    {kit.features.map((f,i)=>(
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <button
                    className="kit-btn"
                    onClick={()=>handleWhatsApp(section.title + " - " + kit.variant)}
                  >
                    Contact Us
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      ))}

    </section>
  );
}