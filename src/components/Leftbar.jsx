import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

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
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>List</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column', marginTop: '-19px' }}>
            <Link className="leftbar-tags" to="lists?topic=arraylist">ArrayList</Link>
            <Link className="leftbar-tags" to="lists?topic=single-linked-list">SingleLinkedList</Link>
            <Link className="leftbar-tags" to="lists?topic=double-linked-list">Double LinkedList</Link>
            <Link className="leftbar-tags" to="lists?topic=circular-linked-list">Circular LinkedList</Link>
            <Link className="leftbar-tags" to="lists?topic=stack">Stack</Link>
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
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column', marginTop: '-19px' }}>
            <Link className="leftbar-tags" to="queues?topic=queue">Queue</Link>
            <Link className="leftbar-tags" to="queues?topic=deque">Deque</Link>
            <Link className="leftbar-tags" to="queues?topic=circular-queue">Circular Queue</Link>
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
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column', marginTop: '-19px' }}>
            <Link className="leftbar-tags" to="trees?topic=binary-tree">Binary Tree</Link>
            <Link className="leftbar-tags" to="trees?topic=binary-search-tree">Binary Search Tree</Link>
            <Link className="leftbar-tags" to="trees?topic=N-arry-tree">N-Arry Tree</Link>
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
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column', marginTop: '-19px' }}>
            <Link className="leftbar-tags" to="maps?topic=hashmap">HashMap</Link>
            <Link className="leftbar-tags" to="maps?topic=linkedhashmap">LinkedHashMap</Link>
            <Link className="leftbar-tags" to="maps?topic=treemap">TreeMap </Link>
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
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column', marginTop: '-19px' }}>
            <Link className="leftbar-tags" to="sets?topic=hashset">HashSet</Link>
            <Link className="leftbar-tags" to="sets?topic=linkedhashset">LinkedHashSet</Link>
            <Link className="leftbar-tags" to="sets?topic=treeset">TreeSet</Link>
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
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column', marginTop: '-19px' }}>
            <Link className="leftbar-tags" to="heaps?topic=heap">Heap</Link>
            <Link className="leftbar-tags" to="heaps?topic=heapify">Heap Heapify</Link>
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
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column', marginTop: '-19px' }}>
            <Link className="leftbar-tags" to="tries?topic=trie">Trie</Link>
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
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column', marginTop: '-19px' }}>
            <Link className="leftbar-tags" to="graphs?topic=graph">Graph</Link>
            <Link className="leftbar-tags" to="graphs?topic=graphgeneric">Graph Generic</Link>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
