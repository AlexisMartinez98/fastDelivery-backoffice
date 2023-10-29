import React from "react";
import { CircularProgress, Card, CardBody } from "@nextui-org/react";

interface PercentageCircle {
  value: number;
}

const PercentageCircle: React.FC<PercentageCircle> = ({ value }) => {
  return (
    <div>
      <Card className="w-[81px] h-[81px] border-none bg-gradient-to-br">
        <CardBody className="justify-center items-center pb-0">
          <CircularProgress
          aria-label="circular progress"
            classNames={{
              svg: "w-[81px] h-[81px] drop-shadow-md",
              indicator: "stroke-[#00EA77]",
              track: "stroke-green/10",
              value:
                " text-base font-bold  absolute inset-0 flex items-center justify-center",
            }}
            value={value || 0}
            strokeWidth={4}
            showValueLabel={true}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default PercentageCircle;
