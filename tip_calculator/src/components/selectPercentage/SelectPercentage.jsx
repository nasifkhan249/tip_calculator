

const SelectPercentage = ({children,percentage,onSetPercentage}) => {
    return (
        <div>
            <label>{children}</label>
            <select value={percentage} onChange={(e)=>onSetPercentage(Number(e.target.value))}>
                <option value="0">Dissatified(0%)</option>
                <option value="1">It was ok(5%)</option>
                <option value="2">It was good(10%)</option>
                <option value="2">Absolutely amazing(20%)</option>
            </select>
        </div>
    );
};

export default SelectPercentage;