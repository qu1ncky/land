import { Box, Button, Container, Typography } from '@mui/material';

const Prices = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        fontWeight={600}
        color="text.primary"
        mb={6}
        sx={{ fontSize: { xs: 32, md: 48 } }}>
        Стоимость тренажеров
      </Typography>
      <Box mb={20}>
        <Box
          display="flex"
          alignItems="center"
          mb={10}
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Box width={1} mb={2}>
            <Typography variant="h5" color="text.primary" mb={2}>
              Строительство
            </Typography>
            <Box mb={2}>
              <Typography fontWeight={700} color="primary.main">
                500+ вопросов с ответами
              </Typography>
              <Typography fontWeight={700} color="primary.main">
                7 практических задач с разбором
              </Typography>
            </Box>
            <Typography color="text.primary">
              Тренажер содержит полный список вопросов экзамена НОК с ответами, а также полный
              разбор 7 практических задач.
            </Typography>
          </Box>
          <Box width={1} display="flex" flexDirection="column" alignItems="center">
            <Typography mb={2} fontSize={48} color="primary.main" fontWeight={700}>
              6 000 ₽
            </Typography>
            <Button
              sx={{
                boxShadow: 0,
                width: { xs: 1, md: 300 },
                fontSize: 18,
                height: 50,
                fontWeight: 500,
                bgcolor: 'primary.main',
                color: 'text.secondary',
                transition: 'all 0.3s ease-in-out', // Плавный переход
                '&:hover': {
                  bgcolor: 'success.main', // Изменение фона при наведении
                },
              }}>
              Купить
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          mb={10}
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Box width={1} mb={2}>
            <Typography variant="h5" color="text.primary" mb={2}>
              Проектирование
            </Typography>
            <Box mb={2}>
              <Typography fontWeight={700} color="primary.main">
                450+ вопросов с ответами
              </Typography>
              <Typography fontWeight={700} color="primary.main">
                Пример портфолио
              </Typography>
            </Box>
            <Typography color="text.primary">
              Каждый вопрос сопровождается верным ответом и подробным объяснением. Кроме тренажера,
              вы получите доступ к примеру портфолио.
            </Typography>
          </Box>
          <Box width={1} display="flex" flexDirection="column" alignItems="center">
            <Typography mb={2} fontSize={48} color="primary.main" fontWeight={700}>
              6 000 ₽
            </Typography>
            <Button
              sx={{
                boxShadow: 0,
                width: { xs: 1, md: 300 },
                fontSize: 18,
                height: 50,
                fontWeight: 500,
                bgcolor: 'primary.main',
                color: 'text.secondary',
                transition: 'all 0.3s ease-in-out', // Плавный переход
                '&:hover': {
                  bgcolor: 'success.main', // Изменение фона при наведении
                },
              }}>
              Купить
            </Button>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Box width={1} mb={2}>
            <Typography variant="h5" color="text.primary" mb={2}>
              Инженерные изыскания
            </Typography>
            <Box mb={2}>
              <Typography fontWeight={700} color="primary.main">
                450+ вопросов с ответами
              </Typography>
              <Typography fontWeight={700} color="primary.main">
                Пример портфолио
              </Typography>
            </Box>
            <Typography color="text.primary">
              Тренажер помогает специалистам в области изысканий подготовиться к теоретической части
              независимой квалификационной оценки.
            </Typography>
          </Box>
          <Box width={1} display="flex" flexDirection="column" alignItems="center">
            <Typography mb={2} fontSize={48} color="primary.main" fontWeight={700}>
              6 000 ₽
            </Typography>
            <Button
              sx={{
                boxShadow: 0,
                width: { xs: 1, md: 300 },
                fontSize: 18,
                height: 50,
                fontWeight: 500,
                bgcolor: 'primary.main',
                color: 'text.secondary',
                transition: 'all 0.3s ease-in-out', // Плавный переход
                '&:hover': {
                  bgcolor: 'success.main', // Изменение фона при наведении
                },
              }}>
              Купить
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Prices;
