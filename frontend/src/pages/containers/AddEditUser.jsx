import React from 'react'
import { useForm } from 'react-hook-form'

const editFormHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end'
}

export const AddEditUser = ({ user, onSave, onClose }) => {
  const { register, handleSubmit, errors } = useForm({ defaultValues: user })

  return (
    <div>
      <div style={editFormHeader}>
        <h1 className="ui header">{user ? 'Edit' : 'Add'}</h1>
        <button className="ui default button" onClick={onClose}>Close</button>
      </div>
      <form className={"ui large form " + (Object.keys(errors).length ? "error" : "")} onSubmit={handleSubmit(onSave)}>
        <div className="ui stacked segment">
          <input type="number" hidden name="id" ref={register} />
          <div className="ui error message">
            <ul className="list">
              {errors.name && <li>Name is required.</li>}
              {errors.age && <li>Age is required and must be greater than 18 and less then 99.</li>}
            </ul>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" name="name" placeholder="First Name" ref={register({ required: true })} />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="number" name="age" placeholder="Age" ref={register({ required: true, min: 18, max: 99 })} />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="text" name="job" placeholder="Job" ref={register} />
            </div>
          </div>
          <button type="submit" className="ui fluid large blue submit button">Save</button>
        </div>
      </form>
    </div>
  )
} 
