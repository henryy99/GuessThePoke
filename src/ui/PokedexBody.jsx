function PokedexBody({ children }) {
  return (
    <div className="pokedex-body pb-5 max-w-[500px]  flex flex-col  gap-5 bg-gray-50 border-t-[3px] border-[#152345]">
      {children}
    </div>
  );
}

export default PokedexBody;
