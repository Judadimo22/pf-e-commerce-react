import { Box } from '@chakra-ui/react';
import Notification from './Notificaciones';

export default function VistasNotificaciones() {
  const images = [
    "https://img.freepik.com/free-psd/fashion-sale-poster-template_23-2148633870.jpg",
    "https://img-aws.ehowcdn.com/560x560/photos.demandstudios.com/getty/article/88/117/200446273-001.jpg",
    "https://skintdad.co.uk/wp-content/uploads/2022/03/ff-clothing-sale.png",
    "https://media.istockphoto.com/id/1006542930/photo/shopping-sale-seasonal-discount-on-clothes-in-apparel-shop-store-or-mall.jpg?s=170667a&w=0&k=20&c=F0Hr9PFZol28bOMKBDnS7s7XSGhX-f8NyqNFzREJfCE=",
  ];

  const handleClickImage = () => {
    window.location.href = '/home';
  };

  return (
    <Box maxW="800px" mx="auto">
      <Notification
        title="Offers"
        text="¡Take advantage of these incredible offers right now!"
        images={images}
        onClickImage={handleClickImage}
      />
    </Box>
  );
}