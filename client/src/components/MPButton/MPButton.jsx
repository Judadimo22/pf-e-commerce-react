import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function MPButton({ id }) {
  useEffect(() => {
    fetchCheckout();
  }, []);

  const { isAuthenticated, user } = useAuth0();
  // aqui se recibe el body
  console.log(user);
  console.log(id);
  const email = user.email;

  const dataMP = {
    id,
    email,
  };

  const fetchCheckout = async () => {
    const res = await fetch("http://localhost:3001/cloth/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataMP,
      }),
    });
    const data = await res.json();

    // const order = await fetch("http://localhost:3001/feedback", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    // const orden = await order.json();

    console.log("Esto es data:" + data.id);
    if (data) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.setAttribute("data-preference-id", data.id);

      script.onload = async function () {
        const mp = await new window.MercadoPago(
          "TEST-6fa13512-f9b1-4d07-ab5e-fca851a7c8c8",
          {
            locale: "es-AR",
          }
        );
        console.log(data);
        mp.checkout({
          preference: {
            id: data.id,
          },
          render: {
            container: ".cho-container",
            label: "Mercadopago",
            error: function (error) {
              console.log(error);
            },
          },
        });
      };
      document.body.appendChild(script);
    }

    // const mp = new window.MercadoPago(
    //   "TEST-6fa13512-f9b1-4d07-ab5e-fca851a7c8c8",
    //   {
    //     locale: "es-AR",
    //   }
    // );
    // console.log(data);
    // mp.checkout({
    //   preference: {
    //     id: data.id,
    //   },
    //   render: {
    //     container: ".cho-container",
    //     label: "Mercadopago",
    //   },
    // });
  };

  return (
    <>{isAuthenticated ? <div className="cho-container"></div> : <div></div>}</>
  );
}
