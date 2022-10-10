import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Leftbar = () => {
  const AccordionStyle = {
    '&:before': {
      backgroundColor: 'transparent !important',
    },
  };
  return (
    <div className="leftbar">
      <div className="accord" style={{ height: 'fit-content', marginTop: '9px', marginBottom: '-9px', overflow: 'hidden' }}>
        <Accordion disableGutters sx={AccordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px'}}>List</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column' ,marginTop:'-19px'}}>
            <a className="leftbar-tags" href="/">ArrayList</a>
            <a className="leftbar-tags" href="/">SingleLinkedList</a>
            <a className="leftbar-tags" href="/">Double LinkedList</a>
            <a className="leftbar-tags" href="/">Circular LinkedList</a>
            <a className="leftbar-tags" href="/">Stack</a>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters sx={AccordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>Queues</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column' ,marginTop:'-19px'}}>
            <a className="leftbar-tags" href="/">Queue</a>
            <a className="leftbar-tags" href="/">Deque</a>
            <a className="leftbar-tags" href="/">Circular Queue</a>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters sx={AccordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>Trees</Typography>
          </AccordionSummary>
         <AccordionDetails style={{ display: 'flex', flexDirection: 'column' ,marginTop:'-19px'}}>
            <a className="leftbar-tags" href="/">Binary Tree</a>
            <a className="leftbar-tags" href="/">Binary Search Tree</a>
            <a className="leftbar-tags" href="/">N-Arry Tree</a>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters sx={AccordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>Maps</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column' ,marginTop:'-19px'}}>
            <a className="leftbar-tags" href="/">HashMap</a>
            <a className="leftbar-tags" href="/">LinkedHashMap</a>
            <a className="leftbar-tags" href="/">TreeMap </a>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters sx={AccordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>Sets</Typography>
          </AccordionSummary>
         <AccordionDetails style={{ display: 'flex', flexDirection: 'column' ,marginTop:'-19px'}}>
            <a className="leftbar-tags" href="/">HashSet</a>
            <a className="leftbar-tags" href="/">LinkedHashSet</a>
            <a className="leftbar-tags" href="/">TreeSet</a>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters sx={AccordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>Heaps</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column' ,marginTop:'-19px'}}>
            <a className="leftbar-tags" href="/">Heap</a>
            <a className="leftbar-tags" href="/">Heap Heapify</a>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters sx={AccordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>Tries</Typography>
          </AccordionSummary>
         <AccordionDetails style={{ display: 'flex', flexDirection: 'column' ,marginTop:'-19px'}}>
            <a className="leftbar-tags" href="/">Trie</a>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters sx={AccordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>Graphs</Typography>
          </AccordionSummary>
         <AccordionDetails style={{ display: 'flex', flexDirection: 'column' ,marginTop:'-19px'}}>
            <a className="leftbar-tags" href="/">Graph</a>
            <a className="leftbar-tags" href="/">Graph Generic</a>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
