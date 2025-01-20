function Input(props) {
    return (
        <input
           type={props.title} 
           placeholder={props.placeholder}
           className="rounded-md px-4 py-2" 
           value={props.value}
           onChange={props.onChange}
        />
    );
}
export default Input;