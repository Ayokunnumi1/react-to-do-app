import '../modules/InputTodo.css'
const InputTodDo = () => {
    return (
        <form className="form-input">
            <input type="text" className="form-control-plaintext input-text" placeholder="Add todo..." onSubmit={(e) => e.target.value}></input>
            <button className= "add-button">
                <img src="./src/assets/addButton.svg" alt="" />
            </button>
        </form>
    );
}

export default InputTodDo;