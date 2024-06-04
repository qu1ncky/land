import { Box, Container, Link, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Footer = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ mb: { xs: 10, md: 0 } }}>
          <Typography variant="h4" color="text.primary" mb={2}>
            Контакты
          </Typography>
          <Box mb={0.5} display="flex" alignItems="center" gap={1}>
            <Typography fontSize={18}>Email:</Typography>
            <Link fontSize={18} href="mailto:skilltoday@mail.ru">
              skilltoday@mail.ru
            </Link>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography fontSize={18}>Социальные сети:</Typography>
            <Link target="_blank" href="https://t.me/evoznikas">
              <TelegramIcon sx={{ transform: 'scale(1.5)', mr: 1 }} htmlColor="primary.main" />
            </Link>
            <Link target="_blank" href="https://wa.me/79524539292">
              <WhatsAppIcon sx={{ transform: 'scale(1.5)' }} htmlColor="primary.main" />
            </Link>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" color="text.primary" mb={2}>
            Документы и правовая информация
          </Typography>
          <Link
            sx={{ textDecoration: 'none' }}
            href="https://drive.google.com/uc?export=download&id=1kUw83314r3dnCUneqngep6V9Fex21YGG">
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              mb={2}
              sx={{ border: 1, p: 1, borderRadius: 2 }}>
              <PictureAsPdfIcon htmlColor="primary.main" />
              <Typography>Юридическая информация</Typography>
            </Box>
          </Link>
          <Link
            sx={{ textDecoration: 'none', mb: 2 }}
            href="https://drive.google.com/uc?export=download&id=1hZOr4U-CHcFoqXT4a7Et4grTWY8dYrjL">
            <Box
              mb={2}
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ border: 1, p: 1, borderRadius: 2 }}>
              <PictureAsPdfIcon htmlColor="primary.main" />
              <Typography>Публичная оферта</Typography>
            </Box>
          </Link>
          <Link
            sx={{ textDecoration: 'none', mb: 2 }}
            href="https://drive.google.com/uc?export=download&id=1EvNGgvTnAnxi7ygypQpOsaHKLaYiACAT">
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ border: 1, p: 1, borderRadius: 2 }}>
              <PictureAsPdfIcon htmlColor="primary.main" />
              <Typography>Политика обработки персональных данных</Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
