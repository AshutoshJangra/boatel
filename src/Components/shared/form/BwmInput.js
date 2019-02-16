import React from "react";

export const BwmInput = ({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning }
}) => (
  <div className="form-group pt2 pb2">
    <label className="">{label}</label>
    <div className="input-group pt2 pb2">
      <input {...input} type={type} className={className} />
    </div>
    {touched && (error && <div className="alert alert-danger">{error}</div>)}
  </div>
);
