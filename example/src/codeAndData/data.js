var data = {
  one: ` const graphData ={
    nodes: [
      {
        name: "Node A",
        id: 1
      },
      {
        name: "Node B",
        id: 2
      },
      {
        name: "Node C",
        id: 3
      },
      {
        name: "Node D",
        id: 4
      }
    ],
    links: [
      {
        source: 1,
        target: 2
      },
      {
        source: 1,
        target: 3
      },

      {
        source: 3,
        target: 4
      }
    ]
  }`,
  two: `const graphData= {
    nodes: [
      {
        name: "Node A",
        id: 1
      },
      {
        name: "Node B",
        id: 2
      },
      {
        name: "Node C",
        id: 3
      },
      {
        name: "Node D",
        id: 4
      }
    ],
    links: [
      {
        source: 1,
        target: 2,
        label: "A - b"
      },
      {
        source: 1,
        target: 3,
        label: "A - C"
      },

      {
        source: 3,
        target: 4,
        label: "C - D"
      }
    ]
  } `,
  three: `const graphData= {
    nodes: [
      {
        name: "Node A",
        id: 1
      },
      {
        name: "Node B",
        id: 2
      },
      {
        name: "Node C",
        id: 3
      },
      {
        name: "Node D",
        id: 4
      }
    ],
    links: [
      {
        source: 1,
        target: 2,
        label: "A - b"
      },
      {
        source: 1,
        target: 3,
        label: "A - C"
      },

      {
        source: 3,
        target: 4,
        label: "C - D"
      }
    ]
  }`,
  four: `const graphData= {
    nodes: [
      {
        name: "Node A",
        id: 1,
        img: "https://i.imgur.com/epYTzoC.png"
      },
      {
        name: "Node B",
        id: 2,
        img: "https://i.imgur.com/2znXJH4.png"
      },
      {
        name: "Node C",
        id: 3,
        img: "https://i.imgur.com/6NzAlPR.png"
      },
      {
        name: "Node D",
        id: 4,
        img: "https://i.imgur.com/F2pjuvV.png"
      }
    ],
    links: [
      {
        source: 1,
        target: 2
      },
      {
        source: 1,
        target: 3
      },

      {
        source: 3,
        target: 4
      }
    ]
  } `,
  five: `const graphData= {
    nodes: [
      {
        name: "Node A",
        id: 1
      },
      {
        name: "Node B",
        id: 2
      },
      {
        name: "Node C",
        id: 3
      },
      {
        name: "Node D",
        id: 4
      }
    ],
    links: [
      {
        source: 1,
        target: 2
      },
      {
        source: 1,
        target: 3
      },

      {
        source: 3,
        target: 4
      }
    ]
  }
  
  const anotherGraphData = {
    nodes: [
      {
        name: "Node A",
        id: 1
      },
      {
        name: "Node B",
        id: 2
      },
      {
        name: "Node C",
        id: 3
      },
      {
        name: "Node D",
        id: 4
      },
      {
        name: "Node E",
        id: 5
      }
    ],
    links: [
      {
        source: 1,
        target: 2
      },
      {
        source: 1,
        target: 3
      },

      {
        source: 3,
        target: 4
      },
      {
        source: 5,
        target: 4
      }
    ]
  }
  `
};

export const Data = component => {
  return data[component];
};
