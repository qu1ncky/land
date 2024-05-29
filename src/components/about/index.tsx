import { Box, Button, Container, Link, ThemeProvider, Typography } from '@mui/material';
import { theme } from '../../constants/theme';
import styles from './about.module.css';

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box display="flex">
          <Box>
            <Box textAlign="left">
              <Typography
                color="text.secondary"
                mb={2}
                variant="h1"
                fontWeight={700}
                sx={{ fontSize: { xs: 54, sm: 64, md: 96 } }}>
                Тренажер НОК
              </Typography>
              <Typography
                color="text.secondary"
                mb={3}
                variant="h4"
                fontWeight={500}
                sx={{ fontSize: { xs: 24, md: 34 } }}>
                для подготовки к независимой оценке квалификации
              </Typography>
              <Typography color="text.secondary" mb={5}>
                Мы разработали цифровой продукт для подготовки кандидатов к успешному прохождению
                квалификационного экзамена НОК. Наша платформа предлагает комплексное решение,
                включающее более 1000 вопросов с подробными ответами и расшифровками, а также базу
                знаний с собранными нормативными документами.
              </Typography>
            </Box>
            <Box
              display="flex"
              gap={8}
              sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 3 } }}>
              <Box textAlign="left">
                <Typography
                  mb={1}
                  fontWeight={600}
                  fontSize="32px"
                  color="text.secondary"
                  variant="h4">
                  1000+
                </Typography>
                <Typography fontSize="15px" fontWeight={400} color="text.secondary" variant="h6">
                  вопросов в базе
                </Typography>
              </Box>
              <Box textAlign="left">
                <Typography
                  fontWeight={600}
                  mb={1}
                  fontSize="32px"
                  color="text.secondary"
                  variant="h4">
                  Ответы
                </Typography>
                <Typography fontSize="15px" fontWeight={400} color="text.secondary" variant="h6">
                  c расшифровкой
                </Typography>
              </Box>
              <Box textAlign="left">
                <Typography
                  fontWeight={600}
                  mb={1}
                  fontSize="32px"
                  color="text.secondary"
                  variant="h4">
                  База знаний
                </Typography>
                <Typography fontSize="15px" fontWeight={400} color="text.secondary" variant="h6">
                  с собранными нормативными документами
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              mt={5}
              alignItems="center"
              sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
              <Link href="#prices">
                <Button
                  sx={{
                    mt: { md: 3 },
                    mb: 7,
                    mr: { md: 15 },
                    width: { xs: 1, md: 200 },
                    boxShadow: 0,
                    height: 50,
                    fontWeight: 500,
                    bgcolor: 'text.secondary',
                    color: 'text.primary',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      bgcolor: 'success.main', // Изменение фона при наведении
                      color: 'text.secondary', // Изменение цвета текста при наведении
                    },
                  }}
                  variant="contained">
                  Выбрать тренажер
                </Button>
              </Link>
              <Box
                sx={{ alignSelf: { xs: 'flex-start', md: 'center' } }}
                alignSelf="flex-start"
                mb={7}>
                <Typography fontWeight={700} variant="h4" color="success.main">
                  560+
                </Typography>
                <Typography fontSize="15px" color="text.secondary" maxWidth={250}>
                  Учеников успешно сдали экзамен с помощью тренажера
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', xl: 'block' } }} width={1} position="relative">
            <img
              className={styles.gearLarge}
              src="src\assets\gear.png"
              alt="Тренажер НОК для подготовки к независимой оценке квалификации"
            />
            <img
              className={styles.gearMid}
              src="src\assets\gear.png"
              alt="Тренажер НОК для подготовки к независимой оценке квалификации"
            />
            <img
              className={styles.gearSmall}
              src="src\assets\gear.png"
              alt="Тренажер НОК для подготовки к независимой оценке квалификации"
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default About;
