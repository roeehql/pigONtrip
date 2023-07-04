import { handleAmountComma } from "util/handleAmountComma";

const TotalAmout = ({ total }: { total: number }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <h1 className="text-xl p-4 mt-4 border-4 border-yellow rounded">
        총액 : {handleAmountComma(total)}원
      </h1>
    </div>
  );
};

export default TotalAmout;
