import * as cloudinary from 'cloudinary-core';

// Crea una nueva instancia de Cloudinary
const cl = new cloudinary.Cloudinary({ cloud_name: 'dlqnb6csq' });

// Exporta la instancia para poder ser usada en otros archivos
export default cl;