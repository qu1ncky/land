import { Box, Card, Container, Typography } from '@mui/material';

const Profits = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        fontWeight={600}
        color="text.primary"
        textAlign="center"
        mt={7}
        mb={6}
        sx={{ fontSize: { xs: 36, md: 48 } }}>
        Преимущества нашего тренажера НОК
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        gap={4}
        mb={5}
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Card
          sx={{
            width: 1,
            p: 4,
            backgroundColor: 'background.default',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: 'background.paper',
            },
          }}>
          <Typography mb={3} variant="h5" color="primary.main" fontWeight={600}>
            Комплексная подготовка
          </Typography>
          <Typography>
            Наш тренажер охватывает все аспекты независимой оценки квалификации в строительстве,
            инженерных изысканиях, градостроительстве и архитектурно-строительном проектировании.
          </Typography>
        </Card>
        <Card
          sx={{
            width: 1,
            p: 4,
            backgroundColor: 'background.default',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: 'background.paper',
            },
          }}>
          <Typography mb={3} variant="h5" color="primary.main" fontWeight={600}>
            Актуальность знаний
          </Typography>
          <Typography>
            Мы следим за новыми стандартами и нормативами, чтобы ваша подготовка всегда
            соответствовала самым последним требованиям.
          </Typography>
        </Card>
        <Card
          sx={{
            width: 1,
            p: 4,
            backgroundColor: 'background.default',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: 'background.paper',
            },
          }}>
          <Typography mb={3} variant="h5" color="primary.main" fontWeight={600}>
            Практическая направленность
          </Typography>
          <Typography>
            Наши методики основываются на реальных ситуациях и практических заданиях, что позволяет
            максимально приблизить процесс подготовки к реальной сдаче экзамена.
          </Typography>
        </Card>
      </Box>
    </Container>
  );
};

export default Profits;
