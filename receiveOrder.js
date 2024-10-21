exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);
    const { name, phone, cart } = data;

    // Aquí puedes enviar la solicitud a un correo o almacenarla en una base de datos
    console.log('Solicitud de recogida:', { name, phone, cart });

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Solicitud recibida con éxito.' })
    };
};
