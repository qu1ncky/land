import { useState } from 'react';
import { Box, Button, Container, Modal, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const Iframe = styled('iframe')({
  width: '100%',
  height: '100%',
  border: 'none',
});

const Prices = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOpen = (link: string) => {
    setUrl(link);
    setLoading(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLoading(false);
  };

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <Container id="prices">
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
          justifyContent="space-between"
          mb={10}
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Box width={1} mb={2}>
            <Typography id="construction" variant="h5" color="text.primary" mb={2}>
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
              onClick={() => handleOpen('https://skilltoday.ru/pay/cmbynaf')}
              sx={{
                boxShadow: 0,
                width: { xs: 1, md: 300 },
                fontSize: 18,
                height: 50,
                fontWeight: 500,
                bgcolor: 'primary.main',
                color: 'text.secondary',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  bgcolor: 'success.main',
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
            <Typography id="design" variant="h5" color="text.primary" mb={2}>
              Проектирование (Главный инженер проекта)
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
              onClick={() => handleOpen('https://skilltoday.ru/pay/vjmxzgb')}
              sx={{
                boxShadow: 0,
                width: { xs: 1, md: 300 },
                fontSize: 18,
                height: 50,
                fontWeight: 500,
                bgcolor: 'primary.main',
                color: 'text.secondary',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  bgcolor: 'success.main',
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
            <Typography id="design" variant="h5" color="text.primary" mb={2}>
              Проектирование (Главный архитектор проекта)
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
              Каждый вопрос снабжен точным ответом и подробной разъяснительной информацией.
              Дополнительно, вы получите образец портфолио.
            </Typography>
          </Box>
          <Box width={1} display="flex" flexDirection="column" alignItems="center">
            <Typography mb={2} fontSize={48} color="primary.main" fontWeight={700}>
              6 000 ₽
            </Typography>
            <Button
              onClick={() => handleOpen('https://skilltoday.ru/pay/mgvrled')}
              sx={{
                boxShadow: 0,
                width: { xs: 1, md: 300 },
                fontSize: 18,
                height: 50,
                fontWeight: 500,
                bgcolor: 'primary.main',
                color: 'text.secondary',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  bgcolor: 'success.main',
                },
              }}>
              Купить
            </Button>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Box width={1} mb={2}>
            <Typography id="engineering-survey" variant="h5" color="text.primary" mb={2}>
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
              onClick={() => handleOpen('https://skilltoday.ru/pay/sfvotpr')}
              sx={{
                boxShadow: 0,
                width: { xs: 1, md: 300 },
                fontSize: 18,
                height: 50,
                fontWeight: 500,
                bgcolor: 'primary.main',
                color: 'text.secondary',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  bgcolor: 'success.main',
                },
              }}>
              Купить
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Оплата НОК тренажера"
        aria-describedby="Оплата тренажера для подготовки к НОК экзамену">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', md: '80%', lg: '70%' },
            height: { xs: '70%', md: '80%', lg: '90%' },
            bgcolor: 'text.secondary',
            boxShadow: 24,
            overflow: 'hidden',
          }}>
          {loading && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
              }}>
              <CircularProgress />
            </Box>
          )}
          <Iframe src={url} onLoad={handleIframeLoad} />
        </Box>
      </Modal>
    </Container>
  );
};

export default Prices;
