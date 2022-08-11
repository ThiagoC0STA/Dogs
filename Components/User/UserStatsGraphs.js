import React, { useEffect, useState } from "react";
import { GraphsSection } from "./U__style";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      const hitsNumber = Number(item.acessos);
      return {
        x: item.title,
        y: hitsNumber === 0 ? 1 : hitsNumber,
      };
    });

    data.forEach(({ acessos }) => {
      if (acessos) {
        setTotal(
          data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
        );
      }
    });

    if (data.length === 0) {
      const initialGraph = [
        {
          x: "no photos",
          y: 100,
        },
      ];
      setGraph(initialGraph);
    } else {
      setGraph(graphData);
    }
  }, [data]);

  return (
    <GraphsSection className="leftAnimation container mainContainer">
      <div>
        <p>Hits: {total}</p>
      </div>
      <div>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </GraphsSection>
  );
};

export default UserStatsGraphs;
