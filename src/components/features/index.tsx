import { Box, Button, Container, Divider, Link, Typography } from '@mui/material';

const Features = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        fontWeight={600}
        color="text.primary"
        mt={15}
        mb={6}
        sx={{ fontSize: { xs: 32, md: 48 } }}>
        Готовим к сдаче НОК строителей, проектировщиков и изыскателей
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        gap={10}
        mb={10}
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box width={1}>
          <Typography variant="h5" fontWeight={600} color="text.primary" mb={1}>
            Главный инженер проекта
          </Typography>
          <Typography fontSize="16px" color="text.primary" mb={1}>
            Специалист по организации
          </Typography>{' '}
          <Typography fontSize="16px" color="text.primary" mb={3}>
            строительства
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderColor: 'divider',
              borderRadius: 1,
              color: 'primary.main',
              '& hr': {
                mx: 1.5,
              },
            }}>
            <Typography fontWeight={700}>Тренажер</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography fontWeight={700}>Разбор практических заданий</Typography>
          </Box>
        </Box>
        <Box width={1}>
          <Typography variant="h5" fontWeight={600} color="text.primary" mb={1}>
            Главный инженер проекта
          </Typography>
          <Typography fontSize="16px" color="text.primary" mb={1}>
            Специалист по организации
          </Typography>
          <Typography fontSize="16px" color="text.primary" mb={2}>
            архитектурно-строительного проектирования
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderColor: 'divider',
              borderRadius: 1,
              color: 'primary.main',
              '& hr': {
                mx: 1.5,
              },
            }}>
            <Typography fontWeight={700}>Тренажер</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography fontWeight={700}>Пример портфолио</Typography>
          </Box>
        </Box>
        <Box width={1}>
          <Typography variant="h5" fontWeight={600} color="text.primary" mb={1}>
            Главный инженер проекта
          </Typography>
          <Typography fontSize="16px" color="text.primary" mb={1}>
            Специалист по организации
          </Typography>
          <Typography fontSize="16px" color="text.primary" mb={1}>
            инженерных изысканий
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderColor: 'divider',
              borderRadius: 1,
              color: 'primary.main',
              '& hr': {
                mx: 1.5,
              },
            }}>
            <Typography fontWeight={700}>Тренажер</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography fontWeight={700}>Пример портфолио</Typography>
          </Box>
        </Box>
      </Box>
      <Link href="https://skilltoday.ru/lwcppenl" target="_blank">
        <Button
          sx={{
            mb: 15,
            boxShadow: 0,
            width: { xs: 1, md: 250 },
            height: 50,
            fontWeight: 500,
            bgcolor: 'primary.main',
            color: 'text.secondary',
            transition: 'all 0.3s ease-in-out', // Плавный переход
            '&:hover': {
              bgcolor: 'success.main', // Изменение фона при наведении
            },
          }}
          variant="contained">
          Попробовать бесплатно
        </Button>
      </Link>
    </Container>
  );
};

export default Features;
