import { Tooltip } from "react-tooltip";

const Item = ({ item, tooltip }) => {
  return (
    <div
      className="w-[40vh] h-[20vh] flex justify-center items-center bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-pointer group"
      data-tooltip-id="global-tooltip"
      data-tooltip-content={tooltip}
    >
      <img src={item} />
      <Tooltip
        id="global-tooltip"
        place="top"
        variant="custom" // estilo básico
        style={{
          background: "rgba(0, 0, 0, 0.50)", // vidro translúcido
          color: "#ffffff",
          backdropFilter: "blur(20px)", // blur glassmorphism
          padding: "0.75rem 1rem",
          borderRadius: "0.75rem",
          border: "1px solid rgba(0,0,0,0.3)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          fontSize: "0.875rem",
          maxWidth: "20rem",
          textAlign: "center",
          transition: "all 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default Item;
