import './input.css';

export function GlobalField ({label,placeholder,type,withLabel=true}) {
    return (
        <>
            {withLabel && <label htmlFor="" className='form-label'>{label}</label>}
            <input type={type} placeholder={placeholder} className="form-control" />
        </>  
    );
}