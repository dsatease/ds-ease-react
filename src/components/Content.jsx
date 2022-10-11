import React, { useContext, useEffect, useState } from 'react'
import { Markdownc } from "../components/Markdownc";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import { useParams, useSearchParams } from 'react-router-dom';
import arraylist from '../content/docs/ArrayList.md'
import doublell from '../content/docs/doublell.md'
import singlell from '../content/docs/singlell.md'
import circularll from '../content/docs/circularll.md'
import stack from '../content/docs/stack.md'
import queue from '../content/docs/queue.md'
import deque from '../content/docs/deque.md'
import cqueue from '../content/docs/circularqueue.md'
import bt from '../content/docs/binarytree.md'
import bst from '../content/docs/bst.md'
import narry from '../content/docs/n-arry.md'
import hashmap from '../content/docs/hashmap.md'
import lhashmap from '../content/docs/linkedhashmap.md'
import treemap from '../content/docs/treemap.md'
import hashset from '../content/docs/hashset.md'
import lhashset from '../content/docs/linkedhashset.md'
import treeset from '../content/docs/treeset.md'
import heap from '../content/docs/heap.md'
import heapify from '../content/docs/heapify.md'
import trie from '../content/docs/trie.md'
import graph from '../content/docs/graph.md'
import ggraph from '../content/docs/graphgeneric.md'
import { AppContext } from '../App';

export const Content = () => {
  const [content, setContent] = useState(``)
  const [searchParams] = useSearchParams();
  const params = useParams()
  const context = useContext(AppContext)

  useEffect(() => {
    context.setShowLeft(true)
  }, [context])

  const fetchData = (foo) => {
    fetch(foo).then((res) => {
      return res.text()
    }).then((data) => {
      setContent(data)
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    setContent('')

    if (params.pageid === "lists") {
      if (searchParams.get('topic') === "arraylist") {
        fetchData(arraylist)
      }
      if (searchParams.get('topic') === "single-linked-list") {
        fetchData(singlell)
      }
      if (searchParams.get('topic') === "double-linked-list") {
        fetchData(doublell)
      }
      if (searchParams.get('topic') === "circular-linked-list") {
        fetchData(circularll)
      }
      if (searchParams.get('topic') === "stack") {
        fetchData(stack)
      }
    }


    if (params.pageid === "queues") {
      if (searchParams.get('topic') === "queue") {
        fetchData(queue)
      }
      if (searchParams.get('topic') === "deque") {
        fetchData(deque)
      }
      if (searchParams.get('topic') === "circular-queue") {
        fetchData(cqueue)
      }
    }


    if (params.pageid === "trees") {
      if (searchParams.get('topic') === "binary-tree") {
        fetchData(bt)
      }
      if (searchParams.get('topic') === "binary-search-tree") {
        fetchData(bst)
      }
      if (searchParams.get('topic') === "N-arry-tree") {
        fetchData(narry)
      }
    }


    if (params.pageid === "maps") {
      if (searchParams.get('topic') === "hashmap") {
        fetchData(hashmap)
      }
      if (searchParams.get('topic') === "linkedhashmap") {
        fetchData(lhashmap)
      }
      if (searchParams.get('topic') === "treemap") {
        fetchData(treemap)
      }
    }


    if (params.pageid === "sets") {
      if (searchParams.get('topic') === "hashset") {
        fetchData(hashset)
      }
      if (searchParams.get('topic') === "linkedhashset") {
        fetchData(lhashset)
      }
      if (searchParams.get('topic') === "treeset") {
        fetchData(treeset)
      }
    }


    if (params.pageid === "heaps") {
      if (searchParams.get('topic') === "heap") {
        fetchData(heap)
      }
      if (searchParams.get('topic') === "heapify") {
        fetchData(heapify)
      }
    }


    if (params.pageid === "tries") {
      if (searchParams.get('topic') === "trie") {
        fetchData(trie)
      }
    }


    if (params.pageid === "graphs") {
      if (searchParams.get('topic') === "graph") {
        fetchData(graph)
      }
      if (searchParams.get('topic') === "graphgeneric") {
        fetchData(ggraph)
      }
    }

  }, [params, searchParams])


  return (
    <div className='content'>
      <div className="stepper" style={{ marginBottom: '19px', marginTop: '11px' }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <p color="inherit" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <HomeIcon sx={{ fontSize: '15px', marginRight: '9px', marginTop: '-2px' }} />
            Home
          </p>
          <p color="inherit">
            {params.pageid}
          </p>
          <p color="inherit">
            {searchParams.get('topic')}
          </p>
        </Breadcrumbs>

      </div>
      <div className="content-md" style={{ width: '65%' }}>
        <Markdownc md={content} />
      </div>
      <div className="scrollview" style={{ width: '30%' }}>

      </div>
    </div>
  )
}
