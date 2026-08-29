

    const whatsappLink = document.getElementById("whatsapp-link");

    const telefono = "541167459591";

    const mensaje = `Hola Franco, me pongo en contacto con vos a través de tu sitio web.

Me gustaría conocer más sobre tu perfil y/o conversar acerca de una posible oportunidad de trabajo o proyecto.

Quedo atento. Muchas gracias.`;

    whatsappLink.addEventListener("click", function (event) {
        event.preventDefault();

        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });