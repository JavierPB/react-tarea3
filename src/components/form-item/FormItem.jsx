const FormItem = ({name, label, handleChange, ...props}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input name={name} onChange={handleChange} {...props} className="form-control" />
    </div>
  )
}
export default FormItem