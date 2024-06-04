import { Box, Container, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import testExampleUrl from '../../assets/videos/test_example.mp4';
import taskExampleUrl from '../../assets/videos/task_example.mp4';
import testExamplePreview from '../../assets/images/testExamplePreview.jpg';
import taskExamplePreview from '../../assets/images/taksExamplePreview.jpg';

const ExampleBlock = () => {
  // const testExampleUrl = 'https://www.youtube.com/watch?v=ZHYd1JFLVlg';
  // const taskExampleUrl = 'https://www.youtube.com/watch?v=yRBg0Xr0T2k';

  return (
    <Container>
      <Typography
        variant="h3"
        fontWeight={600}
        color="primary.main"
        sx={{ fontSize: { xs: 32, md: 48 } }}>
        Видеообзор
      </Typography>
      <Typography
        variant="h3"
        fontWeight={600}
        color="text.primary"
        mb={6}
        sx={{ fontSize: { xs: 32, md: 48 } }}>
        работы тренажера
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        mb={15}>
        <Box flex={1} mr={{ md: 7 }} mb={{ xs: 2, md: 0 }}>
          <Typography variant="h5" fontWeight={600} color="text.primary" mb={3}>
            Пример использования тренажера
          </Typography>
          <Box position="relative" paddingTop="56.25%" /* Aspect ratio 16:9 */>
            <ReactPlayer
              playIcon={<PlayCircleIcon sx={{ transform: 'scale(3)' }} htmlColor="#2667D3" />}
              light={testExamplePreview}
              url={testExampleUrl}
              controls
              width="100%"
              height="100%"
              playing
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </Box>
        </Box>
        <Box flex={1}>
          <Typography variant="h5" fontWeight={600} color="text.primary" mb={3}>
            Пример разбора задач
          </Typography>
          <Box position="relative" paddingTop="56.25%" /* Aspect ratio 16:9 */>
            <ReactPlayer
              playIcon={<PlayCircleIcon sx={{ transform: 'scale(3)' }} htmlColor="#2667D3" />}
              light={taskExamplePreview}
              url={taskExampleUrl}
              controls
              width="100%"
              height="100%"
              playing
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ExampleBlock;
