
const Epi = ({ epi, style, ativo }) => {
    return (
        <img src={epi} className={`${ativo ? "flex" : "hidden"} absolute`} style={style}
        />
    )
}

export default Epi