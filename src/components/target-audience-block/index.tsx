import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const TargetAudienceBlock = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        fontWeight={600}
        color="text.primary"
        mb={6}
        sx={{ fontSize: { xs: 32, md: 48 } }}>
        Кому подойдет этот курс?
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} mb={15}>
        <Accordion sx={{ bgcolor: 'text.secondary', boxShadow: 0 }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon htmlColor="#2667D3" />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              '& .MuiAccordionSummary-expandIconWrapper': {
                order: -1,
                marginRight: 2,
              },
            }}>
            <Typography variant="h5" color="text.primary">
              Специалистам, которые уже внесены в НРС
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Строители, у которых заканчивается срок действия удостоверения о повышении
              квалификации в 2022 г. Согласно приказу Минстроя России от 30.06.2022 № 529/пр
              предусмотрена возможность пройти обязательную независимую процедуру подтверждения
              квалификации до 1 сентября 2023 года. Стоит отметить, что такая возможность ведомством
              предоставлена для специалистов в качестве переходного периода.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bgcolor: 'text.secondary', boxShadow: 0 }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon htmlColor="#2667D3" />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{
              '& .MuiAccordionSummary-expandIconWrapper': {
                order: -1,
                marginRight: 2,
              },
            }}>
            <Typography variant="h5" color="text.primary">
              Специалистам, у которых заканчивается срок действия удостоверения о повышении
              квалификации
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Согласно приказу Минстроя России от 30.06.2022 № 529/пр предусмотрена возможность
              пройти обязательную независимую процедуру подтверждения квалификации до 1 сентября
              2023 года. Стоит отметить, что такая возможность ведомством предоставлена для
              специалистов в качестве переходного периода.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bgcolor: 'text.secondary', boxShadow: 0 }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon htmlColor="#2667D3" />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              '& .MuiAccordionSummary-expandIconWrapper': {
                order: -1,
                marginRight: 2,
              },
            }}>
            <Typography variant="h5" color="text.primary">
              Специалистам с трудовым стажем 5 лет, для включения в реестр
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Специалисты строительного сектора с трудовым стажем 5 лет могут подавать документы в
              НОСТРОЙ для включения в НРС только после прохождения независимого экзамена,
              подтверждающего факт о повышении квалификации.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default TargetAudienceBlock;
