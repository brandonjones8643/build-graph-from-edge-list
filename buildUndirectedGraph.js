const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const buildUndirectedGraph = edges => {
  const graph = {};
  for (let e of edges) {
    const [a, b] = e;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

console.log(buildUndirectedGraph(edges));
