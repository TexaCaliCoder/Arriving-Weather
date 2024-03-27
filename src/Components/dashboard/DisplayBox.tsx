// External Dependencies
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Local Typings
interface DisplayBoxProps {
  text: string | number | null;
  title: string;
}

// Local variables
const StyledWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    boxShadow: 'inset 0 0 8px #fff, inset -4px -4px 8px #bbb, 4px 4px 5px rgba(0,0,0,0.35)',
    backgroundColor: '#DFEBF0  ', 
    width: '90%',
    margin: 10,
    ".title": {
      display: 'flex',
      borderBottom: '1px solid black',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(194, 229, 242, 0.5)',
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      width: '100%',
    },
    ".text": {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
    },
  }));

const DisplayBox: React.FC<DisplayBoxProps> = ({ title, text }) => {
  return (
    <StyledWrapper>
      <div className="title">
        <Typography variant="h4" textAlign="center">
          {title}
        </Typography>
      </div>
      <div className="text">
        <Typography variant="h4" textAlign="center">
          {text}
        </Typography>
      </div>
    </StyledWrapper>
  );
};

export default DisplayBox;
