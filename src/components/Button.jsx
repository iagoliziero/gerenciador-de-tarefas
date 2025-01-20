function Button(props) {
    return (
        <button 
        {...props}
        className='bg-slate-400 p-2 rounded-md text-slate-100'> {props.children} </button>
    )
}

export default Button;